import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import './Info.scss';
import avatar from '../../../assets/Users/Avatar.png'

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            orders: []
        }
    }

    componentDidMount(){
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.UserID;
        axios.get(`http://localhost:8000/api/user/profile/${personsObject}`)
        .then(res => {
        const persons = res.data;
        this.setState({ persons });
        })
        .catch(error => console.log(error));

        axios.get(`http://localhost:8000/api/user/order/${personsObject}`)
        .then(res => {
        const orders = res.data;
        this.setState({ orders });
        })
        .catch(error => console.log(error));
    };
      
    render() {
        return (
            <div>
                <HomeHeader />
                <div class="info-page">
                    <h1>Tài khoản của bạn</h1>
                    <hr
                        style={{
                        color: 'black',
                        width: '150px',
                        height: '1.5px',
                        margin: '0 auto',
                        opacity: '1'
                        }}
                    />
                    <div class="row content-info">
                        <div class="col-2"> 
                            <NavLink to="./info">
                            <div class="option">
                                Thông tin tài khoản 
                            </div>
                            </NavLink>

                            <NavLink to="./cart">
                            <div class="option">
                                Giỏ hàng
                            </div>
                            </NavLink>

                            <NavLink to="./address">
                            <div class="option">
                                Danh sách địa chỉ
                            </div>
                            </NavLink>
                            <button type="button" class="btn btn-secondary signout" align="center">
                                Đăng xuất
                            </button>  
                        </div>
                        <div class="col-1 vertical-line-container">
                            <div class="vertical-line"></div>
                        </div>
                       
                        <div class="col-6 row private-info">
                            
                            <div class="col-4 info-type">
                                Họ tên: <br height="50px" /> 
                                Ngày sinh: <br />
                                Email: <br />
                                Sđt: <br />
                                Địa chỉ: <br />
                            </div>
                            
                            {this.state.persons.map(person => (
                           
                            <div class="col-8">

                                {person.Fullname}  <br />
                                {person.DOB} <br />
                                {person.Email} <br />
                                {person.Tel} <br />
                                {person.Address} <br />

                            <button type="button" class="btn btn-secondary edit">
                                Chỉnh sửa
                            </button>  

                            </div>
                            ))} 
                        </div>
                        {this.state.persons.map(person => (
                        <div class="col" align="right"> 

                            <div class="avatar-img">
                                <img src= {avatar} />
                            </div>

                            <div class="point-bg">
                                <div class="point" align="center">
                                    {person.CurrentPoint}
                                </div>
                            </div>

                        </div>
                        ))}

                    </div>

                    <div class="row purchase-history">
                        <div class="col-3"></div>
                        <div class="col">
                            <h2>Lịch sử mua hàng</h2>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Đơn Hàng</th>
                                        <th scope="col">Ngày mua</th>
                                        <th scope="col">Tổng tiền</th>
                                        <th scope="col">Trạng thái</th>
                                    </tr>
                                </thead>

                                <tbody  class="table-group-divider">
                                    {this.state.orders.map((order, index) => (
                                    <tr >
                                        <th key={index} scope="row">{index + 1}</th>
                                        <td>{order.OrderID}</td>
                                        <td>{order.Orderdate}</td>
                                        <td>{order.TotalCost}</td>
                                        <td>{order.OrderStatus}</td>
                                    </tr>
                                    ))}
                                </tbody>
                                
                            </table>
                        </div>
                    </div>

                </div>
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);