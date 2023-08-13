import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import SieuSale from './Section/SieuSale';
import SPMoi from './Section/SPMoi';
import HomeFooter from './HomeFooter';

import './HomePage.scss';

class HomePage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <HomeBanner />
                <SieuSale />
                <SPMoi />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
