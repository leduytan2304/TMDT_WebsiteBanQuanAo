import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal,Form } from 'react-bootstrap';

import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';
import Discount from '../Cart/Discount/Discount'

import axios from 'axios';
import './Cart.scss';
import sp from '../../../assets/Ao/ao-2.png';


// hàm chuyển thành giá trị tiền tệ
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

class Cart extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            ProductID :[],
            productName :[],
            quantityNum: [],
            unit_price:[],
            unit_sum: [],
            sum: '0',
            discount: '0',
            price: '0',
            images:[],
            ImageLink:[],
            Size:[],
            ColorName:[],
            show: null,
            
        };
    }


    // const unitSum = images[0].map((image) => {
    //     const temp = parseFloat(image.ProductPrice) * parseInt(image.ProductQuantity);
    //     sum += temp;
    //     return temp;   })

    // hàm set giá trị cho price và unit_sum

    
    handleIncreaseItemToCart = () => {
        const lastSegment = window.location.pathname.split("/").pop();
        const UserID = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;

        console.log('UserID: ',UserID);
            fetch(`http://localhost:8000/api/cart_payment/addProduct/${UserID}` , { // thay đổi user sau
                method: 'POST',
                body: JSON.stringify({
                  userID: UserID, // thay đổi user sau
                  productID: this.state.ProductID,
                  size: this.state.selectedSize,
                  number: this.state.quantityNum,
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));
        }
        
    handlecreaseItemToCart = () => {
            const lastSegment = window.location.pathname.split("/").pop();
            const UserID = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;

            console.log('UserID: ',UserID);
                fetch(`http://localhost:8000/api/cart_payment/addProduct/${UserID}` , { // thay đổi user sau
                    method: 'POST',
                    body: JSON.stringify({
                      userID: UserID, // thay đổi user sau
                      productID: this.state.ProductID,
                      size: this.state.selectedSize,
                      number: this.state.quantityNum,
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                  })
                    .then((response) => response.json())
                    .then((json) => console.log(json));
            }




    componentDidMount() { 
        let sum = 0;
        const UserID = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;

        console.log('UserID: ',UserID);
        axios.get(`http://localhost:8000/api/cart/${UserID}`)
        .then(res => {
            const images = res.data;
            this.setState({ images });
            const productID =images[0].map((image) => {
                const temp =(image.ProductID);
                    // console.log(sum);
                    return temp;  
            });
            const quantity_number =images[0].map((image) => {
                const temp =parseInt(image.ProductQuantity);
                    // console.log(sum);
                    return temp;  
            });

            const product_name =images[0].map((image) => {
                const temp =(image.ProductName);
                    // console.log(sum);
                    return temp;  
            });

            const unitSum = images[0].map((image) => {
                const temp = parseFloat(image.ProductPrice) * parseInt(image.ProductQuantity);
                    
                    sum += temp;
                    // console.log(sum);
                    return temp;  
            });

            const unitPrice = images[0].map((image) => {
                const temp = parseFloat(image.ProductPrice);
                    
                    sum += temp;
                    // console.log(sum);
                    return temp;  
            });

            const imageLink =images[0].map((image) => {
                const temp =(image.ImageLink);
                    // console.log(sum);
                    return temp;  
            });
            const size =images[0].map((image) => {
                const temp =(image.ProductSizeID);
                    // console.log(sum);
                    return temp;  
            });
            const colorName =images[0].map((image) => {
                const temp =(image.ColorName);
                    // console.log(sum);
                    return temp;  
            });

            this.setState({ unit_sum: unitSum });
            this.setState({quantityNum: quantity_number})
            this.setState({productName: product_name})
            this.setState({unit_price: unitPrice})
            this.setState({ImageLink: imageLink})
            this.setState({Size: size})
            this.setState({ColorName: colorName})
            this.setState({ProductID: productID})

            // hàm khởi tạo cho sum ( thành tiền )
            let sumtemp = 0;
            this.state.quantityNum.map((quantity, index) => {
                let temp = parseFloat(this.state.unit_price[index]) * parseInt(quantity);
                sumtemp += temp;
                return temp;   
            });
            this.setState({ sum: sumtemp})

            // khởi tạo cho price ( tổng tiền )
            const discount = this.state.discount;
            this.setState({price: this.state.sum-discount});
        })
        .catch(error => console.log(error));
  };
       
    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };  
    

    //hàm cập nhật khi có thay đổi
    componentDidUpdate(prevProps, prevState) {
        if (prevState.quantityNum !== this.state.quantityNum) {
            //thay đổi tổng tiền mỗi mặt hàng và tổng tiền đơn hàng
            let sum = 0;
            const unitSum = this.state.quantityNum.map((quantity, index) => {
                const temp = parseFloat(this.state.unit_price[index]) * parseInt(quantity);
                sum += temp;
                return temp;   
            });
            this.setState({ unit_sum: unitSum });
            this.setState({ sum: sum})
            // thay đổi giá trị thành tiền
            const discount = this.state.discount;
            this.setState({price: sum-discount});
            
        }
    }
    
    // productID, productSize,
    //hàm thay đổi số lượng sản phẩm
    handleQuantityChange = (change, index) => {
        this.setState(prevState => {
            const newQuantityNum = [...prevState.quantityNum];
            let currentValue = newQuantityNum[index];
            const UserID = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;

            console.log('UserID: ',UserID);
            if (change === '-' && currentValue > 0) {
                currentValue --;

                fetch(`http://localhost:8000/api/cart_payment/removeProduct/${UserID}` , { // thay đổi user sau
                method: 'PUT',
                body: JSON.stringify({
                  userID: UserID,
                  productID: this.state.ProductID[index],
                  size: this.state.Size[index],
                  number: this.state.quantityNum[index],
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));
            } else if (change === '+' && currentValue < 100) {
                currentValue ++;
                
                fetch(`http://localhost:8000/api/cart_payment/addProduct/${UserID}` , { // thay đổi user sau
                method: 'POST',
                body: JSON.stringify({
                    userID: UserID,
                  productID: this.state.ProductID[index],
                  size: this.state.Size[index],
                  number: this.state.quantityNum[index],
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));
            }
            console.log(this.state.quantityNum[index]);

            


            newQuantityNum[index] = currentValue;
            return { quantityNum: newQuantityNum };
        });
    }
    removeItem = (index,componentDidMount) =>{
        const UserID = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        console.log('UserID: ',UserID);
        fetch(`http://localhost:8000/api/cart_payment/deleteProduct/${UserID}`  , { // thay đổi user sau
                method: 'PUT',
                body: JSON.stringify({
                  userID: UserID,
                  productID: this.state.ProductID[index],
                  size: this.state.Size[index],
                  number: this.state.quantityNum[index],
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));

    }

    // {this.state.productName.map((name, index) => (
    //     <div key={index}>
    //         {index === 0 && (
    //             <>
    //             <b>{name}</b>
    //             <p>Nâu / M</p>
    //             </>
    //         )}
    //     </div>
    // ))}
    render() {

        return (
            <div>
            <HomeHeader />
                <div className='cart-page'>
                    <h1>Giỏ hàng</h1>
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
                      
                        <div class="col-5 product-list">
                        {this.state.productName.map((name,index) => (
                            
                            <div class="row alert alert-secondary">
                                <div class="col-3 image-sp">
                                    <img src= {this.state.ImageLink[index]} />
                                </div>
                                
                                <div class="col-7" align="left">
                                        <b>{name}</b>
                                        <p>Size: {this.state.Size[index]}</p>
                                    <div className='quantity-area'>
                                        
                                            <div key={index}>
                                                    <>
                                                    <input type='button' className='quantity-btn' value='-' onClick={() => this.handleQuantityChange('-',index)} />
                                                        <input
                                                            type="number"
                                                            class="quantity-number"
                                                            name={`quantity-${index}`}
                                                            value={this.state.quantityNum[index]}
                                                            onChange={e => this.handleQuantityChange(e, index)}
                                                        />
                                                    <input type='button' className='quantity-btn' value='+' onClick={() => this.handleQuantityChange('+',index)} /> 
                                                    {/* , this.state.ProductID[index], this.state.Size[index], */}
                                                    </>
                                                
                                            </div>
                                    </div>
                                </div>
                                

                                <div class="col close-but" align="right"> 
                                    <button type="button" class="btn-close" aria-label="Close" onClick={() => this.removeItem(index)}></button>
                                    <p>
                                        {VND.format(this.state.unit_price[index])}  
                                    </p>
                            
                                </div>
                            </div>
                                    ))}    
                                
                        </div>
                        
                      
                                                 
                        <div class="col">
                            <div class="bill">
                                <h2>Thông tin đơn hàng</h2>
                                <hr
                                    style={{
                                    color: 'black',
                                    width: '85%',
                                    height: '1.5px',
                                    margin: '0 auto'
                                    }}
                                />
                                {this.state.productName.map((name,index) => (  
                                <div class="row product-bill">                                 
                                    <div class="col-9" align="left">
                                        <b>{name}</b>
                                        <p>{this.state.ColorName[index]}</p>
                                    </div>
                                    <div class="col" align="right"> 
                                        <p> x{this.state.quantityNum[index]} </p>
                                        <p> {VND.format(this.state.unit_price[index])}  </p>
                                        <p> {VND.format(this.state.quantityNum[index] *this.state.unit_price[index] )}  </p>
                                        
                                    </div>
                                </div>
                                    ))}
                                
                                <hr
                                    style={{
                                    color: 'black',
                                    width: '85%',
                                    height: '1.5px',
                                    margin: '0 auto',
                                    }}
                                />

                                <div class="row sum">
                                    <div class="col-7">
                                        Thành tiền:
                                    </div>
                                    <div class="col" align="right">
                                        <b>{VND.format(this.state.sum)}</b>
                                    </div>
                                </div>
                                
                                <div align="center">
                                    <div className="discount row" onClick={this.handleShow}>
                                        <div class="col-7" id="dc1" align="left">
                                            Giảm giá:
                                        </div>
                                        <div class="col" align="right" id="dc1">
                                            <b>- {VND.format(this.state.discount)}</b>
                                        </div>
                                        
                                        <div class="row discount-use">
                                            <div class="col-7" align="left">
                                                - Khách hàng Đồng
                                            </div>
                                            <div class="col" align="right">
                                                - {VND.format(12345)}
                                            </div>
                                        </div>
                                    </div>

                                    <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="md">
                                        <Modal.Header  style={{margin: '10px'}}> 
                                            <Modal.Title>
                                                <b>Chọn voucher</b>
                                            </Modal.Title>
                                        </Modal.Header>

                                        <Modal.Body>

                                            <Discount />

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

                                <div class="row final-price">
                                    <div class="col-7">
                                        Tổng tiền:
                                    </div>
                                    <div class="col" align="right" id="price">
                                        <b>{VND.format(this.state.price)}</b>
                                    </div>
                                </div>
                                <div  align="center">
                                    <NavLink to="./payment">
                                    <button type="button" class="btn btn-danger btn-pay">
                                        THANH TOÁN
                                    </button>
                                    </NavLink>
                                </div>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);