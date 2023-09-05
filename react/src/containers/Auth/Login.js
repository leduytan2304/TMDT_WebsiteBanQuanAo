import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { push } from "connected-react-router";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from "../../store/actions";
import './Signin.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errMessage: '',
            isShowPassword: false
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async () => {
        try {
            let dataApi = await handleLoginApi(this.state.email, this.state.password);
            if (dataApi == 0){
                this.setState({
                    errMessage: "Haha"
                })
                console.log("Err code", dataApi)
            }
            if (dataApi !== 0) {
                console.log("Login success!");
                const userID = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID
                console.log(userID);
                  localStorage.setItem("accessToken", dataApi.data.accessToken)
                this.props.userLoginSuccess(dataApi.data)
            }
        }
        catch(e){
            if(e.response){
                if(e.response.data){
                    this.setState({
                        errMessage: e.response.data
                    })
                }
            }
            console.log("Lỗi", e.response)
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
                            value={this.state.email}
                            onChange={(event) => this.handleOnChangeEmail(event)}
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
