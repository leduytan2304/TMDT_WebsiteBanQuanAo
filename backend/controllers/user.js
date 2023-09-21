import { db } from "../connect.js";

export const getUserInfo = (req ,res)=>{
  
    const q = "Call sp_ViewProfile(?)";

    db.query(q, req.params.userID, (err, data) => {
      if (err) return res.status(500).json(err);
      
      return res.status(200).json(data[0]);
      
    });
}

export const editUserInfo = (req ,res)=>{
  const q = "Call sp_EditProfile(?)";

  const values = [
      req.body.userID,
      req.body.FirstName,
      req.body.LastName,
      req.body.Tel,
      req.body.Dob,
      req.body.Gender,
      req.body.Email
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
    
  });
}

export const getUserAddress = (req ,res)=>{
  const q = "Call sp_ViewAddress(?)"

  db.query(q, req.params.userID, (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const addUserAddress = (req ,res)=>{
  const q = "Call sp_AddNewAddress(?)";

  const values = [
      req.body.userid,
      req.body.addressname,
      req.body.address,
      req.body.receivename,
      req.body.receivephone,
      req.body.isdefault
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const getOrderHistory = (req ,res)=>{
  const q = "Call sp_ViewOrderHistory(?)"

  db.query(q, req.params.userID, (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const getRewardPoint = (req ,res)=>{
  const q = "Call sp_ViewRewardPoint(?)"

  db.query(q, req.params.userID, (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const editUerAddress = (req ,res)=>{
  const q = "Call sp_EditAddress(?)";

  const values = [
      req.body.userID,
      req.body.addrID,
      req.body.addrName,
      req.body.address,
      req.body.name,
      req.body.tel,
      req.body.isDefault
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
    
  });
}
