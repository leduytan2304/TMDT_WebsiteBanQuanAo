import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal,Form } from 'react-bootstrap';
import axios from 'axios';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import cod from '../../../assets/Users/cod.png';
import vnpay from '../../../assets/Users/vnpay.png';

import Discount from '../Cart/Discount/Discount'

import './Payment.scss';
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
            productName:[],
            quantityNum: [],
            unit_sum: [],
            unit_price:[],
            images:[],
            Size:[],
            sum: '0',
            discount: '0',
            price: '0',
            totalMoney: [],
            show: null,
        };
    }
    
    handleClose = () => {
        this.setState({ show: false });
        console.log(this.state.show);
    };

    handleShow = () => {
        this.setState({ show: true });
        console.log(this.state.show);
    };  
    
    paymentOptionChange = (event) => {
        this.setState({
            payment_method: event.target.value,
        });
    }
    componentDidMount() { 
        let sum = 0;

        axios.get(`http://localhost:8000/api/cart/U0025`)
        .then(res => {
            const images = res.data;
            this.setState({ images });
            const productID =images[0].map((image) => {
                const temp =(image);
                 //console.log(image.ProductID);
                    return temp;  
            });
            const quantity_number =images[0].map((image) => {
                const temp =parseInt(image.ProductQuantity);
                    // console.log(sum);
                    return temp;  
            });

            const product_name =images[0].map((image) => {
                const temp =(image.ProductName);
                    // console.log(sum);
                    return temp;  
            });

            const unitSum = images[0].map((image) => {
                const temp = parseFloat(image.ProductPrice) * parseInt(image.ProductQuantity);
                    
                    sum += temp;
                    // console.log(sum);
                    return temp;  
            });

            const unitPrice = images[0].map((image) => {
                const temp = parseFloat(image.ProductPrice);
                    
                    sum += temp;
                    // console.log(sum);
                    return temp;  
            });

            const size =images[0].map((image) => {
                const temp =(image.ProductSizeID);
                    // console.log(sum);
                    return temp;  
            });
            const colorName =images[0].map((image) => {
                const temp =(image.ColorName);
                    // console.log(sum);
                    return temp;  
            });

            this.setState({ unit_sum: unitSum })
            this.setState({quantityNum: quantity_number})
            this.setState({productName: product_name})
            this.setState({unit_price: unitPrice})
            this.setState({Size: size})
            this.setState({ColorName: colorName})
            this.setState({ProductID: productID})

            // hàm khởi tạo cho sum ( thành tiền )
            let sumtemp = 0;
            this.state.quantityNum.map((quantity, index) => {
                let temp = parseFloat(this.state.unit_price[index]) * parseInt(quantity);
                sumtemp += temp;
                return temp;   
            });
            this.setState({ sum: sumtemp})

            // khởi tạo cho price ( tổng tiền )
            const discount = this.state.discount;
            this.setState({price: this.state.sum-discount});
        })
        .catch(error => console.log(error));
  };

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
                                        <input id="pm1" type="radio" value="cod" checked={this.state.payment_method === 'cod'} onChange={this.paymentOptionChange}/> 
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
                                        <input id="pm2" name="methud" type="radio" value="vnpay" checked={this.state.payment_method === 'vnpay'} onChange={this.paymentOptionChange}/> 
                                    </div>
                                </label>
                            </form>
                            <div class="button" align="right">
                                <NavLink to="/user/cart">
                                    <button type="button" class="btn btn-light btn-return">
                                        TRỞ VỀ
                                    </button>
                                </NavLink>
 
                                <a href="http://localhost:8888/order/create_payment_url">
                                <button type="button" class="btn btn-danger btn-payment" >
                                        THANH TOÁN
                                    </button>
                                </a>

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
                                 {this.state.productName.map((name,index) => (  

                                <div key={index} class="row product-bill">                                 
                                    <div class="col-9" align="left">
                                        <b>{name}</b>
                                        <p>x{this.state.quantityNum[index]}</p>
                                    </div>
                                    <div class="col" align="right"> 
                                        <p>{this.state.unit_price[index]} </p>
                                        <p> {VND.format(this.state.unit_sum[index])}  </p>
                                    </div>
                                </div>
                                
                                ))}

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

                                <div align="center">
                                    
                                    <div className="discount row" onClick={this.handleShow}>
                                        <div class="col-7" id="dc1" align="left">
                                            Giảm giá:
                                        </div>
                                        <div class="col" align="right" id="dc1">
                                            <b>- {VND.format(this.state.discount)}</b>
                                        </div>
                                        
                                        <div class="row discount-use">
                                            <div class="col-7" align="left">
                                                - Khách hàng Đồng
                                            </div>
                                            <div class="col" align="right">
                                                - {VND.format(12345)}
                                            </div>
                                        </div>
                                    </div>

                                    <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="md">
                                        <Modal.Header  style={{margin: '10px'}}> 
                                            <Modal.Title>
                                                <b>Chọn voucher</b>
                                            </Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>

                                            <Discount />

                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose} className="btn-return">
                                                Trở về
                                            </Button>
                                            <Button variant="primary" onClick={this.handleClose} className="btn-payment">
                                                OK
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    
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