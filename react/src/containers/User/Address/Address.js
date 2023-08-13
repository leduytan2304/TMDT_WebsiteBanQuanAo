import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import './Address.scss';


class Address extends Component {
    render() {

        return (
            <div>
            <HomeHeader />
                <div className='address-page'>
                    <h1>Danh sách địa chỉ</h1>
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

                        <div class="col-6"> 
                            <form action="#">
                                <label for="dc1">
                                    <li class="list-group-item list-group-item-dark title-address"> 
                                        Nguyễn Văn A
                                    </li>
                                    <li class="list-group-item list-group-item-light info-address">
                                        <div class="row">
                                            <div class="col-2" id="title">
                                                Địa chỉ: <br />
                                                Sđt:
                                            </div>
                                            <div class="col-9">
                                                227 Nguyễn Văn Cừ, Quận 5, TP HCM <br />
                                                0123456789
                                            </div>
                                            <div class="col-1">
                                                <input id="dc1" name="diachi" type="radio" value="Nam" /> <br />
                                            </div>
                                        </div>
                                    </li>
                                </label>

                                <label for="dc2">
                                    <li class="list-group-item list-group-item-dark title-address"> 
                                        Nguyễn Văn A
                                    </li>
                                    <li class="list-group-item list-group-item-light info-address">
                                        <div class="row">
                                            <div class="col-2" id="title">
                                                Địa chỉ: <br />
                                                Sđt:
                                            </div>
                                            <div class="col-9">
                                                227 Nguyễn Văn Cừ, Quận 5, TP HCM <br />
                                                0123456789
                                            </div>
                                            <div class="col-1 ">
                                                <input id="dc2" name="diachi" type="radio" value="Nam" /> <br />
                                            </div>
                                        </div>
                                    </li>
                                </label>

                                <label for="dc3">
                                    <li class="list-group-item list-group-item-dark title-address"> 
                                        Nguyễn Văn A
                                    </li>
                                    <li class="list-group-item list-group-item-light info-address">
                                        <div class="row">
                                            <div class="col-2" id="title">
                                                Địa chỉ: <br />
                                                Sđt:
                                            </div>
                                            <div class="col-9">
                                                227 Nguyễn Văn Cừ, Quận 5, TP HCM <br />
                                                0123456789
                                            </div>
                                            <div class="col-1">
                                                <input id="dc3" name="diachi" type="radio" value="Nam" /> <br />
                                            </div>
                                        </div>
                                    </li>
                                </label>
                            </form>
                        </div>
                        <div class="col-3">
                            <button type="button" class="btn btn-danger add-new">THÊM ĐỊA CHỈ MỚI</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Address);