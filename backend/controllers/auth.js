import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import moment from "moment/moment.js";

function generateFormattedId(count) {   // Hàm tạo id User với form 'U0000'
  const idNumber = count + 1;
  const paddedId = idNumber.toString().padStart(4, '0');
  return `U${paddedId}`;
}

export const register = (req, res) => {
    //CHECK USER IF EXISTS
    db.query("SELECT * FROM UserAccount WHERE Email = ?", [req.body.Email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("User already exists!");

    db.query('SELECT COUNT(*) as count FROM UserAccount', (selectError, selectResults) => {
      if (selectError) {
        console.error('Select Error:', selectError);
        return res.status(500).json({ error: 'Database error' });
      }

    const count = selectResults[0].count;
    const formattedId = generateFormattedId(count);
    var currentDate = moment().format('YYYY-MM-DD');

  
    //CREATE A NEW USER
    const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    const q =
    "INSERT INTO UserAccount (`UserID`,`FirstName`,`LastName`,`Tel`,`DOB`, `Gender`,`Email`, `PW`, `RegistrationDate`,`UpdateLoyaltyTierDate`,`isAdmin`,`TierLevel`) VALUES (?)";

    const values = [
      formattedId,
      "Null",
      req.body.LastName,
      req.body.Tel,
      '2023-01-01',
      'Nam',
      req.body.Email,
      hashedPassword,
      currentDate,
      currentDate,
      "false",
      3,
    ];

    console.log(values);

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
})};

export const login = (req, res) => {
  const q = "SELECT * FROM UserAccount WHERE Email = ?";

  db.query(q, [req.body.Email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(req.body.password.toString(), data[0].PW);

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: data[0].UserID }, "secretkey");

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others)
  });
  
};

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
    const getProductVariant = 'select * FROM ProductVariant PV where PV.ProductID = "' +values[0].productID+ '" and ProductSizeID = "' + (values[0].size) +'"';
    console.log('getProductVariant :' + getProductVariant);
    console.log(values);
    db.query(getProductVariant, (err, data) => {
      
      if (err) return res.status(500).json(err);
      console.log(getProductVariant);
      const updateCart = 'call sp_AddProductIntoShoppingCart(' + db.query(getProductVariant) + "'," + values[0].size + ", '"+ U0025 + '"';
      console.log(updateCart);
      return res.status(200).json(data);
      
    });
  }

export const testing2 = (req ,res)=>{
  const currentUrl = req.params.userID;
  // console.log('url ' + currentUrl);
 
    console.log(values);
    const getProductVariant = 'select * FROM ProductVariant PV where PV.ProductID = "' +values[2].productID+ '" and ProductSizeID = "' + (values[2].size) +'"';
    console.log('getProductVariant :' + getProductVariant);
    console.log((values[2].productID));
    db.query(getProductVariant, (err, data) => {
      if (err) return res.status(500).json(err);
      console.log(getProductVariant);
      return res.status(200).json(data);
      
    });
}