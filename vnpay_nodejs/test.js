import axios from 'axios'
const data = [
    {
      UserID: 'U0025',
      ReceiverName: 'Phan Thanh Minh',
      ReceiverPhoneNumber: '0819599999',
      UserAddress: '225 Đường Nguyễn Văn Cừ, P.4, Q.5, Hồ Chí Minh'
    }
  ]
  const address =[];
  await axios.get(`https://react-crud-kc0l.onrender.com/api/cart_payment/userAdress/${UserID}`)
  .then(res => {
    address.push(res.data)
    console.log('address: ', address[0].ReceiverName);
  })
 
