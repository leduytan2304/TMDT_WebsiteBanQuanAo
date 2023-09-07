import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import HomeFooter from '../../HomePage/HomeFooter';

import '../../HomePage/HomePage.scss';
import '../Page.scss';
import './SearchResult.scss';

// import '../DetailProduct.scss';
import axios from 'axios';



class SearchResult extends Component { 
    state = {
        images: []
      };

      fetchData = (keyword) => {
        axios.get(`http://localhost:8000/api/image/search?query=${keyword}`)
          .then(res => {
            const images = res.data;
            console.log(images)
            this.setState({ images });
          })
          .catch(error => console.log(error));
      };

      componentDidMount(){
        const search = this.getSearchFromQueryParams();
        this.fetchData(search);
    };

    componentDidUpdate(prevProps) {
        const prevSearch = this.getSearchFromQueryParams(prevProps);
        const currentSearch = this.getSearchFromQueryParams();

        if (prevSearch !== currentSearch) {
          this.fetchData(currentSearch);
        }
      }

    getSearchFromQueryParams(props = this.props) {
        return props.location.search.split('=')[1];
      }

      handleViewDetailProductSearch = (ProductID) => {
        console.log("ID sản phẩm");

        this.props.history.push(`/chi-tiet-do/${ProductID}`);
    };
    

    render() {
        return (

           <Fragment>
            <HomeHeader />
                <div className='section-homepage'>
                    <div className='section-container'>
                        <div className='section-content'>
                            <div className='section-header header-position search-header'>
                                <span className='title-section'>Tìm kiếm</span>
                                <h5 className='sub-title'>Có <span>{this.state.images.length}</span> sản phẩm cho tìm kiếm</h5>
                            </div>
                            <div className='section-body'>
                            {this.state.images.map((image, index) => (
                                <div className='col-3 product' onClick={() => this.handleViewDetailProductSearch(image.ProductID)}>

                                    <div  className='search-product'>
                                    <img key={image.ImageID} src={image.ImageLink}  alt={`Image ${image.ImageID}`} style={{ width: '100%', height: 'auto' }} />
                                        <div className='product-discount'>
                                            <span>-6%</span>
                                        </div>
                                    </div>
                                    <div className='product-detail text-center'>
                                        <div className='product-name'>{image.ProductName} </div>
                                        <div className='product-price'>
                                        <span>{image.ProductPrice}</span>
                                            <del>190,000₫</del>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
