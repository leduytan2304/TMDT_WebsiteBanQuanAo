import { db } from "../connect.js";

export const getTotalPriceShopingCart = (req ,res)=>{
     const userID = req.params.userID;
    const q = 'SELECT ShoppingCartID FROM ShoppingCart SC where SC.UserID = "' + userID + '"'; // thay đổi user sau
    db.query(q, (err, data) => {
      if (err) 
      return res.status(500).json(err);
      
      else {
        
        const secondQuery = "select uf_CalShoppingcartTotalCost('" + data[0].ShoppingCartID + "')";
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
  console.log("Test",req.body);
  // const secondQuery = "select uf_CalShoppingcartTotalCost('" + q + "')";
  db.query(q, (err, result1) => {
    if (err) 

    return res.status(500).json(err);
    
    else {
      console.log("Test",result1);
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


export const completedPayment = (req ,res)=>{
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


export const createOrder = (req ,res)=>{
  // tạo đơn đặt hàng
  const values = [
    req.body
  ]
  const q = 'CALL sp_CreateOrder("' +req.body.userID +'","' + req.body.delivery_option +'","' + req.body.user_address +'","' +req.body.receiver_name +'","' +req.body.receiver_number +'","' + req.body.payment_method_name +'","' + req.body.customer_payment_details + '",NOW(),"'+req.body.payment_status+'",NULL,0); '; // sửa lại từng user riêng
  console.log('Query: ',q);
  db.query(q, (err, result1) => {
    if (err) 
    return res.status(500).json(err);
    else {
      console.log(result1);
      return res.status(200).json(result1);
    // });
    }
    /// xóa món đồ khỏi giỏ hàng
  });
}

export const createOrderPayPal = (req ,res)=>{
  // tạo đơn đặt hàng
  const values = [
    req.body
  ]
  const q = 'CALL sp_CreateOrder("' +req.body.userID +'","' + req.body.delivery_option +'","' + req.body.user_address +'","' +req.body.receiver_name +'","' +req.body.receiver_number +'","' + req.body.payment_method_name +'","' + req.body.customer_payment_details + '",NOW(),"'+req.body.payment_status+'",NULL,0); '; // sửa lại từng user riêng
  console.log('Query: ',q);
  db.query(q, (err, result1) => {
    if (err) 
    return res.status(500).json(err);
    else {
      console.log(result1);
      return res.status(200).json(result1);
    // });
    }
    /// xóa món đồ khỏi giỏ hàng
  });
}



export const getUserAddress = (req ,res)=>{
  // tìm productVariant
  const userID = req.params.userID;
  const q = 'SELECT UserID,ReceiverName, ReceiverPhoneNumber, UserAddress FROM CustomerAddress CA where CA.UserID = "' + userID +'" and CA.DefaultAddress = 1;'
  db.query(q, (err, data) => {
    if (err) 
    return res.status(500).json(err);
    
    else {
    
          console.log(data);
          return res.status(200).json(data);
    }
  });
    //lấy địa chỉ của khách hàng
}



export const refundMoney = (req ,res)=>{
  var q = 'call sp_AddProductBackToCart("' +req.body.cartID+ '","'+ req.body.userID+ '")'
  var q2 = 'update sql12643980.Order set OrderStatus = "Đã Hoàn Tiền" where OrderID = "' +req.body.cartID +'";'

  console.log(q);
  db.query(q, (err, result1) => {
    if (err) 

    return res.status(500).json(err);
    
    else {

      console.log(result1);
      console.log('query2: ', q2);
      db.query(q2, (err, result2) => {
      if (err) 
          return res.status(500).json(err);
        else{
          console.log(result2);
          return res.status(200).json(result2);
        }
    });
    }
    /// xóa món đồ khỏi giỏ hàng refund
    
  });
    //lấy địa chỉ của khách hàng
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

