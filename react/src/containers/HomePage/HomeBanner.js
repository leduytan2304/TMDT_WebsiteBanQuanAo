import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './HomeBanner.scss';
import event from '../../assets/background-event.jpg'

class HomeBanner extends Component {
    render() {
 
        return (
            <div className='home-banner'>
                <a href = 'https://highclub.vn/collections/sale'>
                    <img className='home-banner-content' src = {event} />
                </a>
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