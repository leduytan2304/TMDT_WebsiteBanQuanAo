import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import * as actions from "../../../store/actions";

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';
import { handleEditAddress, handleAddAddress } from '../../../services/userService';

import './Address.scss';


class Address extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: null,
            show_e: null,
            delivery_addr: '',
            address: [],
            addressEdit: [],
            selectedAddress: null,
            editingIndex: null,

            newAddress: [{
                newaddress: '',
                addressname: '',
                receivename: '',
                receivephone: '',
                isdefault: ''
            }
            ]
        };
    }   

    handleOnChangeAddress = (event) => {
        this.setState({
            newaddress: event.target.value
        })
    }

    handleOnChangePhone = (event) => {
        this.setState({
            receivephone: event.target.value
        })
    }

    handleOnChangeUserName = (event) => {
        this.setState({
            receivename: event.target.value
        })
    }

    handleOnChangeAddrName = (event) => {
        this.setState({
            addressname: event.target.value
        })
    }

    handleOnChangeDefault = (event) => {
        this.setState({
            isdefault: event.target.value
        })
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
        this.setState({show_e: false });
    };

    handleShowEdit = (arrayIndex) => {
        this.setState({ show_e: true,
            editingIndex: arrayIndex });
       
        const selectedAddress = this.state.address[arrayIndex];

        this.setState({ editAddress: selectedAddress.Address,
                        editAddressName: selectedAddress.AddressName,
                        editReceiverName: selectedAddress.ReceiverName,
                        editTel: selectedAddress.ReceiverPhoneNumber,
                        editDefaultAddress: selectedAddress.DefaultAddress,
                        idAddress: selectedAddress.AddressID
        });
        console.log("ARR index", arrayIndex)
    };  

    paymentOptionChange = (event) => {
        this.setState({
            delivery_addr: event.target.value,
        });
    }

    handleEdit = async () => {
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        const {idAddress, editAddress, editAddressName, editDefaultAddress, editReceiverName, editTel } = this.state;
        try {
            let dataApi = await handleEditAddress(personsObject, idAddress, editAddressName, editAddress, editReceiverName ,editTel, editDefaultAddress);
            console.log("Address", editAddress)
            if (dataApi == 0){
                console.log("Err code ", dataApi)
            }
            else if (dataApi !== 0) {
                this.setState({show_e: false});
                console.log("Message: ", dataApi);
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

    handleAdd = async () => {
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
      
        try {
            let dataApi = await handleAddAddress(personsObject, this.state.addressname, this.state.newaddress, this.state.receivename, this.state.receivephone, this.state.isdefault);
            
            if (dataApi == 0){
                console.log("Err code ", dataApi)
            }
            else if (dataApi !== 0) {
                this.setState({show: false});
                console.log("Message: ", dataApi);
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

    componentDidMount(){
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        axios.get(`http://localhost:8000/api/user/address/${personsObject}`)
        .then(res => {
        const address = res.data;
        this.setState({ address, delivery_addr: address[0].AddressID});
        console.log("id",address[0].AddressID)
        })
        .catch(error => console.log(error));
    };

    handleEditAddressChange = (newValue) => {
        const { editingIndex } = this.state;

        const updatedEditingAddress = [...this.state.address];

        updatedEditingAddress[editingIndex].Address = newValue;

        this.setState({ editAddress: updatedEditingAddress[editingIndex].Address});
      };

      handleEditReceiverName = (newValue) => {
        const { editingIndex } = this.state;

        const updatedEditingAddress = [...this.state.address];

        updatedEditingAddress[editingIndex].ReceiverName = newValue;

        this.setState({ editReceiverName: updatedEditingAddress[editingIndex].ReceiverName});
      };

      handleEditTel = (newValue) => {
        const { editingIndex } = this.state;

        const updatedEditingAddress = [...this.state.address];

        updatedEditingAddress[editingIndex].ReceiverPhoneNumber = newValue;

        this.setState({ editTel: updatedEditingAddress[editingIndex].ReceiverPhoneNumber});
      };

      handleEditIsDefault = (newValue) => {
        const { editingIndex } = this.state;

        const updatedEditingAddress = [...this.state.address];

        updatedEditingAddress[editingIndex].DefaultAddress = newValue;

        this.setState({ editDefaultAddress: updatedEditingAddress[editingIndex].DefaultAddress});
      };

      handleEditAddressName = (newValue) => {
        const { editingIndex } = this.state;

        const updatedEditingAddress = [...this.state.address];

        updatedEditingAddress[editingIndex].AddressName = newValue;

        this.setState({ editAddressName: updatedEditingAddress[editingIndex].AddressName});
      };

    render() {
        const { processLogout } = this.props;
        const { editAddress, editAddressName, editDefaultAddress, editReceiverName, editTel } = this.state;
        const isAdmin = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.isAdmin;

        
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

                            {isAdmin == 1 ?(
                            <NavLink to="/admin">
                            <div class="option">
                                Admin
                            </div>
                            </NavLink>
                            ) : (
                                <></>
                            )}


                            <button type="button" class="btn btn-secondary signout" onClick={processLogout} align="center">
                                Đăng xuất
                            </button>
                        </div>

                        <div class="col-1 vertical-line-container">
                            <div class="vertical-line"></div>
                        </div>

                        <div  class="col-7"> 
                            <form action="#">
                                {this.state.address.map((addres, index) => (
                                <label key = {index} for={addres.AddressID}>

                                    <div class="title-address row"> 
                                        <div className="col-11">
                                            {addres.ReceiverName} 
                                        </div> 
                                        <div className="col-1" align="right">

                                            <i class="far fa-edit" onClick={() => this.handleShowEdit(index)} ></i>

                                            <Modal key={index} show={this.state.show_e} onHide={this.handleCloseEdit} aria-labelledby="contained-modal-title-vcenter" centered size="md">

                                                <Modal.Header  style={{margin: '10px'}}> 
                                                    <Modal.Title>
                                                        Sửa địa chỉ
                                                    </Modal.Title>
                                                </Modal.Header>

                                                <Modal.Body>
                                                <Form style={{padding: '10px'}}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Họ tên</Form.Label>
                                                        <Form.Control type="text" value={editReceiverName}
                                                        onChange={(e) => {this.handleEditReceiverName(e.target.value)}}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Số điện thoại</Form.Label>
                                                        <Form.Control type="number" value={editTel}
                                                         onChange={(e) => {this.handleEditTel(e.target.value)}}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Tên địa chỉ</Form.Label>
                                                        <Form.Control type="text" value={editAddressName}
                                                         onChange={(e) => {this.handleEditAddressName(e.target.value)}}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Địa chỉ</Form.Label>
                                                        <Form.Control type="text" value={editAddress} 
                                                         onChange={(e) => {this.handleEditAddressChange(e.target.value)}}/>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Là địa chỉ mặc định ?</Form.Label>
                                                        <Form.Control type="text" value={editDefaultAddress}
                                                         onChange={(e) => {this.handleEditIsDefault(e.target.value)}}
                                                        />
                                                    </Form.Group>

                                                </Form>
                                                </Modal.Body>

                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={this.handleCloseEdit} className="btn-return">
                                                        Trở về
                                                    </Button>
                                                    <Button variant="primary" onClick={this.handleEdit} className="btn-payment">
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
                                        <Form.Control type="text" 
                                        onChange={(event) => this.handleOnChangeUserName(event)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Số điện thoại</Form.Label>
                                        <Form.Control type="number" 
                                        onChange={(event) => this.handleOnChangePhone(event)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Tên địa chỉ(Cơ quan, nhà riêng,...)</Form.Label>
                                        <Form.Control type="text" 
                                        onChange={(event) => this.handleOnChangeAddrName(event)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Địa chỉ</Form.Label>
                                        <Form.Control type="text"
                                        onChange={(event) => this.handleOnChangeAddress(event)}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Là chỉ địa chỉ mặc định ?</Form.Label>
                                        <Form.Control type="text"
                                        onChange={(event) => this.handleOnChangeDefault(event)}/>
                                    </Form.Group>

                                    
                                </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose} className="btn-return">
                                        Trở về
                                    </Button>
                                    <Button variant="primary" onClick={this.handleAdd} className="btn-payment">
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