import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SieuSale.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';
// Import css files:
import axios from 'axios'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SieuSalePage from '../../Customer/SieuSale/SieuSalePage';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


class SieuSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          images: []
        };
    }
      componentDidMount(req,res,url){
        const UserID = JSON.parse(JSON.parse(localStorage.getItem('persist:user')).userInfo)?.userID;
        console.log('UserID: ',UserID);
        axios.get(`http://https://react-crud-kc0l.onrender.com/api/image/do`)
          .then(res => {
            const images = res.data;
            this.setState({ images });
          })
          .catch(error => console.log(error));
    };
 
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
                        <Link to ='/sieu-sale'>
                            <button className='btn-section'>
                                XEM THÊM
                            </button>
                        </Link>
                    </div>
                    <div className='sieusale-body'>
                        <Slider {...settings}>
                        {this.state.images.map(image => (

                            <div className='sieusale-customize'>
                                <img src= {image.ImageLink}  />
                                <div className='bg-image' >
                                
                                    <div className='product-discount'>
                                        <span>-6%</span>
                                    </div>
                                </div>
                                <div className='product-detail text-center'>
                                    <div className='product-name'>{image.ProductID} </div>
                                    <div className='product-price'>
                                       
                                        <del>{image.ProductPrice}</del>
                                    </div>
                                </div>
                            </div>
                        ))}
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
