import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function generateFormattedId(count) {
  const idNumber = count + 1;
  const paddedId = idNumber.toString().padStart(4, '0');
  return `U${paddedId}`;
}

export const register = (req, res) => {
  //CHECK USER IF EXISTS

  const q = "SELECT * FROM UserAccount WHERE Email = ?";

  db.query('SELECT COUNT(*) as count FROM UserAccount', (selectError, selectResults) => {
    if (selectError) {
      console.error('Select Error:', selectError);
      return res.status(500).json({ error: 'Database error' });
    }
  
  const count = selectResults[0].count;
  const formattedId = generateFormattedId(count);
  
  db.query(q, [req.body.Email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //CREATE A NEW USER
    const salt = bcrypt.genSaltSync(10);
    const hashPW = req.body.PW;
    const hashedPassword = bcrypt.hashSync(hashPW, salt);
    
    console.log(formattedId)
    const q =
    "INSERT INTO UserAccount (`UserID`,`FirstName`,`LastName`,`Tel`,`DOB`, `Gender`,`Email`, `PW`, `RegistrationDate`,`UpdateLoyaltyTierDate`,`isAdmin`,`TierLevel`) VALUES (?)";

    const values = [
      formattedId,
      req.body.FirstName,
      req.body.LastName,
      req.body.Tel,
      req.body.DOB,
      req.body.Gender,
      req.body.Email,
      hashedPassword,
      req.body.RegistrationDate,
      req.body.UpdateLoyaltyTierDate,
      req.body.isAdmin,
      req.body.TierLevel,
    ];

    console.log(values);

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
})};

export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: data[0].id }, "secretkey");

    const { password, ...others } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res) => {
  res.clearCookie("accessToken",{
    secure:true,
    sameSite:"none"
  }).status(200).json("User has been logged out.")
};
