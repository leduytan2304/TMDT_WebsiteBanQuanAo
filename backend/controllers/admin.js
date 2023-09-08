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
        var id;
        if(req.body.discount >= 1 && req.body.discount <= 100)  {
          id = data[1][0].product_id;
        }
        else {
          id = data[0][0].product_id;
        }
        
        console.log("Id product:", id);

        const q2 = "Call sp_AddImageLink(?)";
        const value2 = [
          id,
          req.body.link
        ]

        db.query(q2, [value2], (err, data2) => {
          if (err) return res.status(500).json(err);
          
          else {
            const q3 = "Call sp_AddProductVariantList(?, @result)";
            const value3 = [
              id,
              req.body.size,
              req.body.color
            ]

            db.query(q3, [value3], (err, data3) => {
              if (err) return res.status(500).json(err);
              
              return res.status(200).json(data3);
            })

          }
        })
      }
    });
  }

export const getOrderConfirm = (req ,res)=>{
  const q = "Call sp_ViewOrder(?)";

  db.query(q,'Chờ xác nhận', (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const getOrderDGoi = (req ,res)=>{
  const q = "Call sp_ViewOrder(?)";

  db.query(q, 'Đang đóng gói' ,(err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const getOrderDGiao = (req ,res)=>{
  const q = "Call sp_ViewOrder(?)";

  db.query(q,'Đang giao' ,(err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const getOrderHT = (req ,res)=>{
  const q = "Call sp_ViewOrder(?)";

  db.query(q,'Hoàn thành', (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const viewOrderDetail = (req ,res)=>{
  const q = "Call sp_ViewOrderDetails(?)";

  db.query(q, req.params.orderid, (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data[0]);
  });
}

export const getListUser = (req ,res)=>{
  const q = "SELECT *, date_format(DOB,'%d/%m/%Y') AS Date FROM UserAccount;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data);
  });
}

export const updateStatus = (req ,res)=>{
  const q = "Call sp_UpdateOrderStatus(?)";

  const values = [
    req.body.orderid,
    req.body.orderstatus
  ]

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    
    return res.status(200).json(data);
  });
}

