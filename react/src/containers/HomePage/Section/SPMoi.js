import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SPMoi.scss';


class SPMoi extends Component {

    render() {


        return (
            <div>
                <div className='section-spmoi'>
                    <div className='spmoi-container'>
                        <div className='spmoi-content'>
                            <div className='section-header'>
                                <span className='title-section'>Sản phẩm mới</span>
                            </div>
                            <div className='spmoi-body'>
                                <div className='col-3 spmoi-product'>
                                    <a href=''>
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
                                    </a>
                                </div>
                                <div className='col-3 spmoi-product'>
                                    <a href=''>
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
                                    </a>
                                </div>
                                <div className='col-3 spmoi-product'>
                                    <a href=''>
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
                                    </a>
                                </div>
                                <div className='col-3 spmoi-product'>
                                    <a href=''>
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
                                    </a>
                                </div>
                                <div className='col-3 spmoi-product'>
                                    <a href=''>
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
                                    </a>
                                </div>
                                <div className='col-3 spmoi-product'>
                                    <a href=''>
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
                                    </a>
                                </div>
                                <div className='col-3 spmoi-product'>
                                    <a href=''>
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
                                    </a>
                                </div>
                                <div className='col-3 spmoi-product'>
                                    <a href=''>
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
                                    </a>
                                </div>
                            </div>
                            <div className='spmoi-footer'>
                                <button className='btn-section'>XEM THÊM</button>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SPMoi);
