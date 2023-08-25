import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import Catalog_Manage from '../containers/System/Catalog_Manage/Catalog_Manage';
import Product_Manage from '../containers/System/Product_Manage/Product_Manage';
import Customer_Manage from '../containers/System/Customer_Manage/Customer_Manage';
import Order_Manage from '../containers/System/Order_Manage/Order_Manage';
import Sales_Statistics from '../containers/System/Sales_Statistics/Sales_Statistics';
import Header from '../containers/Header/Header';

class Admin extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {/* {isLoggedIn && <Header />} */}
                {<Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/admin/catalog-manage" component={Catalog_Manage} />
                            <Route path="/admin/product-manage" component={Product_Manage} />
                            <Route path="/admin/customer-manage" component={Customer_Manage} />
                            <Route path="/admin/order-manage" component={Order_Manage} />
                            <Route path="/admin/sales-statistics" component={Sales_Statistics} />
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
