import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal,Form } from 'react-bootstrap';


import DeliveryAddr from '../Success/Success'

import cod from '../../../../assets/Users/cod.png';
import vnpay from '../../../../assets/Users/vnpay.png';
import shipping from '../../../../assets/Users/shipping.png';

import './Payment_method.scss';
import axios from 'axios';
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

class PaymentMethod extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment_method: 'cod', // Giá trị pttt mặc định được chọn
            delivery_addr: 'addr1', // Giá trị dcgh mặc định được chọn
            page: 'payment_method', // biến kiểm tra hiển thị trang
            show1: false,
            show2: false,
        };
    }
    state = {
        totalMoney: []
    }
// show bảng thay đổi địa chỉ
    handleClose1 = () => {
        this.setState({ show1: false });
    };
    
      handleShow1 = () => {
        this.setState({ show1: true });
    };    
//---------------------------

// show bảng thêm địa chỉ mới
    handleClose2 = () => {
        this.setState({ show2: false });
    };

    handleShow2 = () => {
        this.setState({ show2: true });
    };  
// --------------------------


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
    
    // thay đổi pttt
    paymentOptionChange = (event) => {
        this.setState({
            payment_method: event.target.value,
        });
    }

    //thay đổi dcgh
    addrOptionChange = (temp) => {
        this.setState({
            delivery_addr: temp,
        });
    }    

    // đổi page
    changePage = () =>{
        this.setState({page: 'delivery_addr'});
    }

    render() {

        return (
            <div>
            {this.state.page === 'payment_method' ? (
                <>
                    <h2>Địa chỉ giao hàng</h2>
                    <div class="addr row">
                        <div class="col-1 ship" align="center">
                            <img src={shipping} />
                        </div>

                        <div class="col">
                            <b> Nguyễn Văn A </b> <br />
                            <u>Địa chỉ</u>: 227 Nguyễn Văn Cừ, Q.5, TP HCM <br />
                            <u>SĐT</u>: 0123456789 <br />
                        </div>

                        <div class="col-2 change-addr" align="right">
                            <Button id="btn" variant="primary" onClick={this.handleShow1}>
                                Thay đổi
                            </Button>
                            <Modal show={this.state.show1} onHide={this.handleClose1} aria-labelledby="contained-modal-title-vcenter" centered size="md">
                                <Modal.Header style={{margin: '10px'}}>
                                    <Modal.Title >
                                        Địa chỉ của tôi
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form>
                                        <label class="" 
                                               className={`addr-option ${this.state.delivery_addr === 'addr1' ? 'checked' : ''}`}
                                               for="dc2" 
                                               onClick={() => this.addrOptionChange('addr1')}>

                                            <div class="row">
                                                <div class="col">
                                                    <b> Nguyễn Văn A </b> <br />
                                                    <u>Địa chỉ</u>: 227 Nguyễn Văn Cừ, Q.5, TP HCM <br />
                                                    <u>SĐT</u>: 0123456789 <br />
                                                </div>
                                            </div>
                                        </label>

                                        <label class="" 
                                               className={`addr-option ${this.state.delivery_addr === 'addr2' ? 'checked' : ''}`}
                                               onClick={() => this.addrOptionChange('addr2')}>

                                            <div class="row">
                                                <div class="col">
                                                    <b> Nguyễn Văn A </b> <br />
                                                    <u>Địa chỉ</u>: 227 Nguyễn Văn Cừ, Q.5, TP HCM <br />
                                                    <u>SĐT</u>: 0123456789 <br />
                                                </div>
                                            </div>
                                        </label>

                                        <label class="" 
                                               className={`addr-option ${this.state.delivery_addr === 'addr3' ? 'checked' : ''}`}
                                               onClick={() => this.addrOptionChange('addr3')}>
                                            <div class="row">
                                                <div class="col">
                                                    <b> Nguyễn Văn A </b> <br />
                                                    <u>Địa chỉ</u>: 227 Nguyễn Văn Cừ, Q.5, TP HCM <br />
                                                    <u>SĐT</u>: 0123456789 <br />
                                                </div>
                                            </div>
                                        </label>
                                    </form>
                                    <Button id="btn" variant="primary" onClick={this.handleShow2}>
                                        Thêm địa chỉ mới
                                    </Button>
                                    <Modal show={this.state.show2} onHide={this.handleClose2} aria-labelledby="contained-modal-title-vcenter" centered size="md">
                                        <Modal.Header style={{margin: '10px'}}>
                                            <Modal.Title >
                                                Thêm địa chỉ mới
                                            </Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>
                                        <Form style={{padding: '10px'}}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Họ và tên</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Số điện thoại</Form.Label>
                                                <Form.Control type="number" />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Địa chỉ</Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>

                                        </Form>
                                        </Modal.Body>

                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose2} className="btn-return">
                                                Trở về
                                            </Button>
                                            <Button variant="primary" onClick={this.handleClose2} className="btn-payment">
                                                OK
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose1} className="btn-return">
                                        Đóng
                                    </Button>
                                    <Button variant="primary" onClick={this.handleClose1} className="btn-payment">
                                        OK
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        
                        
                    </div>
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

                           
                            <button type="button" onClick={this.changePage} class="btn btn-danger btn-payment">
                            THANH TOÁN
                            </button>
                            
                        </div>
                    </>
                ) : (
                    <DeliveryAddr />
                )}
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);