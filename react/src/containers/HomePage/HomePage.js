import React, { useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import HomeBanner from './HomeBanner';
import SieuSale from './Section/SieuSale';
import SPMoi from './Section/SPMoi';
import HomeFooter from './HomeFooter';

import './HomePage.scss';
import { response } from 'express';

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
// function App(){
//    const [backendData, setBackEndData] = useState([{}])
//    useEffect(()=>{
//     fetch("/home").then(
//         response => response.json()
//     ).then( 
//     data=>{
//         setBackEndData(data)
//     })
    
// },[])
// }


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
