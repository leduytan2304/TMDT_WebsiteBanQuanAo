import axios from "axios"




const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8000/api/login', {Email: userEmail, password: userPassword});
}

const handleRegisterApi = (userEmail, userName, userPhone, userPassword) => {
    return axios.post('http://localhost:8000/api/register', {Email: userEmail, LastName: userName, Tel: userPhone, password: userPassword});
}



export {handleLoginApi, handleRegisterApi}