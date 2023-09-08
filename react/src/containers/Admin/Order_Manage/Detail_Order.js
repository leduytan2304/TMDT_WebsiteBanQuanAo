import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import '../ModalAdmin.scss';
import './Detail_Order.scss';

class Detail_Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDetail: false,
            id_order: '',
            order_cart: new Array(4).fill(null).map((_, index) => ({
                id: index,
                img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/425974/item/goods_09_425974.jpg?width=750',
                name: 'SP' + index,
                color: 'Màu',
                size: 'size',
                count: '2',
                price: '300,000₫',
            })),
        }
    }
    
    render() {
        const { show, id, handleClose, handleConfirm, handleShow } = this.props;
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
                                <Form.Label className='right-content'>dd-mm-yyyy hh:mm:ss</Form.Label>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Người nhận:</Form.Label>
                                <Form.Label className='right-content'>Nguyễn Văn A</Form.Label>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Hình thức thanh toán:</Form.Label>
                                <Form.Label className='right-content'>COD</Form.Label>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Trạng thái đơn hàng:</Form.Label>
                                <Form.Label className='right-content order-status'>Đang giao</Form.Label>
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
                                            {this.state.order_cart.map((order) => (
                                                <tr key={order.id}>
                                                    <th scope="row">{order.id + 1}</th>
                                                    <td>
                                                        <img src= {order.img} 
                                                            style={{ width: 'auto', height: '70px' }} />
                                                    </td>
                                                    <td>{order.name}</td>
                                                    <td>{order.color}</td>
                                                    <td>{order.size}</td>
                                                    <td>{order.count}</td>
                                                    <td>{order.price}</td>
                                                </tr>
                                            ))}
                                            <tr className='sum-product'>
                                                <th scope="row">Tổng</th>
                                                <td>
                                                </td>
                                                <td></td>
                                                <td className='sum-count'>8</td>
                                                <td className='sum-price'>1,200,000₫</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Địa chỉ giao hàng:</Form.Label>
                                <Form.Label className='right-content'>227 Nguyễn Văn Cừ, phường 5, TP HCM</Form.Label>
                            </div>
                            <div className='order-detail-title'>
                                <Form.Label className='left-title'>Điện thoại liên lạc:</Form.Label>
                                <Form.Label className='right-content'>0123456789</Form.Label>
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