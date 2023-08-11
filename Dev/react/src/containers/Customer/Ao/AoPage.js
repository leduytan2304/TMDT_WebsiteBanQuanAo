import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
// import SieuSale from './Section/SieuSale';
// import SPMoi from './Section/SPMoi';
import HomeFooter from '../../HomePage/HomeFooter';
import '../../HomePage/HomePage.scss';
import '../Page.scss';
import axios from 'axios';


class AoPage extends Component {

    componentDidMount(){
        axios.get(`http://localhost:8000/api/image`)
          .then(res => {
            const images = res.data;
            this.setState({ images });
          })
          .catch(error => console.log(error));
    };

    state = {
        images: []
      }

    render() {
        return (
            <div>
                <HomeHeader />
                <div className='section sieusale-frame'>
                    <div className='section-container'>
                        <div className='section-content'>
                            <div className='section-header header-position'>
                                <span className='title-section'>Áo</span>
                                <div className='col-3 browse-tags'>
                                <span className='dropdown'>
                                    <select className='sort'>
                                        <option value="manual">Sản phẩm nổi bật</option>
                                        <option value="price-ascending" data-filter = "&sortby = (price:product=asc)">Giá: Tăng dần</option>
                                        <option value="price-descending" data-filter = "&sortby = (price:product=desc)">Giá: Giảm dần</option>
                                        <option value="title-ascending" data-filter = "&sortby = (title:product=asc)">Tên: A-Z</option>
                                        <option value="title-descending" data-filter = "sortby = (price:product=desc)">Tên: Z-A</option>
                                        <option value="created-descending" data-filter = "sortby = (updated_at:product=asc)">Mới nhất</option>
                                        <option value="created-ascending" data-filter = "sortby = (updated_at:product=desc)">Cũ nhất</option>
                                        <option value="best-selling" data-filter = "sortby = (sold_quantity:product=desc)">Bán chạy nhất</option>
                                    </select>
                                </span> 
                                </div>
                            </div>

                            <div>
                            {this.state.images.map(image => (
                                <img 
                                    key={image.ImageID}
                                    src={image.ImageLink} 
                                    alt={`Image ${image.ImageID}`} 
                                    style={{ width: '300px', height: 'auto', margin: '10px' }}
                                />
                            ))}
                            </div>


                        </div>
                    </div>
                </div>
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AoPage);