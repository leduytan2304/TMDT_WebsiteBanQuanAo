import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Button, Modal,Form } from 'react-bootstrap';
import axios from 'axios';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import './Address.scss';


class Address extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            delivery_addr: 'addr1',
            address: []
        };
    }   

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };  

    paymentOptionChange = (event) => {
        this.setState({
            delivery_addr: event.target.value,
        });
    }

    componentDidMount(){
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        axios.get(`http://localhost:8000/api/user/address/${personsObject}`)
        .then(res => {
        const address = res.data;
        this.setState({ address });
        })
        .catch(error => console.log(error));
    };

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

                        <div  class="col-6"> 
                            <form action="#">
                                {this.state.address.map(addres => (
                                <label key = {addres.AddressID} for="dc1">

                                <li class="list-group-item list-group-item-dark title-address"> 
                                    {addres.ReceiverName} 
                                </li>

                                <li class="list-group-item list-group-item-light info-address">
                                    <div class="row">
                                        <div class="col-2" id="title">
                                            Địa chỉ:<br />
                                            Sđt:
                                        </div>
                                        <div class="col-9">
                                        {addres.Address}  <br />
                                        {addres.ReceiverPhoneNumber}
                                        </div>
                                        <div class="col-1">
                                        <input id="dc1" type="radio" value="addr1" checked={this.state.delivery_addr === 'addr1'} onChange={this.paymentOptionChange}/> 
                                        </div>
                                    </div>
                                </li>
                                </label>
                               ))}
                               
                            </form>
                        </div>
                        
                        <div class="col-3">
                            <Button className="btn btn-danger add-new" variant="primary" onClick={this.handleShow}>
                                    THÊM ĐỊA CHỈ MỚI
                                </Button>
                                <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="md">
                                    <Modal.Header  style={{margin: '10px'}}> 
                                        <Modal.Title>
                                            Thêm địa chỉ mới
                                        </Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                    <Form style={{padding: '10px'}}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Họ và tên</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Số điện thoại</Form.Label>
                                            <Form.Control type="number" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Địa chỉ</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={this.handleClose} className="btn-return">
                                            Trở về
                                        </Button>
                                        <Button variant="primary" onClick={this.handleClose} className="btn-payment">
                                            OK
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

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