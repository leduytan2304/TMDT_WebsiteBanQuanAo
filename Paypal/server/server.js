import express from "express";
import fetch from "node-fetch";
import "dotenv/config";
import path from "path";
import axios from 'axios';
const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 9999 } = process.env;
const base = "https://api-m.sandbox.paypal.com";
const app = express();
// host static files
app.use(express.static("client"));

// parse post params sent in body in json format
app.use(express.json());

/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 * @see https://developer.paypal.com/api/rest/authentication/
 */
const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS");
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

/**
 * Create an order to start the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
 */
const createOrder = async (cart) => {
  // use the cart information passed from the front-end to calculate the purchase unit details
  console.log(
    "shopping cart information passed from the frontend createOrder() callback:",
    cart,
  );

  // console.log('TotalPricefinal: ',CartMoney);
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value:  "100.00",
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

            
  // await fetch(`http://localhost:8000/api/cart_payment/createOrderPayPal/${UserID}` , { // thay đổi user sau
  //         method: 'POST',
  //         body: JSON.stringify({
  //           userID: UserID ,
  //           delivery_option: "Giao hàng",
  //           user_address: address[0].UserAddress,
  //           receiver_name: address[0].ReceiverName,
  //           receiver_number: address[0].ReceiverPhoneNumber,
  //           payment_method_name: "Chuyển khoản",
  //           customer_payment_details: "Thanh toán thông qua PayPal",
  //           payment_transaction_time:"NOW()",
  //            payment_status: "Đã thanh toán",
  //            voucher_id : null,
  //            point_redeem : 0,
  //         }),
  //         headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //         },
  //       })
  //         .then((response) => {
  //           console.log('post success')
  //           response.json()
  //       })
  //         .then((json) => console.log(json));

  return handleResponse(response);
};

/**
 * Capture payment for the created order to complete the transaction.
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
      // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
      // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
      // "PayPal-Mock-Response": '{"mock_application_codes": "INSTRUMENT_DECLINED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "TRANSACTION_REFUSED"}'
      // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
    },
  });
  const address =[];
  axios.get(`http://localhost:8000/api/cart_payment/userAdress/${UserID}`)
  .then(res => {
    address.push(res.data)
    console.log('address: ', address[0][0].ReceiverName);
    
    fetch(`http://localhost:8000/api/cart_payment/createOrderPayPal/${UserID}` , { ///hoàn thành đơn đặt hàng
            method: 'POST',
            body: JSON.stringify({
              userID: UserID ,
              delivery_option: "Giao hàng",
              user_address: address[0][0].UserAddress,
              receiver_name: address[0][0].ReceiverName,
              receiver_number: address[0][0].ReceiverPhoneNumber,
              payment_method_name: "Chuyển khoản",
              customer_payment_details: "Thanh toán thông qua PayPal",
              payment_transaction_time:"NOW()",
              payment_status: "Đã thanh toán",
              voucher_id : null,
              point_redeem : 0,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => {
              console.log('post success')
              response.json()
          })
            .then((json) => console.log(json));
  })


  // await fetch(`http://localhost:8000/api/cart_payment/createOrderPayPal/${UserID}` , { ///hoàn thành đơn đặt hàng
  //           method: 'POST',
  //           body: JSON.stringify({
  //             userID: UserID ,
  //             delivery_option: "Giao hàng",
  //             user_address: address[0][0].UserAddress,
  //             receiver_name: address[0][0].ReceiverName,
  //             receiver_number: address[0][0].ReceiverPhoneNumber,
  //             payment_method_name: "Chuyển khoản",
  //             customer_payment_details: "Thanh toán thông qua PayPal",
  //             payment_transaction_time:"NOW()",
  //             payment_status: "Đã thanh toán",
  //             voucher_id : null,
  //             point_redeem : 0,
  //           }),
  //           headers: {
  //             'Content-type': 'application/json; charset=UTF-8',
  //           },
  //         })
  //           .then((response) => {
  //             console.log('post success')
  //             response.json()
  //         })
  //           .then((json) => console.log(json));



  return handleResponse(response);
};

async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();
    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}

app.post("/api/orders", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

//////

app.post("/api/orders", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder(cart);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});


//////
app.post("/api/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});

// serve index.html
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.post("/", async (req, res) => {
  global.UserID = req.body.userID
  console.log('UserID',UserID);
  global.CartMoney = parseFloat(req.body.totalCartMoney/24300).toFixed(2)


 
});
app.get("/", (req, res) => {
  
  res.sendFile(path.resolve("./client/checkout.html"));
});

app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`);
});
