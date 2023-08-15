import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import cod from '../../../assets/Users/cod.png';
import vnpay from '../../../assets/Users/vnpay.png';

import './Payment.scss';

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: 'cod', // Giá trị mặc định được chọn
            quantityNum: ['1','1','1'],
            unit_sum: ['149000','149000','149000'],
            sum: '447000',
            discount: '0',
            price: '447000'
        };
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
        });
        console.log(this.state.selectedOption)
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
                            <h2> Phương thức vận chuyển</h2>
                            <form>
                                <label class="row shipping-method" for="sm1">
                                        <div class="col">
                                            <h3>Chuyển phát tận nhà</h3>
                                            <p>Phí vận chuyển: 35.000₫ </p>
                                        </div>
                                        <div class="col-1" align="right">
                                            <input id="sm1" name="methud" type="radio" value="Nam" /> 
                                        </div>
                                </label>

                                <label class="row shipping-method" for="sm2">
                                        <div class="col">
                                            <h3>Đến lấy hàng</h3>
                                            <p>Địa chỉ: 227 Nguyễn Văn Cừ, Q.5, TP HCM </p>
                                        </div>
                                        <div class="col-1" align="right">
                                            <input id="sm2" name="methud" type="radio" value="Nam" /> 
                                        </div>
                                </label>
                            </form>
                                
                                
                            <br />

                            <h2>Phương thức thanh toán</h2>
                            <form>
                                <label class="payment-method row" for="pm1">
                                    <div class="col-1">
                                        <img src={cod}></img>
                                    </div>
                                    <div class="col">
                                        <h3>Thanh toán tiền mặt</h3>
                                    </div>
                                    <div class="col-1" align="right">
                                        <input id="pm1" type="radio" value="cod" checked={this.state.selectedOption === 'cod'} onChange={this.handleOptionChange}/> 
                                    </div>
                                </label>

                                <label class="payment-method row" for="pm2">
                                    <div class="col-1">
                                        <img src={vnpay}></img>
                                    </div>
                                    <div class="col">
                                        <h3>Thanh toán qua VNPAY</h3>
                                    </div>
                                    <div class="col-1" align="right">
                                        <input id="pm2" name="methud" type="radio" value="vnpay" checked={this.state.selectedOption === 'vnpay'} onChange={this.handleOptionChange}/> 
                                    </div>
                                </label>
                            </form>
                            <div align="right">
                                <NavLink to="/user/cart">
                                    <button type="button" class="btn btn-light btn-return">
                                        TRỞ VỀ
                                    </button>
                                </NavLink>
                                {this.state.selectedOption === 'vnpay' ? (
                                <NavLink to={`/vnpay`}>
                                    <button type="button" class="btn btn-danger btn-payment">
                                        THANH TOÁN
                                    </button>
                                </NavLink>
                                ) : (
                                <NavLink to={`/success`}>
                                    <button type="button" class="btn btn-danger btn-payment">
                                        THANH TOÁN
                                    </button>
                                </NavLink>
                                )}
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);