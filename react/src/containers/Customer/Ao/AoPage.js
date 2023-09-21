import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
// import SieuSale from './Section/SieuSale';
// import SPMoi from './Section/SPMoi';
import { withRouter } from "react-router-dom";
import HomeFooter from '../../HomePage/HomeFooter';
import '../../HomePage/HomePage.scss';
import '../Page.scss';
import axios from 'axios';


class AoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            data: [],
            sortType: ''
        };
      }

    fetchData() {
        axios.get('https://react-crud-kc0l.onrender.com/api/image/ao')
          .then(res => {
            const images = res.data;
            this.setState({ images }, () => {
              this.sortArray(this.state.sortType);
            });
          })
          .catch(error => console.log(error));
      }
    
    sortArray(type) {
        const {images} = this.state;

        const types = {
            priceAsc: 'ProductPrice',
            priceDesc: 'ProductPrice',
            alphabetAsc: 'ProductName',
            alphabetDesc: 'ProductName',
        };

        const sortProperty = types[type];
        const sorted = [...images]

        if (type === 'priceAsc' || type === 'alphabetAsc'){
            sorted.sort((a, b) => {
                if (sortProperty === 'ProductName') {
                    return a[sortProperty].localeCompare(b[sortProperty]);
                    } else {
                    return a[sortProperty] - b[sortProperty];
                    }
                });

        } else if (type === 'priceDesc' || type === 'alphabetDesc'){
            sorted.sort((a, b) => {
                if (sortProperty === 'ProductName') {
                    return b[sortProperty].localeCompare(a[sortProperty]);
                    } else {
                    return b[sortProperty] - a[sortProperty];
                    }
                });
            }
        this.setState({ data: sorted });
    }
    
    handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        this.setState({ sortType: selectedValue }, () => {
            this.sortArray(selectedValue); 
        });
    };

    componentDidMount() {
        this.fetchData(); 
    }

    handleViewDetailCloth = (ProductID) => {
        // console.log("ID sản phẩm",params.slug);
        console.log(ProductID);
        
        this.props.history.push(`/chi-tiet-do/${ProductID}`);
    };

    render() {
        console.log(this.state.images)
        return (
            <div>
                <HomeHeader />
                <div className='section-homepage sieusale-frame'>
                    <div className='section-container'>
                        <div className='section-content'>
                            <div className='section-header header-position'>
                                <span className='title-section'>Áo</span>
                                <div className='col-3 browse-tags'>
                                <span className='dropdown'>
                                    <select onChange={this.handleSelectChange} value={this.state.sortType} className='sort'>
                                        <option value="manual">Sản phẩm nổi bật</option>
                                        <option value="priceAsc" >Giá: Tăng dần</option>
                                        <option value="priceDesc" >Giá: Giảm dần</option>
                                        <option value="alphabetAsc" >Tên: A-Z</option>
                                        <option value="alphabetDesc" >Tên: Z-A</option>
                                        <option value="created-descending" data-filter = "sortby = (updated_at:product=asc)">Mới nhất</option>
                                        <option value="created-ascending" data-filter = "sortby = (updated_at:product=desc)">Cũ nhất</option>
                                        <option value="best-selling" data-filter = "sortby = (sold_quantity:product=desc)">Bán chạy nhất</option>
                                    </select>
                                </span> 
                                </div>
                            </div>
                            <div className='section-body'>

                                    {this.state.data.map(dataa => (
                                        <div className='col-3 product' onClick={() => this.handleViewDetailCloth(dataa.ProductID)}>
                                            <a href=''>
                                                <div className='ao-product img-setting'>
                                                    <img key={dataa.ImageID} src={dataa.ImageLink}  style={{ width: '100%', height: 'auto' }} />
                                                    <img src={`data:image/jpeg;base64,${dataa.ImageLink}`} style={{ width: '100%', height: 'auto' }}  />
                                                    <div className='product-discount'>
                                                        <span>-6%</span>
                                                    </div>
                                                </div>
                                                <div className='product-detail text-center'>
                                                    <div className='product-name'>{dataa.ProductName} </div>
                                                    <div className='product-price'>
                                                        <span>{dataa.ProductPrice}</span>
                                                        <del>190,000₫</del>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        
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
