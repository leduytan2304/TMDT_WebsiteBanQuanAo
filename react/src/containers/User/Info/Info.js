import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';
import './Info.scss';
import avatar from '../../../assets/Users/Avatar.png'
import { handleEditProfileApi } from '../../../services/userService';

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });


class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            orders: [],
            personsEdit: [],
            show: false,
        }
    }

    handleOnChangeFirstName = (event) => {
        const updatedPerson = { ...this.state.personsEdit }; // Create a copy of the person object
      
        // Update the Firstname of the person
        updatedPerson.Firstname = event.target.value;
      
        // Update the state with the modified person object
        this.setState({ personsEdit: updatedPerson });
    };

    handleOnChangeLastName = (event) => {
        const updatedPerson = { ...this.state.personsEdit }; 

        updatedPerson.Lastname = event.target.value;
      
        this.setState({ personsEdit: updatedPerson });
    };

    handleOnChangeDob = (event) => {
        const updatedPerson = { ...this.state.personsEdit }; 

        updatedPerson.Dob = event.target.value;
      
        this.setState({ personsEdit: updatedPerson });
    };

    handleOnChangeTel = (event) => {
        const updatedPerson = { ...this.state.personsEdit }; 

        updatedPerson.Tel = event.target.value;
      
        this.setState({ personsEdit: updatedPerson });
    };

    handleOnChangeEmail = (event) => {
        const updatedPerson = { ...this.state.personsEdit }; 

        updatedPerson.Email = event.target.value;
      
        this.setState({ personsEdit: updatedPerson });
    };

    handleOnChangeGender = (event) => {
        const updatedPerson = { ...this.state.personsEdit }; 

        updatedPerson.Gender = event.target.value;
      
        this.setState({ personsEdit: updatedPerson });
    };

    handleClose = () => {
        this.setState({ 
            show: false,
            personsEdit: this.state.persons
        });
    };

    handleShow = () => {
        this.setState({ show: true });
    };  

    paymentOptionChange = (event) => {
        this.setState({
            delivery_addr: event.target.value,
        });
    }

    handleEdit = async () => {
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        try {
            let dataApi = await handleEditProfileApi(personsObject, this.state.personsEdit['Firstname'], 
            this.state.personsEdit['Lastname'], this.state.personsEdit['Tel'], this.state.personsEdit['Dob'] ,this.state.personsEdit['Gender'] , this.state.personsEdit['Email']);
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
    refundMoney = (CartID) =>{
        const UserID = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        console.log('UserID: ',UserID);
        fetch(`http://localhost:8000/api/cart_payment/refund/${UserID}`  , { // thay đổi user sau
                method: 'POST',
                body: JSON.stringify({
                  userID: UserID,
                  cartID: CartID
                 
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));

    }

    
    componentDidMount() {
        const dataFetchedFlag = JSON.parse(localStorage.getItem('persist:user')).isLoggedIn;

        if (dataFetchedFlag === 'true') {
          this.loadInfo();
          this.loadOrder();
        } else {
          setTimeout(() => {
            this.loadInfo();
            this.loadOrder();
          }, 500);
        }
    }

    loadInfo () {
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        
        axios.get(`http://localhost:8000/api/user/profile/${personsObject}`)
        .then(res => {
        const persons = res.data[0];
        console.log(persons);
        const personsEdit = res.data[0];
        console.log(persons)
        this.setState({ persons, personsEdit });
        const button_payment = document.getElementById('refund');
        
        button_payment.addEventListener('click', event => {
         //this.handleCreateOrder();   
         console.log('ok');
         this.refundMoney();
        });
        
        })
        .catch(error => console.log(error));
        
    }

    loadOrder() {
        const personsObject = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        axios.get(`http://localhost:8000/api/user/order/${personsObject}`)
        .then(res => {
        const orders = res.data;
        this.setState({ orders, load: true });
        })
        .catch(error => console.log(error));
    };

    render() {
        const { persons } = this.state;
        const { processLogout } = this.props;
        console.log(persons);
        if (persons.length === 0) {
            return <div className="loading">Loading...</div>;
        }
        return (
            <div>
                <HomeHeader />
                <div class="info-page">
                    <h1>Tài khoản của bạn</h1>
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

                            {persons.isAdmin == 1 ?(
                            <NavLink to="./admin">
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
                       
                        <div class="col-7 row private-info">
                            
                            <div class="col-4 info-type">
                                Họ tên: <br /> 
                                Ngày sinh: <br />
                                Giới tính: <br />
                                Email: <br />
                                Sđt: <br />
                                Địa chỉ: <br />
                            </div>
                            
                            <div class="col-8">
                                {/* {this.state.persons.map(person => ( */}
                                <>
                                {this.state.persons['Lastname']} {this.state.persons['Firstname']} <br />
                                    {this.state.persons['Dob']} <br />
                                    {this.state.persons['Gender']} <br />
                                    {this.state.persons['Email']} <br />
                                    {this.state.persons['Tel']} <br />
                                    {this.state.persons['Address']} <br />
                                </>
                                {/* ))} */}
                            </div>
                        </div>

                        {/* {this.state.persons.map(person => ( */}
                        <div class="col" align="right"> 

                            <div class="avatar-img">
                                <img src= {avatar} />
                            </div>

                            <div class="point">
                             
                                <p>
                                {this.state.persons['CurrentPoint']}
                                </p>
                            </div>

                        </div>
                        {/* ))} */}

                    </div>

                    <div align="center">
                        <Button className="btn btn-secondary edit" variant="primary" onClick={this.handleShow}>
                            Chỉnh sửa
                        </Button>
                        <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
                            <Modal.Header  style={{margin: '10px'}}> 
                                <Modal.Title>
                                    <b>Chỉnh sửa thông tin </b>
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form style={{padding: '10px'}}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Avatar</Form.Label>
                                        <Form.Control type="file" accept="image/jpeg, image/png"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Họ</Form.Label>
                                        <Form.Control type="text" value={this.state.personsEdit['Lastname']}
                                        onChange={this.handleOnChangeLastName}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Tên</Form.Label>
                                        <Form.Control type="text" value={this.state.personsEdit.Firstname}
                                        onChange={this.handleOnChangeFirstName}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Ngày sinh</Form.Label>
                                        <Form.Control type="text" value={this.state.personsEdit['Dob']} 
                                        onChange={this.handleOnChangeDob}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" value={this.state.personsEdit['Email']}
                                        onChange={this.handleOnChangeEmail}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Giới tính</Form.Label>
                                        <Form.Control type="gender" value={this.state.personsEdit['Gender']}
                                        onChange={this.handleOnChangeGender}/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Số điện thoại</Form.Label>
                                        <Form.Control type="number" value={this.state.personsEdit['Tel']}
                                        onChange={this.handleOnChangeTel}/>
                                    </Form.Group>

                                    {/* <Form.Group className="mb-3">
                                        <Form.Label>Số nhà</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Đường</Form.Label>
                                        <Form.Control type="text"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
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
                                     */}
                                </Form>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose} className="btn-return">
                                    Trở về
                                </Button>
                                <Button variant="primary" onClick={() => {this.handleEdit()}} className="btn-payment">
                                    OK
                                </Button>
                                
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div class="row purchase-history">
                        <div class="col-3"></div>
                        <div class="col">
                            <h2>Lịch sử mua hàng</h2>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Đơn Hàng</th>
                                        <th scope="col">Ngày mua</th>
                                        <th scope="col">Tổng tiền</th>
                                        <th scope="col">Trạng thái</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                
                                    <tbody class="table-group-divider overflow-auto">
                                        {this.state.orders.map((order, index) => (
                                        <tr>
                                            <th key={index} scope="row">{index + 1}</th>
                                            <td>{order.OrderID}</td>
                                            <td>{order.Date}</td>
                                            <td>{VND.format(order.TotalCost)}</td>
                                            <td>{order.OrderStatus}</td>
                                            {order.OrderStatus === 'Đã Hoàn Thành' || order.OrderStatus === 'Đã Hoàn Tiền' ?(
                                                <td>
                                                    <button type="button" class="btn" id='refund' disabled >
                                                        Hoàn Tiền
                                                    </button>
                                                </td>
                                            ) : (
                                                <td>
                                                <button type="button" class="btn" id='refund' onClick={()=> this.refundMoney(order.OrderID)} >
                                                    Hoàn Tiền
                                                </button>
                                            </td>
                                            )}

                                        </tr>
                                        
                                        ))}

                                    </tbody>

                            </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(Info);