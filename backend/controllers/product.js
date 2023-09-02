import { db } from "../connect.js";

export const getImageTShirt = (req,res)=>{
    const q = "SELECT * FROM Product PD, Images IM where PD.ProductID = IM.ProductID and PD.CategoryID = 'CAT001';";

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      
      return res.status(200).json(data);
      
    });
}

export const getImagePant = (req,res)=>{
  const q = "SELECT * FROM Product PD, Images IM where PD.ProductID = IM.ProductID and PD.CategoryID = 'CAT002';";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data);
    
  });
}
export const getImage = (req,res)=>{
  const q = "SELECT * FROM Product PD, Images IM where PD.ProductID = IM.ProductID ;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data);
    
  });
}

export const getDetail = (req,res)=>{
  
  const q = 'SELECT * FROM Product PD, Images IM where PD.ProductID = IM.ProductID and PD.ProductID = "' + req.params.productID  +'" ';
  // res.params.productID =id
  // console.log(res.params.productID );
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    // console.log(q);
    return res.status(200).json(data);
    
  });
}

export const getProductsFilter = (req,res)=>{
  const q = "SELECT * FROM Product PD, Images IM where PD.ProductID = IM.ProductID;";

  const { query } = req.query;

  const keys = ["ProductName", "ProductDescription"];

  const search = (data) => {
    return data.filter((item) =>
    keys.some((key) => {
      const value = item[key];

      if (typeof value === 'string') {
        return value.toLowerCase().includes(query.toLowerCase());
      }
      return false;
    })
  );
  };

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    
    const dataArray = Array.from(data);

    const filteredData = query ? search(dataArray).slice(0, 10) : dataArray.slice(0, 10);

    return res.status(200).json(filteredData);
  });
}



