import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {

        return (
            <div className='home-footer'>
                <div className='footer-container'>
                    <div className='footer-content'>
                        <div className='col-4 footer-content-child left-content'>
                            <div className='child-content-title'>
                                <span>G3</span>
                            </div>
                            <div className='store-info'>
                                <h5>227 Nguyễn Văn Cừ, Phường 4, Quận 5, Tp Hồ Chí Minh</h5>
                                <h5>(+84) 123456767</h5>
                                <h5>T2 - T6: 08:00 - 22:00</h5>
                                <h5>T7 - CN: 09:00 - 23:00</h5>
                            </div>
                        </div>

                        <div className='col-4 footer-content-child center-content'>
                            <div className='child-content-title'>
                                <span>Trợ giúp</span>
                            </div>
                            <a className='center-content-link' href=''>
                                <div className='center-content-text'>Chính sách mua sắm</div>
                            </a>
                            <a className='center-content-link' href=''>
                                <div className='center-content-text'>Chính sách trả hàng</div>
                            </a>
                            <a className='center-content-link' href=''>
                                <div className='center-content-text'>Chính sách giao hàng</div>
                            </a>
                            <a className='center-content-link' href=''>
                                <div className='center-content-text'>Chính sách bảo mật</div>
                            </a>
                            <a className='center-content-link' href=''>
                                <div className='center-content-text'>Tuyển dụng</div>
                            </a>
                        </div>

                        <div className='col-4 footer-content-child right-content'>
                            <div className='child-content-title'>
                                <span>Mạng Xã Hội</span>
                            </div>
                            <div className='social'>
                                <a href=''>
                                    <i class="fab fa-facebook icon"></i>
                                </a>

                                <a href=''>
                                    <i class="fab fa-instagram icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className='footer-copyright'>&copy; 2023 Project - G3</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
