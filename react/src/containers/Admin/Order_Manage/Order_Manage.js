import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import './Order_Manage.scss';

import HomeFooter from '../../HomePage/HomeFooter';
import axios from 'axios';

import Detail_Order from './Detail_Order';
import { updateStatusApi } from '../../../services/adminService';

class Order_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders1: [],
            orders2: [],
            orders3: [],
            orders4: [],
            openDetail: false,
            id_order: '',
            status_order: '',
            date_order: '',
            method_order: '',
            }
    }


    // Xem chi tiết đơn hàng
    handleViewDetailOrder = (id, status, date, method) => {
        console.log("Đơn hàng: ", id);
        this.setState({ 
            openDetail: true,
            id_order: id,
            status_order: status,
            date_order: date,
            method_order: method
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
    handleCompleteOrder = async (id) => {
        const status = 'Hoàn thành';
        try {
            let dataApi = await updateStatusApi(id, status);
            if (dataApi == 0){
                console.log("Err code", dataApi)
            }
            if (dataApi !== 0) {
                console.log("Chấp nhận đơn hàng: ", id);
                alert("Chấp nhận đơn hàng");
            }
            return;
        }
        
        catch(e){
            console.log("Lỗi", e.response)
        }
    }

    handlePackageOrder = async (id) => {
        const status = 'Đang đóng gói';
        try {
            let dataApi = await updateStatusApi(id, status);
            if (dataApi == 0){
                console.log("Err code", dataApi)
            }
            if (dataApi !== 0) {
                console.log("Chấp nhận đơn hàng: ", id);
                alert("Chấp nhận đơn hàng");
            }
            return;
        }
        
        catch(e){
            console.log("Lỗi", e.response)
        }
    }

    handleDiliveryOrder = async (id) => {
        const status = 'Đang giao';
        try {
            let dataApi = await updateStatusApi(id, status);
            if (dataApi == 0){
                console.log("Err code", dataApi)
            }
            if (dataApi !== 0) {
                console.log("Chấp nhận đơn hàng: ", id);
                alert("Chấp nhận đơn hàng");
            }
            return;
        }
        
        catch(e){
            console.log("Lỗi", e.response)
        }
    }

    // Từ chối đơn hàng
    handleRefuseOrder = async (id) => {
        const status = 'Huỷ';
        try {
            let dataApi = await updateStatusApi(id, status);
            if (dataApi == 0){
                console.log("Err code", dataApi)
            }
            if (dataApi !== 0) {
                console.log("Đã huỷ đơn hàng: ", id);
                alert("Đã huỷ đơn hàng");
            }
            return;
        }
        
        catch(e){
            console.log("Lỗi", e.response)
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/api/admin/orderconfirm`)
        .then(res => {
        const orders1 = res.data;
        this.setState({ orders1 });
        })
        .catch(error => console.log(error));

        axios.get(`http://localhost:8000/api/admin/orderdgoi`)
        .then(res => {
        const orders2 = res.data;
        this.setState({ orders2 });
        })
        .catch(error => console.log(error));

        axios.get(`http://localhost:8000/api/admin/orderdgiao`)
        .then(res => {
        const orders3 = res.data;
        this.setState({ orders3 });
        })
        .catch(error => console.log(error));

        axios.get(`http://localhost:8000/api/admin/orderht`)
        .then(res => {
        const orders4 = res.data;
        this.setState({ orders4 });
        })
        .catch(error => console.log(error));
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
                                {this.state.orders1.map((order, index) => (
                                    <tr key={order.OrderID}>
                                        <th scope="row">{order.OrderID}</th>
                                        <td>{order.OrderDate}</td>
                                        <td className='form-payment'>{order.PaymentMethodName}</td>
                                        <td className='order-status-wait'>{order.OrderStatus}</td>
                                        <td>
                                            <span className='view-detail-order' 
                                                onClick={() => this.handleViewDetailOrder(order.OrderID, order.OrderStatus, order.OrderDate, order.PaymentMethodName)}>
                                                Xem chi tiết
                                            </span>
                                        </td>
                                        <td>
                                            <div className='order-action'>
                                                <i className="fas fa-check-circle"
                                                   onClick={() => this.handlePackageOrder(order.OrderID)}></i>
                                                <i className="fas fa-times-circle"
                                                   onClick={() => this.handleRefuseOrder(order.OrderID)}></i>
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
                                {this.state.orders2.map((order) => (
                                    <tr key={order.id}>
                                        <th scope="row">{order.OrderID}</th>
                                        <td>{order.OrderDate}</td>
                                        <td className='form-payment'>{order.PaymentMethodName}</td>
                                        <td className='order-status-packing'>{order.OrderStatus}</td>
                                        <td>
                                            <span className='view-detail-order' 
                                                  onClick={() => this.handleViewDetailOrder(order.OrderID, order.OrderStatus, order.OrderDate, order.PaymentMethodName)}>
                                                Xem chi tiết
                                            </span>
                                        </td>
                                        <td>
                                            <div className='order-action'>
                                                <i className="fas fa-check-circle"
                                                   onClick={() => this.handleDiliveryOrder(order.OrderID)}></i>

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
                                {this.state.orders3.map((order) => (
                                    <tr key={order.OrderID}>
                                        <th scope="row">{order.OrderID}</th>
                                        <td>{order.OrderDate}</td>
                                        <td className='form-payment'>{order.PaymentMethodName}</td>
                                        <td className='order-status-delivery'>{order.OrderStatus}</td>
                                        <td>
                                            <span className='view-detail-order' 
                                                  onClick={() => this.handleViewDetailOrder(order.OrderID, order.OrderStatus, order.OrderDate, order.PaymentMethodName)}>
                                                Xem chi tiết
                                            </span>
                                        </td>
                                        <td>
                                            <div className='order-action'>
                                                <i className="fas fa-check-circle"
                                                   onClick={() => this.handleCompleteOrder(order.OrderID)}></i>

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
                                {this.state.orders4.map((order) => (
                                    <tr key={order.OrderID}>
                                        <th scope="row">{order.OrderID}</th>
                                        <td>{order.OrderDate}</td>
                                        <td>{order.OrderFinishedDate}</td>
                                        <td className='form-payment'>{order.PaymentMethodName}</td>
                                        <td className='order-status-completed'>{order.OrderStatus}</td>
                                        <td>
                                            <span className='view-detail-order' 
                                                  onClick={() => this.handleViewDetailOrder(order.OrderID, order.OrderStatus, order.OrderDate, order.PaymentMethodName)}>
                                                Xem chi tiết
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
                                    status = {this.state.status_order}
                                    date = {this.state.date_order}
                                    method = {this.state.method_order}
                                    handleClose = {this.handleCloseDetailOrder} 
                                    handleConfirm = {this.handleConfirmDetailOrder}
                                    handleShow = {this.handleViewDetailOrder}
                                    
                                    />
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
