import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Route, Switch, Link} from 'react-router-dom';
// import { ConnectedRouter as Router } from 'connected-react-router';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils'
import Home from '../routes/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import System from '../routes/System';
import { CustomToastCloseButton } from '../components/CustomToast';
// import ConfirmModal from '../components/ConfirmModal';
import HomePage from './HomePage/HomePage.js';
import CustomScrollbars from '../components/CustomScrollbars';
import SieuSalePage from './Customer/SieuSale/SieuSalePage';
import SanPhamMoiPage from './Customer/SanPhamMoi/SanPhamMoiPage';
import AoPage from './Customer/Ao/AoPage';
import QuanPage from './Customer/Quan/QuanPage';
import PhuKienPage from './Customer/PhuKien/PhuKienPage';
import UserPage from './User/Info/Info';
import AddressPage from './User/Address/Address';
import CartPage from './User/Cart/Cart';
import PaymentPage from './User/Payment/Payment';

import AoDetail from './Customer/Ao/AoDetail';
import QuanDetail from './Customer/Quan/QuanDetail';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">

                        <div className="content-container">
                            <CustomScrollbars style = {{height: '100vh', width: '100%'}}>
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.HOMEPAGE} component={(HomePage)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.REGISTER} component={userIsNotAuthenticated(Register)} />
                                    <Route path={path.SIEUSALE} component={SieuSalePage} />
                                    <Route path={path.SANPHAMMOI} component={SanPhamMoiPage} />
                                    <Route path={path.AO} component={AoPage} />
                                    <Route path={path.QUAN} component={QuanPage} />
                                    <Route path={path.PHUKIEN} component={PhuKienPage} />
                                    <Route path={path.INFO} component={UserPage} />
                                    <Route path={path.ADDRESS} component={AddressPage} />
                                    <Route path={path.CART} component={CartPage} />
                                    <Route path={path.PAYMENT} component={PaymentPage} />
                                    {/* <Route path="/users/:id" component={SieuSalePage} /> */}
                                    {/* <Route path={path.DETAIL_PRODUCT} component={DetailProduct} /> */}

                                    <Route path={path.AO_DETAIL} component={AoDetail} />
                                    <Route path={path.QUAN_DETAIL} component={QuanDetail} />
                                </Switch>
                            </CustomScrollbars>
                        </div>

                        <ToastContainer
                            className="toast-container" toastClassName="toast-item" bodyClassName="toast-item-body"
                            autoClose={false} hideProgressBar={true} pauseOnHover={false}
                            pauseOnFocusLoss={true} closeOnClick={false} draggable={false}
                            closeButton={<CustomToastCloseButton />}
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);