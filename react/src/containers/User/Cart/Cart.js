import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import './Cart.scss';
import sp from '../../../assets/Ao/ao-2.png';


// hàm chuyển thành giá trị tiền tệ
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

class Cart extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            quantityNum: ['1','1','1'],
            unit_price:['149000','149000','149000'],
            unit_sum: [],
            sum: '0',
            discount: '0',
            price: '0'
        };
    }
    // hàm set giá trị cho price và unit_sum
    componentDidMount() { 
        let sum = 0;
        const unitSum = this.state.quantityNum.map((quantity, index) => {
            const temp = parseFloat(this.state.unit_price[index]) * parseInt(quantity);
            sum += temp;
            return temp;   
        });
        this.setState({ unit_sum: unitSum });
        this.setState({sum: sum})

        // thay đổi giá trị thành tiền
        const discount = this.state.discount;
        this.setState({price: sum-discount});
        
    }

    //hàm cập nhật khi có thay đổi
    componentDidUpdate(prevProps, prevState) {
        if (prevState.quantityNum !== this.state.quantityNum) {
            //thay đổi tổng tiền mỗi mặt hàng và tổng tiền đơn hàng
            let sum = 0;
            const unitSum = this.state.quantityNum.map((quantity, index) => {
                const temp = parseFloat(this.state.unit_price[index]) * parseInt(quantity);
                sum += temp;
                return temp;   
            });
            this.setState({ unit_sum: unitSum });
            this.setState({ sum: sum})
            // thay đổi giá trị thành tiền
            const discount = this.state.discount;
            this.setState({price: sum-discount});
            
        }
    }

    //hàm thay đổi số lượng sản phẩm
    handleQuantityChange = (change, index) => {
        this.setState(prevState => {
            const newQuantityNum = [...prevState.quantityNum];
            let currentValue = newQuantityNum[index];
    
            if (change === '-' && currentValue > 0) {
                currentValue --;
            } else if (change === '+' && currentValue < 100) {
                currentValue ++;
            }
    
            newQuantityNum[index] = currentValue;
            return { quantityNum: newQuantityNum };
        });
    }

    render() {

        return (
            <div>
            <HomeHeader />
                <div className='cart-page'>
                    <h1>Giỏ hàng</h1>
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

                        <div class="col-5 product-list">
                            <div class="row alert alert-secondary">
                                <div class="col-3 image-sp">
                                    <img src= {sp} />
                                </div>
                                
                                <div class="col-7" align="left">
                                    <b>Áo thun Highclub Signature - 5 Colors</b>
                                    <p>Nâu / M</p>
                                    <div className='quantity-area'>
                                        {this.state.quantityNum.map((quantity, index) => (
                                            <div key={index}>
                                                {index === 0 && (
                                                    <>
                                                    <input type='button' className='quantity-btn' value='-' onClick={() => this.handleQuantityChange('-',index)} />
                                                        <input
                                                            type="number"
                                                            class="quantity-number"
                                                            name={`quantity-${index}`}
                                                            value={quantity}
                                                            onChange={e => this.handleQuantityChange(e, index)}
                                                        />
                                                    <input type='button' className='quantity-btn' value='+' onClick={() => this.handleQuantityChange('+',index)} />
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div class="col close-but" align="right"> 
                                    <button type="button" class="btn-close" aria-label="Close"></button>
                                    <p>
                                        {VND.format(this.state.unit_price[0])}  
                                    </p>
                            
                                </div>
                            </div>

                            <div class="row alert alert-secondary">
                                <div class="col-3 image-sp">
                                    <img src= {sp} />
                                </div>
                                
                                <div class="col-7" align="left">
                                    <b>Áo thun Highclub Signature - 5 Colors</b>
                                    <p>Nâu / M</p>
                                    <div className='quantity-area'>
                                        {this.state.quantityNum.map((quantity, index) => (
                                            <div key={index}>
                                                {index === 1 && (
                                                    <>
                                                    <input type='button' className='quantity-btn' value='-' onClick={() => this.handleQuantityChange('-',index)} />
                                                        <input
                                                            type="number"
                                                            class="quantity-number"
                                                            name={`quantity-${index}`}
                                                            value={quantity}
                                                            onChange={e => this.handleQuantityChange(e, index)}
                                                        />
                                                    <input type='button' className='quantity-btn' value='+' onClick={() => this.handleQuantityChange('+',index)} />
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div class="col close-but" align="right"> 
                                    <button type="button" class="btn-close" aria-label="Close"></button>
                                    <p>
                                        {VND.format(this.state.unit_price[1])}
                                    </p>
                            
                                </div>
                            </div>

                            <div class="row alert alert-secondary">
                                <div class="col-3 image-sp">
                                    <img src= {sp} />
                                </div>
                                
                                <div class="col-7" align="left">
                                    <b>Áo thun Highclub Signature - 5 Colors</b>
                                    <p>Nâu / M</p>
                                    <div className='quantity-area'>
                                        {this.state.quantityNum.map((quantity, index) => (
                                            <div key={index}>
                                                {index === 2 && (
                                                    <>
                                                    <input type='button' className='quantity-btn' value='-' onClick={() => this.handleQuantityChange('-',index)} />
                                                        <input
                                                            type="number"
                                                            class="quantity-number"
                                                            name={`quantity-${index}`}
                                                            value={quantity}
                                                            onChange={e => this.handleQuantityChange(e, index)}
                                                        />
                                                    <input type='button' className='quantity-btn' value='+' onClick={() => this.handleQuantityChange('+',index)} />
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div class="col close-but" align="right"> 
                                    <button type="button" class="btn-close" aria-label="Close"></button>
                                    <p>
                                        {VND.format(this.state.unit_price[2])}  
                                    </p>
                            
                                </div>
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
                                    <div class="col-7">
                                        Thành tiền:
                                    </div>
                                    <div class="col" align="right">
                                        <b>{VND.format(this.state.sum)}</b>
                                    </div>
                                </div>

                                <div class="row discout">
                                    <div class="col-7" id="dc1">
                                        Giảm giá:
                                    </div>
                                    <div class="col" align="right" id="dc1">
                                        <b>- {VND.format(this.state.discount)}</b>
                                    </div>
                                </div>

                                <div class="row final-price">
                                    <div class="col-7">
                                        Tổng tiền:
                                    </div>
                                    <div class="col" align="right" id="price">
                                        <b>{VND.format(this.state.price)}</b>
                                    </div>
                                </div>
                                <div  align="center">
                                    <NavLink to="./payment">
                                    <button type="button" class="btn btn-danger btn-pay">
                                        THANH TOÁN
                                    </button>
                                    </NavLink>
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