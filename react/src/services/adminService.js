import axios from '../axios';


const addProductApi = (productName, productDes, productCate, productPrice, productMaterial, 
    productDis, productLink, productSize, productColor) => {
    return axios.post('http://localhost:8000/api/admin/addproduct', {name: productName, description: productDes, category: productCate,
        price: productPrice, material: productMaterial, discount: productDis, link: productLink, color: productColor, size: productSize});
}

const updateStatusApi = (orderid, orderstatus) => {
    return axios.put('http://localhost:8000/api/admin/updatestatus', {orderid: orderid, orderstatus:orderstatus });
}



export {addProductApi, updateStatusApi}