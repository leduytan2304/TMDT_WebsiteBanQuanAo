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

const handleEditAddress = (userID, addrID, addrName, address, name, tel, isDefault) => {
    return axios.put('http://localhost:8000/api/user/address/edit', 
    {userID: userID, addrID: addrID , addrName: addrName, address: address, name: name, tel: tel, isDefault: isDefault});
}

const handleAddAddress = (userID, addrName, address, name, tel, isDefault) => {
    return axios.post('http://localhost:8000/api/user/address/add', 
    {userid: userID, addressname: addrName, address: address, receivename: name, receivephone: tel, isdefault: isDefault});
}


export {handleLoginApi, handleRegisterApi, handleEditProfileApi, handleEditAddress, handleAddAddress}