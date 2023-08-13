import axios from "axios"

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8000/api/login', {Email: userEmail, password: userPassword});
}

export {handleLoginApi}



