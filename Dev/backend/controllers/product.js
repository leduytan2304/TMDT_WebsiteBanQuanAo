import { db } from "../connect.js";

export const getImage = (req,res)=>{
    const q = "SELECT * FROM Images";

    db.query(q, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
}

