import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { push } from "connected-react-router";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as actions from "../../store/actions";
import './Signin.scss';
import { FormattedMessage } from 'react-intl';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleRegisterApi } from '../../services/userService';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repassword: '',
            gender: '',
            dob: '',
            fname: '',
            lname: '',
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

    handleOnChangeDob = (event) => {
        this.setState({
            dob: event.target.value
        })
    }

    handleOnChangeGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleOnChangeUserFname = (event) => {
        this.setState({
            fname: event.target.value
        })
    }

    handleOnChangeUserLname = (event) => {
        this.setState({
            lname: event.target.value
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
        try {
            if (this.state.password !== this.state.repassword) {
                this.setState({
                    errMessage: "Mật khẩu xác nhận không đúng"
                })
                return;
            }
            else {
            let dataApi = await handleRegisterApi(this.state.email, this.state.fname, this.state.lname, this.state.gender, this.state.dob,this.state.phone, this.state.password);
            if (dataApi == 0){
                this.setState({
                    errMessage: "Haha"
                })
                console.log("Err code", dataApi)
            }
            if (dataApi !== 0) {
                toast.success('Đăng ký thành công, xin mời đăng nhập', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 4000,
                })
                console.log("Register success!");
                this.props.history.push('/login');
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
                            onChange={(event) => this.handleOnChangeEmail(event)}
                            />
                        </div>

                        <div className= 'col-12 form-group login-input'>
                            <label>Họ:</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Họ'
                            onChange={(event) => this.handleOnChangeUserLname(event)}
                            />
                        </div>

                        <div className= 'col-12 form-group login-input'>
                            <label>Tên:</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Tên'
                            onChange={(event) => this.handleOnChangeUserFname(event)}
                            />
                        </div>

                        <div className= 'col-12 form-group login-input'>
                            <label>Giới tính:</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Giới tính'
                            onChange={(event) => this.handleOnChangeGender(event)}
                            />
                        </div>

                        <div className= 'col-12 form-group login-input'>
                            <label>Ngày sinh</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Ngày sinh'
                            onChange={(event) => this.handleOnChangeDob(event)}
                            />
                        </div>

                        <div className= 'col-12 form-group login-input'>
                            <label>Số điện thoại:</label>
                            <input type='text' 
                            className='form-control' 
                            placeholder='Số điện thoại'
                            onChange={(event) => this.handleOnChangePhone(event)}
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
                        <div className= 'col-12 form-group login-input'>
                            <label>Xác nhận mật khẩu:</label>
                            <div className='hide-show-password'>
                                <input type= {this.state.isShowPassword ? 'text' : 'password'}
                                className='form-control' 
                                placeholder='Xác nhận mật khẩu'
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
                            <ToastContainer />
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