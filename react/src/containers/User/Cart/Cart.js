import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import './Cart.scss';
import sp from '../../../assets/Ao/ao-2.png';

class Cart extends Component {
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
                                </div>

                                <div class="col close-but" align="right"> 
                                    <button type="button" class="btn-close" aria-label="Close"></button>
                                    <p>
                                        149.000₫   
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
                                </div>

                                <div class="col close-but" align="right"> 
                                    <button type="button" class="btn-close" aria-label="Close"></button>
                                    <p>
                                        149.000₫   
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
                                </div>

                                <div class="col close-but" align="right"> 
                                    <button type="button" class="btn-close" aria-label="Close"></button>
                                    
                                    <p>
                                        149.000₫   
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
                                            <p> x1 </p>
                                            <p> 149.000₫  </p>
                                        </div>
                                    </div>

                                    <div class="row product-bill">                                 
                                        <div class="col-9" align="left">
                                            <b>Áo thun Highclub Signature</b>
                                            <p>Nâu / M</p>
                                        </div>
                                        <div class="col" align="right"> 
                                            <p> x1 </p>
                                            <p> 149.000₫  </p>
                                        </div>
                                    </div>

                                    <div class="row product-bill">                                 
                                        <div class="col-9" align="left">
                                            <b>Áo thun Highclub Signature</b>
                                            <p>Nâu / M</p>
                                        </div>
                                        <div class="col" align="right"> 
                                            <p> x1 </p>
                                            <p> 149.000₫  </p>
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
                                            <b>347.000₫</b>
                                        </div>
                                    </div>

                                    <div class="row discout">
                                        <div class="col-8" id="dc1">
                                            Giảm giá:
                                        </div>
                                        <div class="col" align="right" id="dc1">
                                            <b>- 0₫</b>
                                        </div>
                                    </div>

                                    <div class="row final-price">
                                        <div class="col-8">
                                            Tổng tiền:
                                        </div>
                                        <div class="col" align="right" id="price">
                                            <b>347.000₫</b>
                                        </div>
                                    </div>
                                    <div  align="center">
                                        <button type="button" class="btn btn-danger btn-pay">
                                            THANH TOÁN
                                        </button>
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