import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SieuSale.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
// Import css files:
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class SieuSale extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
            <div className='section-sieusale'>
                <div className='sieusale-container'>
                    <div className='section-header'>
                        <span className='title-section title-sieusale'>Siêu Sale</span>
                        <button className='btn-section'>XEM THÊM</button>
                    </div>
                    <div className='sieusale-body'>
                        <Slider {...settings}>
                            <div className='sieusale-customize'>
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

                            <div className='sieusale-customize'>
                                {/* <img src= {sieusaleImg} /> */}
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

                            <div className='sieusale-customize'>
                                {/* <img src= {sieusaleImg} /> */}
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

                            <div className='sieusale-customize'>
                                {/* <img src= {sieusaleImg} /> */}
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

                            <div className='sieusale-customize'>
                                {/* <img src= {sieusaleImg} /> */}
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

                            <div className='sieusale-customize'>
                                {/* <img src= {sieusaleImg} /> */}
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
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(SieuSale);
