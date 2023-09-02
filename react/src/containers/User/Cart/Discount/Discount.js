import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Modal,Form } from 'react-bootstrap';

import axios from 'axios';
import './Discount.scss';

import discount from '../../../../assets/Users/discount.png'

// hàm chuyển thành giá trị tiền tệ
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

class Discount extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            showDetail: null,
            inputValue: '',
            cash: ''
            
        };
    }

    // thay đổi tiền đổi từ điểm
    handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue > 123){
            return;
        }
        this.setState({ inputValue });
        this.setState({cash: inputValue * 1000});
      };

    // hiện thông tin đổi voucher
    toggleDetail = () => {
        if (this.state.showDetail === null){
            this.setState({showDetail: true});
            return;
        }
        this.setState({showDetail: !this.state.showDetail});
    }


    render() {
        // thêm thư viện để hiện animation cho thông tin voucher
        let boxClassName;
        switch (this.state.showDetail) {
        case true:
            boxClassName = 'fade-in';
            break;
        case false:
            boxClassName = 'fade-out';
            break;
        default:
            boxClassName = 'hide';
        }

        return (
            <div class="voucher-window">
                <div class="row">
                    <div class="col-9">
                        <input type="text" class="form-control" placeholder="Mã giảm giá" />
                    </div>
                    <div class="col">
                        <button type="submit" class="btn voucher-btn">ÁP DỤNG</button>
                    </div>
                </div>

                <h3> Mã của bạn </h3>
                <hr
                    style={{
                    color: '#00000020',
                    width: '450px',
                    height: '1.5px',
                    margin: '0 auto',
                    opacity: '1',
                    marginBottom: '10px'
                    }}
                />
                
                <div class="voucher-list">
                    <div class="row voucher">
                        <div class="col-2">
                            <img src={discount}></img>
                        </div>
                        <div class="col">
                            <h4>Khách hàng đồng</h4>
                            <p>
                                - Giảm 5% trên tổng hóa đơn <br />
                                - Áp dụng với hóa đơn từ 199k
                            </p>
                        </div>
                    </div>

                    <div class="row voucher">
                        <div class="col-2">
                            <img src={discount}></img>
                        </div>
                        <div class="col">
                            <h4>Khách hàng đồng</h4>
                            <p>
                                - Giảm 5% trên tổng hóa đơn <br />
                                - Áp dụng với hóa đơn từ 199k
                            </p>
                        </div>
                    </div>

                    <div class="row voucher">
                        <div class="col-2">
                            <img src={discount}></img>
                        </div>
                        <div class="col">
                            <h4>Khách hàng đồng</h4>
                            <p>
                                - Giảm 5% trên tổng hóa đơn <br />
                                - Áp dụng với hóa đơn từ 199k
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="row point">
                    <h3>
                        Đổi điểm
                    </h3>
                    <div class="colored">
                        <p>123</p>
                    </div>

                    <i onClick={this.toggleDetail} class="far fa-question-circle"></i>
                    
                    <div className={`detail-box ${boxClassName}`}>
                        <p>đây là mô tả</p>
                    </div>
                    
                </div>

                
                <hr
                    style={{
                    color: '#00000020',
                    width: '450px',
                    height: '1.5px',
                    margin: '0 auto',
                    opacity: '1',
                    marginBottom: '15px'
                    }}
                />

                <div class="row">
                    <div class="col-9">
                        <input 
                            type="number" 
                            class="form-control" 
                            value={this.state.inputValue} 
                            onChange={this.handleInputChange}
                            placeholder="Điểm" 
                        />
                        <div class="cash"> 
                            <p> = </p>
                            <p id="cash-number">{VND.format(this.state.cash)}</p>

                        </div>
                    </div>
                    <div class="col">
                        <button type="submit" class="btn voucher-btn">ĐỔI</button>
                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Discount);