import { db } from "../connect.js";

export const getUserInfo = (req ,res)=>{
    const q = 'select LastName, Tel, Email from sql6637195.UserAccount where UserID = "' + req.params.userID  +'" ';

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      
      return res.status(200).json(data);
      
    });
}