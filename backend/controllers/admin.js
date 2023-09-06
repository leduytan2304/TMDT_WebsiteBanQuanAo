import { db } from "../connect.js";


export const addNewProduct = (req,res)=>{
    const q = "Call sp_AddNewProduct(?)";
  
    const values = [
  
    ]
  
    db.query(q, [values],(err, data) => {
      if (err) return res.status(500).json(err);
      
      return res.status(200).json(data);
      
    });
  }