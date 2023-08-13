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


