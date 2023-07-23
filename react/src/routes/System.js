import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/UserManage';
import Catalog_Manage from '../containers/System/Catalog_Manage';
import Product_Manage from '../containers/System/Product_Manage';
import Customer_Manage from '../containers/System/Customer_Manage';
import Order_Manage from '../containers/System/Order_Manage';
import Sales_Statistics from '../containers/System/Sales_Statistics';
import Header from '../containers/Header/Header';

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/catalog-manage" component={Catalog_Manage} />
                            <Route path="/system/product-manage" component={Product_Manage} />
                            <Route path="/system/customer-manage" component={Customer_Manage} />
                            <Route path="/system/order-manage" component={Order_Manage} />
                            <Route path="/system/sales-statistics" component={Sales_Statistics} />
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

export default connect(mapStateToProps, mapDispatchToProps)(System);
