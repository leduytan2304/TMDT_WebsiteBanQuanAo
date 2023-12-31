import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

export const register = (req, res) => {
    //CHECK USER IF EXISTS
    db.query("SELECT * FROM UserAccount WHERE Email = ?", [req.body.Email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");
  
    //CREATE A NEW USER
    const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    const values = [
      req.body.FirstName,
      req.body.LastName,
      req.body.Tel,
      req.body.Dob,
      req.body.Gender,
      req.body.Email,
      hashedPassword,
      0
    ];
    
    const q2 = "Call sp_Register(?)";

    console.log(values);

    db.query(q2, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

export const login = (req, res) => {
  const q = "SELECT * FROM UserAccount WHERE Email = ?";

  db.query(q, [req.body.Email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(req.body.password, data[0].PW);

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign(
      { id: data[0].UserID, role: data[0].isAdmin,
        exp: Math.floor(Date.now() / 1000) + (60 * 60) },
        'fashall');

    const { password, ...others } = data[0];

    res
      .status(200).cookie("token", token)
      .json({
            "userID": data[0].UserID,
            "isAdmin": data[0].isAdmin,
            "accessToken": token
      })

  });
  
};

export const verifyJWT = (req, res, next) => {
  const token = req.header["access-token"];
  console.log(req.header)
  if(!token){
    return res.json("We need token, please provide it for next time")
  } else{
    jwt.verify(token, "fashall", (err, decoded) => {
      if(err){
        res.json("Not authentication")
      }else {
        req.UserID = decoded.id;
        console.log(req.UserID);
        next();
      }
    })
  }
}

export const logout = (req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")

};


export const testing = (req ,res)=>{
  const currentUrl = req.params.userID;
  // console.log('url ' + currentUrl);
  const values = [
      req.body
    ]
    console.log(req.body);
    const getProductVariant = 'select ProductVariantID FROM ProductVariant PV where PV.ProductID = "' +values[0].productID+ '" and ProductSizeID = "' + (values[0].size) +'"';
    db.query(getProductVariant, (err, result) => {
      if (err) return res.status(500).json(err);
      console.log(result[0].ProductVariantID);
      //cau truy van goi store pro sp_AddProductIntoShoppingCart
      var updateCart = "call sp_AddProductIntoShoppingCart('" + result[0].ProductVariantID + "','" + values[0].number + "', '"+ values[0].userID + "')";
      console.log(updateCart);
      db.query(updateCart, function(err, result) {
        if (err) throw err;
        // console.log('final result ', result[0][0].Result);
        res.status(200).json(result)
      })
    });
    
   
      
      
    
  }


export const cartDetail = (req ,res)=>{
  const currentUrl = req.params.userID;
  const values = [
      req.body
    ]
    const selectItemInCart = "call sp_ViewShoppingCartDetails('" +currentUrl +"')"
    console.log(selectItemInCart);
    db.query(selectItemInCart, function(err, result) {
      if (err) throw err;
      // console.log('final result ', result);
      
      
       res.status(200).json(result)
    }) 
  
}
