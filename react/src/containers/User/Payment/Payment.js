import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';
import PaymentMethod from './Payment_method/Payment_method';

import cod from '../../../assets/Users/cod.png';
import vnpay from '../../../assets/Users/vnpay.png';

import './Payment.scss';
import axios from 'axios';
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment_method: 'cod', // Giá trị mặc định được chọn
            page: 'payment_method', // biến kiểm tra hiển thị trang
            quantityNum: ['1','1','1'],
            unit_sum: ['149000','149000','149000'],
            sum: '447000',
            discount: '0',
            price: '482000'
        };
    }
    state = {
        totalMoney: []
    }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/typicode/demo/posts/4',{
            method: "POST",
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1
            }),headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
      .then(response => response.json())
      .then(json => console.log(json))
    };
    

    paymentOptionChange = (event) => {
        this.setState({
            payment_method: event.target.value,
        });
    }

    render() {

        return (
            <div>
            <HomeHeader />
                <div className='cart-page'>
                    <h1>Thanh toán</h1>
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
                        <div class="col-9">
                            {this.state.page === 'payment_method' &&(
                                <PaymentMethod />
                            )}
                        </div>

                        <div class="col">
                        <div class="bill">
                                <h2>Thông tin đơn hàng</h2>
                                <hr
                                    style={{
                                    color: 'black',
                                    width: '85%',
                                    height: '1.5px',
                                    margin: '0 auto'
                                    }}
                                />
                                <div class="row product-bill">                                 
                                    <div class="col-9" align="left">
                                        <b>Áo thun Highclub Signature</b>
                                        <p>Nâu / M</p>
                                    </div>
                                    <div class="col" align="right"> 
                                        <p> x{this.state.quantityNum[0]} </p>
                                        <p> {VND.format(this.state.unit_sum[0])}  </p>
                                    </div>
                                </div>

                                 <div class="row product-bill">                                 
                                    <div class="col-9" align="left">
                                        <b>Áo thun Highclub Signature</b>
                                        <p>Nâu / M</p>
                                    </div>
                                    <div class="col" align="right"> 
                                        <p> x{this.state.quantityNum[1]} </p>
                                        <p> {VND.format(this.state.unit_sum[1])}  </p>
                                    </div>
                                </div>

                                <div class="row product-bill">                                 
                                    <div class="col-9" align="left">
                                        <b>Áo thun Highclub Signature</b>
                                        <p>Nâu / M</p>
                                    </div>
                                    <div class="col" align="right"> 
                                        <p> x{this.state.quantityNum[2]} </p>
                                        <p> {VND.format(this.state.unit_sum[2])}  </p>
                                    </div>
                                </div>

                                <br />
                                
                                <hr
                                    style={{
                                    color: 'black',
                                    width: '85%',
                                    height: '1.5px',
                                    margin: '0 auto',
                                    }}
                                />

                                <div class="row sum">
                                    <div class="col-8">
                                        Thành tiền:
                                    </div>
                                    <div class="col" align="right">
                                        <b>{VND.format(this.state.sum)}</b>
                                    </div>
                                </div>

                                <div class="row sum">
                                    <div class="col-8">
                                        Phí vận chuyển:
                                    </div>
                                    <div class="col" align="right">
                                        <b>{VND.format(35000)}</b>
                                    </div>
                                </div>

                                {this.state.shipping_method === 'ship' ? (
                                <div class="row sum">
                                    <div class="col-8">
                                        Phí vận chuyển:
                                    </div>
                                    <div class="col" align="right">
                                        <b>{VND.format(35000)}</b>
                                    </div>
                                </div>
                                ) : (
                                    <div>
                                    </div>
                                )}

                                <div class="row discout">
                                    <div class="col-8" id="dc1">
                                        Giảm giá:
                                    </div>
                                    <div class="col" align="right" id="dc1">
                                        <b>- {VND.format(this.state.discount)}</b>
                                    </div>
                                </div>

                                <div class="row final-price">
                                    <div class="col-8">
                                        Tổng tiền:
                                    </div>
                                    <div class="col" align="right" id="price">
                                        <b>{VND.format(this.state.price)}</b>
                                    </div>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Payment);