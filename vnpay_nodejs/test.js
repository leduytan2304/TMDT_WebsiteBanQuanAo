const images =[
    [
      {
        "ProductName": "Basic Tee",
        "ProductSizeID": "M",
        "ColorName": "Tím",
        "ProductPrice": 300000,
        "DiscountedPrice": 300000,
        "DiscountedPercent": 0,
        "ProductQuantity": 25,
        "sql6640429.ufn_GetProductFirstImageLink(P.ProductID)": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/456779/sub/goods_456779_sub14.jpg?width=750"
      },
      {
        "ProductName": "Basic Tee",
        "ProductSizeID": "L",
        "ColorName": "Tím",
        "ProductPrice": 300000,
        "DiscountedPrice": 300000,
        "DiscountedPercent": 0,
        "ProductQuantity": 7,
        "sql6640429.ufn_GetProductFirstImageLink(P.ProductID)": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/456779/sub/goods_456779_sub14.jpg?width=750"
      },
      {
        "ProductName": "Stone wassh jacket",
        "ProductSizeID": "L",
        "ColorName": "Trắng",
        "ProductPrice": 400000,
        "DiscountedPrice": 400000,
        "DiscountedPercent": 0,
        "ProductQuantity": 3,
        "sql6640429.ufn_GetProductFirstImageLink(P.ProductID)": "https://kikillopieces.com/cdn/shop/products/all-over-print-mens-athletic-long-shorts-white-front-63290030c14d0_720x.png?v=1675877197"
      }
    ],
    {
      "fieldCount": 0,
      "affectedRows": 0,
      "insertId": 0,
      "serverStatus": 2,
      "warningCount": 0,
      "message": "",
      "protocol41": true,
      "changedRows": 0
    }
  ]

 const b = images[0].map((value) =>{ const a= value.ProductName + 'a'
 console.log(a)} 
 );

 var sum = 0;
 const unitSum = images[0].map((image) => {
     const temp = parseFloat(image.ProductPrice) * parseInt(image.ProductQuantity);
     sum += temp;
     return temp;   
 });
 console.log(unitSum);