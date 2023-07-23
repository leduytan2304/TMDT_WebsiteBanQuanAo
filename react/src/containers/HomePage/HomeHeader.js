import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/logo4.png'
import event from '../../assets/background-event.jpg'

class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class="fas fa-bars"></i>
                            <img className='header-logo' src={logo} />
                            {/* <div className='header-logo'></div> */}
                        </div>

                        <div className='center-content'>
                            <div className='child-content'>
                                <div>
                                    <b>SẢN PHẨM MỚI</b>
                                </div>
                            </div>

                            <div className='child-content'>
                                <div>
                                    <b>SIÊU SALE</b>
                                </div>
                            </div>

                            <div className='child-content'>
                                <div>
                                    <b>ÁO</b>
                                </div>
                            </div>

                            <div className='child-content'>
                                <div>
                                    <b>QUẦN</b>
                                </div>
                            </div>

                            <div className='child-content'>
                                <div>
                                    <b>PHỤ KIỆN</b>
                                </div>
                            </div>
                        </div>

                        <div className='right-content'>
                            <div className='search'>
                                <input type='text' placeholder='Tìm kiếm sản phẩm' />
                                <i class="fas fa-search"></i>
                            </div>
                            
                            <div className='login-icon'>
                                <i class="fas fa-user-circle"></i>
                            </div>
                            
                            <div className='cart-icon'>
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-header-banner'>
                    <a href = 'https://highclub.vn/collections/sale'>
                        <img className='home-banner-content' src = {event} />
                    </a>
                </div>
            </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
