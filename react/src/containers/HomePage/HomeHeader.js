import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/logo10.png'
import event from '../../assets/background-event.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';
import * as actions from "../../store/actions";

class HomeHeader extends Component {

    // state = {
    //     links: [
    //         {
    //             id: 1,
    //             name: "SIÊU SALE",
    //             to: "/sieu-sale",
    //             className: "child-content"
    //         }, 
    //         {
    //             id: 2,
    //             name: "SẢN PHẨM MỚI",
    //             to: "/sieu-sale",
    //             className: "child-content"
    //         }, 
    //         {
    //             id: 3,
    //             name: "ÁO",
    //             to: "/sieu-sale",
    //             className: "child-content"
    //         }, 
    //         {
    //             id: 4,
    //             name: "QUẦN",
    //             to: "/sieu-sale",
    //             className: "child-content"
    //         }, 
    //         {
    //             id: 5,
    //             name: "PHỤ KIỆN",
    //             to: "/sieu-sale",
    //             className: "child-content"
    //         }
    //     ],
    //     activeLink: null
    // };

    // handleClick = id => {
    //     this.setState({ activeLink: id });
    // };

    render() {
        // const { links, activeLink } = this.state;
        const { processLogout } = this.props;
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class="fas fa-bars"></i>
                            <Link to ='/home'>
                                <img className='header-logo' src={logo} />
                            </Link>
                            {/* <div className='header-logo'></div> */}
                        </div>

                        <div className='center-content'>
                            {/* {links.map(link => {
                                return (
                                    <div>
                                        <div key={link.id} onClick={() => this.handleClick(link.id)}
                                            className={
                                            link.className +
                                            (link.id === activeLink ? " active_item" : "")
                                        }>
  
                                            <b>
                                                {link.name}
                                            </b>
                                        </div>
                                        <Link to = {link.to}></Link>
                                    </div>
                                );
                            })} */}
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

                            <NavLink to ='/phu-kien'>
                                <div className='child-content'>
                                    <div>
                                        PHỤ KIỆN
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <div className='right-content'>
                            <div className='search'>
                                <input type='text' placeholder='Tìm kiếm sản phẩm' />
                                <i class="fas fa-search"></i>
                            </div>

                            <NavLink to ='/user/info'>
                                <div className='login-icon'>
                                    <i class="fas fa-user-circle"></i>
                                </div>
                            </NavLink>
                            
                            <div className='cart-icon'>
                                <i class="fas fa-shopping-cart"></i>
                            </div>

                            <div className="btn btn-logout" onClick={processLogout} title='Log out'>
                                <i className="fas fa-sign-out-alt"></i>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* <div className='home-header-banner'>
                    <a href = 'https://highclub.vn/collections/sale'>
                        <img className='home-banner-content' src = {event} />
                    </a>
                </div> */}
            </React.Fragment>
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
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);