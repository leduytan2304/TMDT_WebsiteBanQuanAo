import { db } from "../connect.js";

export const getTotalPriceShopingCart = (req ,res)=>{
    const q = "SELECT ShoppingCartID FROM sql6642429.ShoppingCart where UserID = 'U0025';";
    const secondQuery = "select sql6642429.uf_CalShoppingcartTotalCost('" + q + "')";
    db.query(q, (err, data) => {
      if (err) 
      return res.status(500).json(err);
      
      else {
        
        const secondQuery = "select sql6642429.uf_CalShoppingcartTotalCost('" + data[0].ShoppingCartID + "')";
        db.query(secondQuery, (err, data2) => {
            if (err) return res.status(500).json(err);
            console.log(data2);
            return res.status(200).json(data2);
        })
      }
     
      
    });
}
export const addProductToCart = (req ,res)=>{
  // tìm productVariant

  const values = [
    req.body
  ]


  
  const q = 'SELECT ProductVariantID FROM ProductVariant where ProductID = "' + req.body.productID + '" and ProductSizeID = "' + req.body.size  + '" '; // sửa lại từng user riêng
  console.log(req.body);
  // const secondQuery = "select uf_CalShoppingcartTotalCost('" + q + "')";
  db.query(q, (err, result1) => {
    if (err) 

    return res.status(500).json(err);
    
    else {
      console.log(result1);
      const addProduct = 'call sp_AddProductIntoShoppingCart("' + result1[0].ProductVariantID +'","1","' + req.body.userID +'")';
      console.log('query2: ', addProduct);
      db.query(addProduct, (err, result2) => {
      if (err) return res.status(500).json(err);
      // console.log("Query: "+getProductVariant);
      console.log(result2);
      //cau truy van goi store pro sp_AddProductIntoShoppingCart
      return res.status(200).json(result2);
      
    });
    }
    /// thêm vào giỏ hàng
 
    
    
    
  });
}

// Hàm bỏ sản phẩm ra khỏi giỏ hàng

export const removeProductFromCart = (req ,res)=>{
  // tìm productVariant

  const values = [
    req.body
  ]


  
  const q = 'SELECT ProductVariantID FROM ProductVariant where ProductID = "' + req.body.productID + '" and ProductSizeID = "' + req.body.size  + '" '; // sửa lại từng user riêng
  console.log(req.body);
  // const secondQuery = "select uf_CalShoppingcartTotalCost('" + q + "')";
  db.query(q, (err, result1) => {
    if (err) 

    return res.status(500).json(err);
    
    else {

      console.log(result1);
      const addProduct = 'call sp_ReduceProductShoppingCart("' + result1[0].ProductVariantID +'","1","' + req.body.userID +'")';
      console.log('query2: ', addProduct);
      db.query(addProduct, (err, result2) => {
      if (err) return res.status(500).json(err);

      console.log(result2);
  
      return res.status(200).json(result2);
      
    });
    }
    /// trừ 1 sản phẩm trong giỏ hàng
 
    
    
    
  });
}


export const deleteProductFromCart = (req ,res)=>{
  // tìm productVariant

  const values = [
    req.body
  ]


  
  const q = 'SELECT ProductVariantID FROM ProductVariant where ProductID = "' + req.body.productID + '" and ProductSizeID = "' + req.body.size  + '" '; // sửa lại từng user riêng
  console.log(req.body);
  // const secondQuery = "select uf_CalShoppingcartTotalCost('" + q + "')";
  db.query(q, (err, result1) => {
    if (err) 

    return res.status(500).json(err);
    
    else {

      console.log(result1);
      const addProduct = 'call sp_EditShoppingCart("' + result1[0].ProductVariantID +'","0","' + req.body.userID +'")';
      console.log('query2: ', addProduct);
      db.query(addProduct, (err, result2) => {
      if (err) return res.status(500).json(err);
      console.log(result2);
      return res.status(200).json(result2);
      
    });
    }
    /// xóa món đồ khỏi giỏ hàng
 
    
    
    
  });
}




export const testing = (req ,res)=>{
  const currentUrl = req.params.userID;
  // console.log('url ' + currentUrl);
  const values = [
      req.body
    ]
    const getProductVariant = 'select ProductVariantID FROM ProductVariant PV where PV.ProductID = "' +values[0].productID+ '" and ProductSizeID = "' + (values[0].size) +'"';
    // console.log('getProductVariant :' + getProductVariant);
    // console.log(values);
    db.query(getProductVariant, (err, result) => {
      if (err) return res.status(500).json(err);
      // console.log("Query: "+getProductVariant);
      console.log(result[0].ProductVariantID);
      //cau truy van goi store pro sp_AddProductIntoShoppingCart
      var updateCart = "call sp_AddProductIntoShoppingCart('" + result[0].ProductVariantID + "','" + values[0].number + "', '"+ values[0].userID + "')";
      db.query(updateCart, function(err, result) {
        if (err) throw err;
        // console.log('final result ', result[0][0].Result);
        res.status(200).json(result)
      })
    });
    
    // var updateCart = "call sp_AddProductIntoShoppingCart('" + result[0].ProductVariantID + "','" + values[0].number + "', '"+ values[0].userID + "')";
    // db.query(updateCart, (err, result) => {
    //   if (err) return res.status(500).json(err);
    //   console.log(result);
    // });
      
      
    
  }
