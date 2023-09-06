import axios from '../axios';


const addProductApi = (productName, productDes, productCate, productPrice, productMaterial, 
    productDis, productLink, productSize, productColor) => {
    return axios.post('http://localhost:8000/api/admin/addproduct', {name: productName, description: productDes, category: productCate,
        price: productPrice, material: productMaterial, discount: productDis, link: productLink, size: productSize, color: productColor });
}




export {addProductApi}