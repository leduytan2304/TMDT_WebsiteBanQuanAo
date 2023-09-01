import axios from "axios"

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8000/api/login', {Email: userEmail, password: userPassword});
}

const handleRegisterApi = (userEmail, userName, userPhone, userPassword) => {
    return axios.post('http://localhost:8000/api/register', {Email: userEmail, LastName: userName, Tel: userPhone, password: userPassword});
}

const handleEditProfileApi = (userID, FirstName, LastName, Tel, Dob, Gender, Email) => {
    return axios.put('http://localhost:8000/api/user/profile/edit', 
    {userID: userID, FirstName: FirstName, LastName: LastName, Tel: Tel, Dob: Dob, Gender: Gender, Email: Email});
}


export {handleLoginApi, handleRegisterApi, handleEditProfileApi}