import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

import './HomeBanner.scss';
import event from '../../assets/event.png'

class HomeBanner extends Component {
    render() {

        return (
            <div className='home-banner'>
                <NavLink to ='/sieu-sale' className='center-content-link' href=''>
                    <img className='home-banner-content' src = {event} />
                </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);