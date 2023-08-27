import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Slider from 'react-slick';
// Import css files:
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../admin.scss';
import HomeFooter from '../../HomePage/HomeFooter';

import AddNewProduct from './AddNewProduct';

class Product_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddNewProduct: false,
        }
    }

    handleCloseAddNewProduct = () => {
        this.setState({ showAddNewProduct: false});
    }

    handleConfirmAddNewProduct = () => {
        this.setState({ showAddNewProduct: false});
        alert('Thêm sản phẩm')
    }

    handleShowAddNewProduct = () => {
        this.setState({ showAddNewProduct: true});
    }


    render() {

        let settings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1
        };

        return (
            <div>
                <React.Fragment>
                    <div className='admin-container'>
                        <div className='admin-content'>
                            <div className='admin-header'>
                                <span>Sản phẩm: </span>
                                <i className="fas fa-plus-circle" onClick={() => this.handleShowAddNewProduct()}></i>
                            </div>
                            <div className='product-manage-frame'>
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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
                                <div className='admin-product'>
                                    <div className='admin-product-img'>
                                        {/* <img src= {sieusaleImg} />  */}
                                        <div className='bg-image'>
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

                            {this.state.showAddNewProduct && (
                            <AddNewProduct show = {this.state.showAddNewProduct} 
                                        handleClose = {this.handleCloseAddNewProduct} 
                                        handleConfirm = {this.handleConfirmAddNewProduct}
                                        handleShow = {this.handleShowAddNewProduct}/>
                            )} 
                        </div>
                    </div>
                    <HomeFooter />
                </React.Fragment>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Product_Manage);
