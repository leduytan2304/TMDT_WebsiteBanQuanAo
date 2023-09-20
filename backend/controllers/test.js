import { db } from "../connect.js";

export const postImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
  
    const imageBuffer = req.file.buffer.toString('base64');
    const product_id = "SP0020";

    const value = [
      product_id,
      imageBuffer
    ]
    
    console.log(imageBuffer);
  
    const sql = 'Call sp_AddImageLink(?)';
    db.query(sql, [value], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error uploading image' });
        }
        return res.status(200).json({ message: 'Image uploaded successfully' });
    });
};
  