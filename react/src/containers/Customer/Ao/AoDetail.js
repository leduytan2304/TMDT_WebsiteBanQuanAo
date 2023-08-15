import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import '../DetailProduct.scss';
import axios from 'axios';



class AoDetail extends Component { 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       selectedSize: 'M',
    //       quantityNum: '1',
    //     };
    // }


      componentDidMount(req,res,url){
        // const parts = url.split('/');
        // let lastLink = parts.at(-1);
        axios.get(`http://localhost:8000/api${window.location.pathname}`)
          .then(res => {
            const images = res.data;
            this.setState({ images });
          })
          .catch(error => console.log(error));
    };

    state = {
        images: []
      }  
    handleSizeChange = (event) => {
        this.setState({ selectedSize: event.target.value });
    };
    
    handleQuantityChange = (change) => {
        const quantityInput = document.getElementsByName('quantity')[0];
        let currentValue = parseInt(quantityInput.value);
        if (change === '-' && currentValue > 1) {
            currentValue -= 1;
          } else if (change === '+' && currentValue < 100) {
            currentValue += 1;
        }
        this.setState({ quantityNum: currentValue });
    }

    handleAddToCart = () => {
        alert('Thêm vào giỏ');
    }

    handleBuyProduct = () => {
        alert('Mua hàng')
    }
    
    render() {
        const { selectedSize } = this.state;
        // const { quantityNum } = this.state;
        console.log(this.props.match.params.id); 
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        };
        return (
           <Fragment>
            <HomeHeader />
            
            <div className='product-detail-header'>
                <div className='header-title'>
                    Thông tin sản phẩm
                </div>
            </div>
            {this.state.images.map(image => (
            <div className='container'>
                <div className='row product-detail-content'>
                    <div className='col-md-6 product-detail-img'>
                        <Slider {...settings}>
                            <div className='detail-product-customize'>
                                {/* <img src= {sieusaleImg} />  */}
                                <img key={image.ImageID} src={image.ImageLink}  alt={`Image ${image.ImageID}`} style={{ width: '100%', height: 'auto' }} />
                                <div className='bg-image1'>
                                </div>
                            </div>

                            <div className='detail-product-customize'>
                                {/* <img src= {sieusaleImg} /> */}
                                <img key={image.ImageID} src={image.ImageLink}  alt={`Image ${image.ImageID}`} style={{ width: '100%', height: 'auto' }} />
                                <div className='bg-image2'>
                                </div>
                            </div>

                            <div className='detail-product-customize'>
                                {/* <img src= {sieusaleImg} /> */}
                                <img key={image.ImageID} src={image.ImageLink}  alt={`Image ${image.ImageID}`} style={{ width: '100%', height: 'auto' }} />
                                <div className='bg-image3'>
                                
                                </div>
                            </div>

                        </Slider>
                    </div>
                    <div className='col-md-6 product-detail-desc'>
                        <div className='product-name'>
                            <h1>{image.ProductName}</h1>
                            <span>MSP: {image.ProductID}</span>
                        </div>
                        <div className='product-price'>
                            <span className='pro-discount'>-24%</span>
                            <span className='pro-price'>{image.ProductPrice}</span>
                            <del>380,000₫</del>
                        </div>
                        <form className='add-item' action='/cart/add' method='post'>
                            <div className='select-size'>
                                <div data-value = 'M' className='size-element'>
                                    <input id='size-m' type="radio" name="option1" value="M" data-vhandle="m" onChange={this.handleSizeChange}/>
                                    <label For="size-m" className= {selectedSize === 'M' ? 'selected' : ''}>
                                        <span>M</span>
                                    </label>
                                </div>
                                <div data-value = 'L' className='size-element'>
                                    <input id='size-l' type="radio" name="option1" value="L" data-vhandle="l" onChange={this.handleSizeChange}/>
                                    <label For="size-l" className={selectedSize === 'L' ? 'selected' : ''}>
                                        <span>L</span>
                                    </label>
                                </div>
                                <div data-value = 'XL' className='size-element'>
                                    <input id='size-xl' type="radio" name="option1" value="XL" data-vhandle="xl" onChange={this.handleSizeChange}/>
                                    <label For="size-xl" className={selectedSize === 'XL' ? 'selected' : ''}>
                                        <span>XL</span>
                                    </label>
                                </div>
                            </div>
                            <div className='select-quantity'>
                                <label>Số lượng</label>
                                <div className='quantity-area'>
                                    <input type='button' className='quantity-btn' value='-' onClick={() => this.handleQuantityChange('-')} />
                                    <input type='text' className='quantity-number' name='quantity' value={this.state.quantityNum} min='1' />
                                    <input type='button' className='quantity-btn' value='+' onClick={() => this.handleQuantityChange('+')} />
                                </div>
                            </div>
                            <div className='product-action'>
                                <button type='button' className='add-btn action-btn' name='add' onClick={() => this.handleAddToCart()}>
                                    Thêm vào giỏ
                                </button>
                                <button type='button' className='buy-btn action-btn' name='buy' onClick={() => this.handleBuyProduct()}>
                                    Mua hàng
                                </button>
                            </div>
                        </form>
                        <div className='product-description'>
                            <h5>Chi tiết sản phẩm:</h5>
                        </div>
                    </div>
                </div>
            </div>
            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(AoDetail);
