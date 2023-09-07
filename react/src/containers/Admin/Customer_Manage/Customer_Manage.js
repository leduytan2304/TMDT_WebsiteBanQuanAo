import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


import HomeFooter from '../../HomePage/HomeFooter';
import './Customer_Manage.scss'

class Customer_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    handleViewDetailUser = (UserID) => {
        // console.log("ID sản phẩm",params.slug);
        console.log(UserID);
        
        // this.props.history.push(`/admin/customer-manage/${UserID}`);
        this.props.history.push(`/admin/user_info/id-user`);
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
                                    
                                        <tr onClick={() => this.handleViewDetailUser(1)}>
                                            <th scope="row"> 1 </th>
                                            <td>Nguyễn Văn A</td>
                                            <td>Nam</td>
                                            <td>1/1/1970</td>
                                            <td>nguyenvana@gmail.com</td>
                                            <td>0123456789</td>
                                        </tr>
                                    
                                    <tr onClick={() => this.handleViewDetailUser(1)}>
                                        <th scope="row"> 2 </th>
                                        <td>Nguyễn Văn A</td>
                                        <td>Nam</td>
                                        <td>1/1/1970</td>
                                        <td>nguyenvana@gmail.com</td>
                                        <td>0123456789</td>
                                    </tr>

                                    <tr onClick={() => this.handleViewDetailUser(1)}>
                                        <th scope="row"> 3 </th>
                                        <td>Nguyễn Văn A</td>
                                        <td>Nam</td>
                                        <td>1/1/1970</td>
                                        <td>nguyenvana@gmail.com</td>
                                        <td>0123456789</td>
                                    </tr>
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
