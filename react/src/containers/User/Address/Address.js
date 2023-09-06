import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import * as actions from "../../../store/actions";

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import './Address.scss';


class Address extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: null,
            show_e: null,
            delivery_addr: '',
            address: [],
            edit_fill: '',
        };
    }   

    // mở hộp thoại thêm địa chỉ
    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };  

    // mở hộp thoại chỉnh sửa địa chỉ
    handleCloseEdit = () => {
        this.setState({ show_e: false });
    };

    handleShowEdit = (id) => {
        this.setState({ show_e: true });
        this.setState({edit_fill: this.state.address.find(obj => {
                return obj.AddressID == id;
            })
        })

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
        this.setState({ address, delivery_addr: address[0].AddressID });

        })
        .catch(error => console.log(error));
    };

    render() {
        const { processLogout } = this.props;
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

                            {/* {persons.isAdmin == 1 ?(
                            <NavLink to="./admin">
                            <div class="option">
                                Admin
                            </div>
                            </NavLink>
                            ) : (
                                <></>
                            )} */}


                            <button type="button" class="btn btn-secondary signout" onClick={processLogout} align="center">
                                Đăng xuất
                            </button>
                        </div>

                        <div class="col-1 vertical-line-container">
                            <div class="vertical-line"></div>
                        </div>

                        <div  class="col-7"> 
                            <form action="#">
                                {this.state.address.map(addres => (
                                <label key = {addres.AddressID} for={addres.AddressID}>

                                    <div class="title-address row"> 
                                        <div className="col-11">
                                            {addres.ReceiverName} 
                                        </div> 
                                        <div className="col-1" align="right">

                                            <i class="far fa-edit" value={addres.AddressID} onClick={() => this.handleShowEdit(addres.AddressID)}></i>

                                            <Modal show={this.state.show_e} onHide={this.handleCloseEdit} aria-labelledby="contained-modal-title-vcenter" centered size="md">
                                                <Modal.Header  style={{margin: '10px'}}> 
                                                    <Modal.Title>
                                                        Sửa địa chỉ
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
                                                        <Form.Label>Số nhà</Form.Label>
                                                        <Form.Control type="text"/>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Đường</Form.Label>
                                                        <Form.Control type="text"/>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3 addr">
                                                        <Row >
                                                            <Col>
                                                                <Form.Label>Phường</Form.Label>
                                                                <Form.Control type="text"/>
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>Quận</Form.Label>
                                                                <Form.Control type="text"/>
                                                            </Col>
                                                            <Col>
                                                                <Form.Label>Thành phố</Form.Label>
                                                                <Form.Control type="text"/>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                </Form>
                                                </Modal.Body>

                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={this.handleCloseEdit} className="btn-return">
                                                        Trở về
                                                    </Button>
                                                    <Button variant="primary" onClick={this.handleCloseEdit} className="btn-payment">
                                                        OK
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>

                                    </div>

                                    <div class="info-address">
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
                                                <input id={addres.AddressID} type="radio" value={addres.AddressID} checked={this.state.delivery_addr == addres.AddressID} onChange={this.paymentOptionChange}/> 
                                            </div>
                                        </div>
                                    </div>
                                </label>
                               ))}
                               
                            </form>
                        </div>
                        
                        <div class="col-2">
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
                                        <Form.Label>Số nhà</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Đường</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 addr">
                                        <Row >
                                            <Col>
                                                <Form.Label>Phường</Form.Label>
                                                <Form.Control type="text"/>
                                            </Col>
                                            <Col>
                                                <Form.Label>Quận</Form.Label>
                                                <Form.Control type="text"/>
                                            </Col>
                                            <Col>
                                                <Form.Label>Thành phố</Form.Label>
                                                <Form.Control type="text"/>
                                            </Col>
                                        </Row>
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
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        // setSearchQuery: (searchQuery) => dispatch(actions.setSearchQuery(searchQuery))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Address);