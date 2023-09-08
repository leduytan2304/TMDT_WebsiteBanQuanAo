import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import HomeFooter from '../../HomePage/HomeFooter';
import './Customer_Manage.scss'
import axios from 'axios';

class Customer_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/admin/listuser`)
        .then(res => {
        const users = res.data;
        this.setState({ users});
        })
        .catch(error => console.log(error));
    }

    handleViewDetailUser = (UserID) => {
        // console.log("ID sản phẩm",params.slug);
        console.log(UserID);
        
        // this.props.history.push(`/admin/customer-manage/${UserID}`);
        this.props.history.push(`/admin/user_info/${UserID}`);
    };
    

    render() {
        return (
            <div>
                <div className="admin-container" id="cus-m">
                    <h1>
                        Danh sách khách hàng
                    </h1>
                    <div className="customer-manage-container" >
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Họ Tên</th>
                                    <th scope="col">Giới tính</th>
                                    <th scope="col">Ngày sinh</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Số điện thoại</th>
                                </tr>
                            </thead>
                            
                                <tbody class="table-group-divider overflow-auto">
                                {this.state.users.map((user, index) => (
                                        <tr onClick={() => this.handleViewDetailUser(user.UserID)}>
                                            <th scope="row"> {index + 1} </th>
                                            <td>{user.LastName} {user.FirstName}</td>
                                            <td>{user.Gender}</td>
                                            <td>{user.Date}</td>
                                            <td>{user.Email}</td>
                                            <td>{user.Tel}</td>
                                        </tr>
                                    
                                ))}
                                </tbody>

                        </table>
                    </div>
                </div>
                <HomeFooter />
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer_Manage);
