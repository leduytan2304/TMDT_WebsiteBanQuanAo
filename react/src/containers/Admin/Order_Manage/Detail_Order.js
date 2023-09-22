import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import '../ModalAdmin.scss';
import './Detail_Order.scss';
import axios from 'axios';

class Detail_Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderDetail: [],
            openDetail: false,
            id_order: '',
            check: false,
        }
    }

    componentDidMount(){
        const dataFetchedFlag = this.state.check;

        if (dataFetchedFlag === 'true') {
          this.loadOrder();
        } else {
          setTimeout(() => {
            this.loadOrder();
          }, 500);
        }
    }

    loadOrder() {
        const { id } = this.props;
        axios.get(`https://react-crud-kc0l.onrender.com/api/admin/orderdetail/${id}`)
        .then(res => {
        const orderDetailInfo = res.data;
        
        this.setState({ orderDetail:  orderDetailInfo})
        })
        .catch(error => console.log(error));
    };
    
    render() {
        const { show, id, handleClose, handleConfirm, status, date, method } = this.props;
        const { orderDetail } = this.state;
        const totalOrderQuantity = this.state.orderDetail.reduce((sum, order) => sum + order.OrderQuantity, 0);
        const totalPrice = this.state.orderDetail.reduce((sum, order) => sum + (order.OrderQuantity * order.ProductCost), 0);
        
        if (orderDetail.length === 0) {
            return <div className="loading">Loading...</div>;
        }

        return (
            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}
                
                <Modal className='modal-window' show={show} size='lg' onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Đơn hàng 
                            <span> #{id}</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <Form>
                    
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Ngày tạo đơn:</Form.Label>
                                <Form.Label className='right-content'>{date}</Form.Label>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Người nhận:</Form.Label>
                                <Form.Label className='right-content'>{orderDetail[0].CustomerName}</Form.Label>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Hình thức thanh toán:</Form.Label>
                                <Form.Label className='right-content'>{method}</Form.Label>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Trạng thái đơn hàng:</Form.Label>
                                <Form.Label className='right-content order-status'>{status}</Form.Label>
                            </div>
                        
                            <div className='order-detail-title detail-cart'>
                                <Form.Label className='left-title'>Sản phẩm mua:</Form.Label>
                                <div className='table-cart'>
                                    <table class="table table-hover text-center table-bordered border-secondary">
                                        <thead class="table-light">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col"></th>
                                                <th scope="col">Tên sản phẩm</th>
                                                <th scope="col">Màu</th>
                                                <th scope="col">Size</th>
                                                <th scope="col">Số lượng</th>
                                                <th scope="col">Giá tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody class = 'table-bordered'> 
                                        {this.state.orderDetail.map((order, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <img src= {order.Imagelink} 
                                                            style={{ width: 'auto', height: '70px' }} />
                                                    </td>
                                                    <td>{order.ProductName}</td>
                                                    <td>{order.colorname}</td>
                                                    <td>{order.ProductSizeID}</td>
                                                    <td>{order.OrderQuantity}</td>
                                                    <td>{order.ProductCost}</td>
                                                </tr>
                                        ))}
                                            <tr className='sum-product'>
                                                <th scope="row">Tổng</th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className='sum-count'>{totalOrderQuantity}</td>
                                                <td className='sum-price'>{totalPrice}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Địa chỉ giao hàng:</Form.Label>
                                <Form.Label className='right-content'>{orderDetail[0].Address}</Form.Label>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Điện thoại liên lạc:</Form.Label>
                                <Form.Label className='right-content'>{orderDetail[0].PhoneNumber}</Form.Label>
                            </div>
                        </Form.Group>
                        
                    </Form>
                    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Xác nhận
                    </Button>
                    </Modal.Footer>
                </Modal>
                
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail_Order);