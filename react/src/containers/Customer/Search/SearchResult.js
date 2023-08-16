import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import '../../HomePage/HomePage.scss';
import '../Page.scss';
import './SearchResult.scss';

// import '../DetailProduct.scss';
// import axios from 'axios';



class SearchResult extends Component { 

    handleViewDetailProductSearch = () => {
        console.log("ID sản phẩm");

        //Cái trang chi tiết áo đang bị gì ấy nên tui sẽ để cái chi tiết quần :V
        // this.props.history.push(`/chi-tiet-ao/:1`);

        // hoặc cái này, tùy vào kiểm tra như thế nào để biết sản phẩm đó là áo hay quần chứ tui không biết :v
        this.props.history.push(`/chi-tiet-quan/:1`);
    };
    

    render() {
        return (

           <Fragment>
            <HomeHeader />
                <div className='section'>
                    <div className='section-container'>
                        <div className='section-content'>
                            <div className='section-header header-position search-header'>
                                <span className='title-section'>Tìm kiếm</span>
                                <h5 className='sub-title'>Có <span>1</span> sản phẩm cho tìm kiếm</h5>
                            </div>
                            <div className='section-body'>
                                <div className='col-3 product' onClick={() => this.handleViewDetailProductSearch()}>
                                    <div className='product-img'>
                                        <div className='product-discount'>
                                            <span>-6%</span>
                                        </div>
                                    </div>
                                    <div className='product-detail text-center'>
                                        <div className='product-name'>Basic Tee - Brown/White </div>
                                        <div className='product-price'>
                                            <span>179,000₫</span>
                                            <del>190,000₫</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <HomeFooter />
           </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
