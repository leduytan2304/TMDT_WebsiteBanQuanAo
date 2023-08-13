import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { push } from "connected-react-router";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from "../../store/actions";
import './Signin.scss';
import { FormattedMessage } from 'react-intl';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    //Xử lý đăng nhập trong này. Video 35 36
    handleLogin = async () => {
        console.log('username: ', this.state.username, 'password: ', this.state.password)
        console.log('all state: ', this.state)

        //mấy dòng dưới test chơi thôi, xem thêm video 35 36 để lấy ra lỗi :V
        if (!this.state.username || !this.state.password) {
            this.setState({
                errMessage: 'Tên đăng nhập hoặc mật khẩu không đúng' 
            })
        }
        else {
            this.props.userLoginSuccess(this.state.username)
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    render() {
        //JSX
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className= 'col-12 login-text'>Đăng nhập</div>
                        <div className= 'col-12 form-group login-input'>
                            <label>Email:</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Nhập email'
                            value={this.state.username}
                            onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className= 'col-12 form-group login-input'>
                            <label>Mật khẩu:</label>
                            <div className='hide-show-password'>
                                <input type= {this.state.isShowPassword ? 'text' : 'password'}
                                className='form-control' 
                                placeholder='Nhập mật khẩu'
                                onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick = {() => {this.handleShowHidePassword()}}>
                                    <i class= {this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='login-btn' onClick={() => {this.handleLogin()}}>Đăng nhập</button>
                        </div>
                        <div className='col-12'>
                            <Link to ='/forgot-password' className='forgot-password'>Quên mật khẩu?</Link>
                            <Link to ='/register' className = 'signin-link'>Đăng ký ngay</Link>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Đăng nhập với:</span>
                        </div>
                        <div className='col-12 login-social'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // navigate: (path) => dispatch(push(path)),
        // // userLoginFail: () => dispatch(actions.adminLoginFail()),
        navigate: (path) => this.props.history.push(path),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);