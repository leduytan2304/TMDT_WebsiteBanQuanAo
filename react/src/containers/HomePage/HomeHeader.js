import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { withRouter } from "react-router-dom";
import logo from '../../assets/logo10.png'
import event from '../../assets/background-event.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';
import * as actions from "../../store/actions";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            showCenterContent: false,
        };
    }

    toggleCenterContent = () => {
        this.setState((prevState) => ({
          showCenterContent: !prevState.showCenterContent,
        }));
    };

    handleSearchInputChange = (event) => {
        this.setState({ search: event.target.value });
    };

    handleSearchIconClick = () => {
        const { search } = this.state;
        if (search.trim() === "") {
            console.log("Search is empty or contains only spaces");
            toast.error('Chưa nhập thông tin tìm kiếm', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 4000,
            })
            return; // Không làm bước tiếp theo nếu search trống
        }
        console.log(search);
        this.props.history.push(`/search?query=${search}`);
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          this.handleSearchIconClick();
        }
    };

    render() {
        // const { links, activeLink } = this.state;
        const { processLogout } = this.props;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class="fas fa-bars" onClick={this.toggleCenterContent}></i>
                            <Link to ='/home'>
                                <img className='header-logo' src={logo} />
                            </Link>
                            
                        </div>

                        <div className={`center-content ${this.state.showCenterContent ? 'show' : ''}`}>
                            <NavLink to ='/sieu-sale'>
                                <div className='child-content'>
                                    <div>
                                        SIÊU SALE
                                    </div>
                                </div>
                            </NavLink>
                            
                            <NavLink to ='/san-pham-moi'>
                                <div className='child-content'>
                                    <div>
                                        SẢN PHẨM MỚI
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to ='/ao'>
                                <div className='child-content'>
                                    <div>
                                        ÁO
                                    </div>
                                </div>
                            </NavLink>

                            <NavLink to ='/quan'>
                                <div className='child-content'>
                                    <div>
                                        QUẦN
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className='right-content'>
                            <div className='search'>
                                <input type='text' 
                                       placeholder='Tìm kiếm sản phẩm' 
                                       value={this.state.search} 
                                       onChange={this.handleSearchInputChange}
                                       onKeyDown={this.handleKeyPress} />
                                <i class="fas fa-search" onClick={this.handleSearchIconClick}></i>
                            </div>

                            <NavLink to ='/user/info'>
                                <div className='login-icon'>
                                    <i class="fas fa-user-circle"></i>
                                </div>
                            </NavLink>

                            <NavLink to ='/user/cart'>
                                <div className='cart-icon'>
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                            </NavLink>

                            
                        </div>
                    </div>
                </div>

            </React.Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));