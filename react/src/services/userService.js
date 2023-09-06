import axios from "axios"

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8000/api/login', {Email: userEmail, password: userPassword});
}

const handleRegisterApi = (userEmail, userFName, userLName, userGender, userDob, userPhone, userPassword) => {
    return axios.post('http://localhost:8000/api/register', {Email: userEmail, FirstName: userFName, LastName: userLName, Gender: userGender, Dob: userDob, Tel: userPhone, password: userPassword});
}

const handleEditProfileApi = (userID, FirstName, LastName, Tel, Dob, Gender, Email) => {
    return axios.put('http://localhost:8000/api/user/profile/edit', 
    {userID: userID, FirstName: FirstName, LastName: LastName, Tel: Tel, Dob: Dob, Gender: Gender, Email: Email});
}


export {handleLoginApi, handleRegisterApi, handleEditProfileApi}