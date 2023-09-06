import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import HomeHeader from '../../../HomePage/HomeHeader';
import HomeFooter from '../../../HomePage/HomeFooter';

import './Success.scss';
import axios from 'axios';
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

class Success extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment_method: 'cod', // Giá trị mặc định được chọn
            quantityNum: ['1','1','1'],
            unit_sum: ['149000','149000','149000'],
            sum: '447000',
            discount: '0',
            price: '482000'
        };
    }
    state = {
        totalMoney: []
    }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/typicode/demo/posts/4',{
            method: "POST",
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1
            }),headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
      .then(response => response.json())
      .then(json => console.log(json))
    };
    

    paymentOptionChange = (event) => {
        this.setState({
            payment_method: event.target.value,
        });
    }

    render() {

        return (
            <div>
                <HomeHeader />
                <div className='address-page'>
                    <h1>Thanh Toán</h1>
                    <hr
                        style={{
                        color: 'black',
                        width: '150px',
                        height: '1.5px',
                        margin: '0 auto',
                        opacity: '1'
                        }}
                    />
                    
                    
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Success);