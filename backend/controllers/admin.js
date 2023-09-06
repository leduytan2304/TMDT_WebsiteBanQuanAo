import { db } from "../connect.js";


export const addNewProduct = (req,res)=>{
    const q1 = "Call sp_AddNewProduct(?)";
  
    const values1 = [
        req.body.name,
        req.body.description,
        req.body.category,
        req.body.price,
        req.body.material,
        req.body.discount
    ];

    db.query(q1, [values1],(err, data) => {
      if (err) return res.status(500).json(err);
      
      else {
        console.log(data[0][0].product_id);

        const q2 = "Call sp_AddImageLink(?)";
        const value2 = [
          data[0][0].product_id,
          req.body.link
        ]

        db.query(q2, [value2], (err, data2) => {
          if (err) return res.status(500).json(err);
          
          else {
            const q3 = "Call sp_AddProductVariant(?, @result)";
            const value3 = [
              data[0][0].product_id,
              req.body.size,
              req.body.color
            ]
    
            db.query(q3, [value3], (err, data3) => {
              if (err) return res.status(500).json(err);
              console.log(data3);
              return res.status(200).json(data3);
            })

          }
        })
      }
    });
  }

