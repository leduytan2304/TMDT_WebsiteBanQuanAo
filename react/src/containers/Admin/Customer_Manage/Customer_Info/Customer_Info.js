import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

import './Customer_Info.scss';
import avatar from '../../../../assets/Users/Avatar.png'
import { handleEditProfileApi } from '../../../../services/userService';

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });


class Customer_Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            orders: [],
            personsEdit: [],
            show: false,
        }
    }

    componentDidMount() {
        const dataFetchedFlag = JSON.parse(localStorage.getItem('persist:user')).isLoggedIn;

        if (dataFetchedFlag === 'true') {
          this.loadInfo();
          this.loadOrder();
        } else {
          setTimeout(() => {
            this.loadInfo();
            this.loadOrder();
          }, 500);
        }
    }

    loadInfo () {
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        
        axios.get(`http://localhost:8000/api/user/profile/${personsObject}`)
        .then(res => {
        const persons = res.data[0];
        console.log(persons);
        const personsEdit = res.data[0];
        console.log(persons)
        this.setState({ persons, personsEdit });
        const button_payment = document.getElementById('refund');
        
        button_payment.addEventListener('click', event => {
         //this.handleCreateOrder();   
         console.log('ok');
         this.refundMoney();
        });
        
        })
        .catch(error => console.log(error));
        
    }

    loadOrder() {
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        axios.get(`http://localhost:8000/api/user/order/${personsObject}`)
        .then(res => {
        const orders = res.data;
        this.setState({ orders, load: true });
        })
        .catch(error => console.log(error));
    };

    render() {

        return (
            <div className="user-info">
                <div class="row">
                    <div class="col" align="left">
                        <h1>{this.state.persons['Lastname']} {this.state.persons['Firstname']}</h1>
                    </div>

                    <div class="col" align="right">
                        <NavLink to="/admin/customer-manage">
                            <button class="btn btn-return">
                                Trở về
                            </button>
                        </NavLink>
                    </div>
                </div>
                
                    <hr
                        style={{
                        color: 'black',
                        width: '95%',
                        height: '1.5px',
                        margin: '0 auto',
                        opacity: '1'
                        }}
                    />
                
                <div class="row private-info">
                            
                    <div class="col-2 info-type">
                        Ngày sinh: <br />
                        Giới tính: <br />
                        Email: <br />
                        Sđt: <br />
                        Địa chỉ: <br />
                    </div>
                    
                    <div class="col-7">
                        {/* {this.state.persons.map(person => ( */}
                        <>
                            {this.state.persons['Dob']} <br />
                            {this.state.persons['Gender']} <br />
                            {this.state.persons['Email']} <br />
                            {this.state.persons['Tel']} <br />
                            {this.state.persons['Address']} <br />
                        </>
                        {/* ))} */}
                    </div>

                    <div class="col" align="right"> 

                        <div class="avatar-img">
                            <img src= {avatar} />
                        </div>

                        <div class="point">
                            <p>
                            {this.state.persons['CurrentPoint']}
                            </p>
                        </div>

                    </div>
                </div>

                <div class="purchase-history">

                    <h2>Lịch sử mua hàng</h2>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Đơn Hàng</th>
                                <th scope="col">Ngày mua</th>
                                <th scope="col">Tổng tiền</th>
                                <th scope="col">Trạng thái</th>
                            </tr>
                        </thead>
                        
                            <tbody class="table-group-divider overflow-auto">
                                {this.state.orders.map((order, index) => (
                                <tr>
                                    <th key={index} scope="row">{index + 1}</th>
                                    <td>{order.OrderID}</td>
                                    <td>{order.Date}</td>
                                    <td>{VND.format(order.TotalCost)}</td>
                                    <td>{order.OrderStatus}</td>
                                </tr>
                                ))}
                            </tbody>

                    </table>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Customer_Info);