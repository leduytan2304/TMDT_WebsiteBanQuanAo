import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { push } from "connected-react-router";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from "../../store/actions";
import './Signin.scss';
import { FormattedMessage } from 'react-intl';
import { handleRegisterApi } from '../../services/userService';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repassword: '',
            name: '',
            phone: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangePhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleOnChangeRePassword = (event) => {
        this.setState({
            repassword: event.target.value
        })
    }
    
    
    handleRegister = async () => {
        this.setState({
            errMessage: ''
        })
    
        try {
            if (this.state.password !== this.state.repassword) {
                this.setState({
                    errMessage: "Mật khẩu xác nhận không đúng"
                })
                return;
            }
            else {
            let dataApi = await handleRegisterApi(this.state.email, this.state.name, this.state.phone, this.state.password);
            if (dataApi == 0){
                this.setState({
                    errMessage: "Haha"
                })
                console.log("Err code", dataApi)
            }
            if (dataApi !== 0) {
                console.log("Register success!");
                const { navigate } = this.props;
                const redirectPath = '/login';
                navigate(`${redirectPath}`);
            }
            return;
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
                <div className='register-container'>
                    <div className='login-content row'>
                        <div className= 'col-12 login-text'>Đăng ký</div>
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
                            <label>Họ tên:</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Họ tên'
                            value={this.state.name}
                            onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className= 'col-12 form-group login-input'>
                            <label>Số điện thoại:</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Số điện thoại'
                            value={this.state.phone}
                            onChange={(event) => this.handleOnChangePhone(event)}
                            />
                        </div>
                        <div className= 'col-12 form-group login-input'>
                            <label>Mật khẩu:</label>
                            <div className='hide-show-password'>
                                <input type= {this.state.isShowPassword ? 'text' : 'password'}
                                className='form-control' 
                                placeholder='Nhập mật khẩu'
                                value={this.state.password} 
                                onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span onClick = {() => {this.handleShowHidePassword()}}>
                                    <i class= {this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>
                        </div>
                        <div className= 'col-12 form-group login-input'>
                            <label>Xác nhận mật khẩu:</label>
                            <div className='hide-show-password'>
                                <input type= {this.state.isShowPassword ? 'text' : 'password'}
                                className='form-control' 
                                placeholder='Xác nhận mật khẩu'
                                value={this.state.repassword} 
                                onChange={(event) => this.handleOnChangeRePassword(event)}
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
                            <button className='login-btn' onClick={() => {this.handleRegister()}}>Đăng ký</button>
                        </div>
                        <div className='col-12'>
                            <Link to ='/login' className='return-login'>Quay lại đăng nhập</Link>
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
        userRegisterSuccess: (userInfor) => dispatch(actions.userRegisterSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);