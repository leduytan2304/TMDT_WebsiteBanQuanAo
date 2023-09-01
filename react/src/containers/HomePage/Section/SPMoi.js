import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { withRouter } from "react-router-dom";
import './ProductSection.scss';
// import { getListProduct } from "../../../services/productApi";
// import axios from "axios";


class SPMoi extends Component {

    // handleViewDetailProduct = (product) => {
    //     console.log("Info: ", product);
    //     this.props.history.push(`/products/${product.id}`)
    // }

    handleViewDetailProduct = () => {
        console.log("ID sản phẩm");
        this.props.history.push(`/products/:1`);
    };

    // listProduct = useSelector(
    //     (state) => state.product.products?.allProduct
    //   );
    
    // const dispatch = useDispatch();
    
    //   useEffect(() => {
    //     getListProduct(dispatch);
    //   }, []);

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         arrProducts: []
    //     };
    // }

    // async componentDidMount() {
    //     let response = await axios.get(`http://localhost:8000/api/v1/products`);
    //     if (response && response.errCode === 0){
    //         this.setState({
    //             arrProducts: response.data
    //         });
    //     }
    //     console.log(response)
    // }

    render() {
        return (
            <div>
                <div className='section-homepage'>
                    <div className='section-container'>
                        <div className='section-content'>
                            <div className='section-header'>
                                <span className='title-section'>Sản phẩm mới</span>
                            </div>
                            <div className='section-body'>
                                {/* onClick={() => this.handleViewDetailProduct(item)} */}
                                <div className='col-3 product' onClick={() => this.handleViewDetailProduct()}>
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
                                <div className='col-3 product'>
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
                                <div className='col-3 product'>
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
                                <div className='col-3 product'>
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
                                <div className='col-3 product'>
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
                                <div className='col-3 product'>
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
                                <div className='col-3 product'>
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
                                <div className='col-3 product'>
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
                            <div className='spmoi-home-footer'>
                                <Link to ='/san-pham-moi'>
                                    <button className='btn-section'>XEM THÊM</button>
                                </Link>
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

//không sửa dòng này, làm ơn :V
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SPMoi));
