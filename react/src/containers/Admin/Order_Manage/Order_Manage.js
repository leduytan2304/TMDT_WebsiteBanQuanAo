import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import './Order_Manage.scss';

import HomeFooter from '../../HomePage/HomeFooter';

import Detail_Order from './Detail_Order';

class Order_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDetail: false,
            id_order: '',
            wait_confirm: new Array(5).fill(null).map((_, index) => ({
                id: index,
                name: 'Order is pending confirmation: ' + index,
                date: '01-01-2023',
                form_payment: 'COD',
                status: 'Chờ xác nhận',
                detail: "Xem chi tiết",
            })),
            packing: new Array(4).fill(null).map((_, index) => ({
                id: index,
                name: 'Order is being packed: ' + index,
                date: '01-01-2023',
                form_payment: 'COD',
                status: 'Đang đóng gói',
                detail: "Xem chi tiết",
            })),
            delivering: new Array(6).fill(null).map((_, index) => ({
                id: index,
                name: 'Order is being delivered: ' + index,
                date: '01-01-2023',
                form_payment: 'COD',
                status: 'Đang giao',
                detail: "Xem chi tiết",
            })),
            completed: new Array(10).fill(null).map((_, index) => ({
                id: index,
                name: 'Order completed: ' + index,
                date: '01-01-2023',
                delivery_date: '01-01-2023',
                form_payment: 'COD',
                status: 'Đã giao',
                detail: "Xem chi tiết",
            })),
        }
    }


    // Xem chi tiết đơn hàng
    handleViewDetailOrder = (id) => {
        console.log("Đơn hàng: ", id);
        this.setState({ 
            openDetail: true,
            id_order: id
        });
    }

    handleCloseDetailOrder = () => {
        this.setState({ 
            openDetail: false,
        });
    }

    handleConfirmDetailOrder = () => {
        this.setState({ openDetail: false});
    }

    // Chấp nhận đơn hàng
    handleAcceptOrder = (id) => {
        console.log("Chấp nhận đơn hàng: ", id);
        alert("Chấp nhận đơn hàng");
    }

    // Từ chối đơn hàng
    handleRefuseOrder = (id) => {
        console.log("Từ chối đơn hàng: ", id);
        alert("Từ chối đơn hàng");
    }

    render() {
        return (
            <React.Fragment>
                <div className='admin-container'>
                    <fieldset>
                        <legend>
                            Chờ xác nhận
                        </legend>
                        <table class="table table-hover text-center table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Mã đơn hàng</th>
                                    <th scope="col">Ngày đặt</th>
                                    <th scope="col">Hình thức thanh toán</th>
                                    <th scope="col">Trạng thái đơn hàng</th>
                                    <th scope="col">Chi tiết</th>
                                    <th scope="col">Tác vụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.wait_confirm.map((order) => (
                                    <tr key={order.id}>
                                        <th scope="row">DH{order.id + 1}</th>
                                        <td>{order.date}</td>
                                        <td className='form-payment'>{order.form_payment}</td>
                                        <td className='order-status-wait'>{order.status}</td>
                                        <td>
                                            <span className='view-detail-order' 
                                                  onClick={() => this.handleViewDetailOrder(order.id)}>
                                                {order.detail}
                                            </span>
                                        </td>
                                        <td>
                                            <div className='order-action'>
                                                <i className="fas fa-check-circle"
                                                   onClick={() => this.handleAcceptOrder(order.id)}></i>
                                                <i className="fas fa-times-circle"
                                                   onClick={() => this.handleRefuseOrder(order.id)}></i>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Đang đóng gói
                        </legend>
                        <table class="table table-hover text-center table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Mã đơn hàng</th>
                                    <th scope="col">Ngày đặt</th>
                                    <th scope="col">Hình thức thanh toán</th>
                                    <th scope="col">Trạng thái đơn hàng</th>
                                    <th scope="col">Chi tiết</th>
                                    <th scope="col">Tác vụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.packing.map((order) => (
                                    <tr key={order.id}>
                                        <th scope="row">DH{order.id + 1}</th>
                                        <td>{order.date}</td>
                                        <td className='form-payment'>{order.form_payment}</td>
                                        <td className='order-status-packing'>{order.status}</td>
                                        <td>
                                            <span className='view-detail-order' 
                                                  onClick={() => this.handleViewDetailOrder(order.id)}>
                                                {order.detail}
                                            </span>
                                        </td>
                                        <td>
                                            <div className='order-action'>
                                                <i className="fas fa-check-circle"
                                                   onClick={() => this.handleAcceptOrder(order.id)}></i>
                                                <i className="fas fa-times-circle"
                                                   onClick={() => this.handleRefuseOrder(order.id)}></i>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Đang giao
                        </legend>
                        <table class="table table-hover text-center table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Mã đơn hàng</th>
                                    <th scope="col">Ngày đặt</th>
                                    <th scope="col">Hình thức thanh toán</th>
                                    <th scope="col">Trạng thái đơn hàng</th>
                                    <th scope="col">Chi tiết</th>
                                    <th scope="col">Tác vụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.delivering.map((order) => (
                                    <tr key={order.id}>
                                        <th scope="row">DH{order.id + 1}</th>
                                        <td>{order.date}</td>
                                        <td className='form-payment'>{order.form_payment}</td>
                                        <td className='order-status-delivery'>{order.status}</td>
                                        <td>
                                            <span className='view-detail-order' 
                                                  onClick={() => this.handleViewDetailOrder(order.id)}>
                                                {order.detail}
                                            </span>
                                        </td>
                                        <td>
                                            <div className='order-action'>
                                                <i className="fas fa-check-circle"
                                                   onClick={() => this.handleAcceptOrder(order.id)}></i>
                                                <i className="fas fa-times-circle"
                                                   onClick={() => this.handleRefuseOrder(order.id)}></i>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Hoàn thành
                        </legend>
                        <table class="table table-hover text-center table-bordered">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">Mã đơn hàng</th>
                                    <th scope="col">Ngày đặt</th>
                                    <th scope="col">Ngày giao</th>
                                    <th scope="col">Hình thức thanh toán</th>
                                    <th scope="col">Trạng thái đơn hàng</th>
                                    <th scope="col">Chi tiết</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.completed.map((order) => (
                                    <tr key={order.id}>
                                        <th scope="row">DH{order.id + 1}</th>
                                        <td>{order.date}</td>
                                        <td>{order.delivery_date}</td>
                                        <td className='form-payment'>{order.form_payment}</td>
                                        <td className='order-status-completed'>{order.status}</td>
                                        <td>
                                            <span className='view-detail-order' 
                                                  onClick={() => this.handleViewDetailOrder(order.id)}>
                                                {order.detail}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </fieldset>
                    {this.state.openDetail && (
                        <Detail_Order show = {this.state.openDetail} 
                                    id = {this.state.id_order}
                                    handleClose = {this.handleCloseDetailOrder} 
                                    handleConfirm = {this.handleConfirmDetailOrder}
                                    handleShow = {this.handleViewDetailOrder}/>
                    )} 
                </div>
                <HomeFooter />
            </React.Fragment>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Order_Manage);
