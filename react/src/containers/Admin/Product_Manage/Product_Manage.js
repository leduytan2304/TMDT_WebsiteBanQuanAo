import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import '../admin.scss';
// import '../Delete_Product.scss';
import HomeFooter from '../../HomePage/HomeFooter';

import AddNewProduct from './AddNewProduct';
import DetailProductAdmin from './DetailProductAdmin';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import '../ModalAdmin.scss';
import axios from 'axios';

class Product_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddNewProduct: false,
            showDetailProduct: false,
            showDeleteProduct: false,
            selectedProduct: null,
            selectedDeleteProduct: null,
            products: new Array(10).fill(null).map((_, index) => ({
                id: index,
                name: 'Product ' + index,
                price: '190,000₫',
                discountedPrice: '179,000₫',
                discount: '-6%',
            })),
            images: [],
        }
    }

    componentDidMount(req,res,url){
        
        axios.get(`http://localhost:8000/api/image/do`)
          .then(res => {
            const images = res.data;
            this.setState({ images });
          })
          .catch(error => console.log(error));
    };

    handleCloseAddNewProduct = () => {
        this.setState({ showAddNewProduct: false});
    }

    handleConfirmAddNewProduct = () => {
        this.setState({ showAddNewProduct: false});
    }

    handleShowAddNewProduct = () => {
        this.setState({ showAddNewProduct: true});
    }


    handleCloseDetailProduct = () => {
        this.setState({ showDetailProduct: false});
    }

    handleConfirmDetailProduct = () => {
        this.setState({ showDetailProduct: false});
    }

    handleShowDetailProduct = (id) => {
        this.setState({
            showDetailProduct: true,
            selectedProduct: id,
        })
    }


    handleCloseDeleteProduct = () => {
        this.setState({ showDeleteProduct: false});
    }

    handleShowDeleteProduct = (id, e) => {
        e.stopPropagation();
        this.setState({
            showDeleteProduct: true,
            selectedDeleteProduct: id,
        });
    }

    deleteProduct = (id, e) => {
        e.stopPropagation();
        console.log("Xóa vị trí: ", id)
        const updatedProductList = this.state.products.filter((product) => product.id !== id);;

        this.setState({
            showDeleteProduct: false,
            showDetailProduct: false,
            selectedProduct: null,
            products: updatedProductList, 
        }, () => {
            console.log("Danh sách sản phẩm mới: ", this.state.products);
        });
    }


    render() {


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

                                {this.state.images.map(image => (
                                    <div className='admin-product' 
                                         key={image.ImageID}
                                         onClick={() => this.handleShowDetailProduct(image.ImageID)}>
                                            
                                        {/* <div className='admin-product-img'> */}

                                        {/* <img key={image.ImageID} src={image.ImageLink}  alt={`Image ${image.ImageID}`} style={{ width: '100%', height: 'auto' }} /> */}

                                            {/* <div className="img-overlay">
                                                <i class="far fa-times-circle" 
                                                   onClick={(e) => this.handleShowDeleteProduct(image.ImageID, e)}>
                                                </i>
                                            </div> */}

                                            <div className='bg-image'>
                                                <img key={image.ImageID} src={image.ImageLink}  alt={`Image ${image.ImageID}`} style={{ width: '100%', height: 'auto' }} />
                                                <div className='product-discount'>
                                                    <span>6</span>
                                                </div>
                                            </div>

                                            <div className='product-detail text-center'>
                                                
                                                <div className='product-name'>{image.ProductName}</div>
                                                <div className='product-price'>
                                                    <span>0</span>
                                                    <del>{image.ProductPrice}</del>
                                                </div>
                                            </div>
                                        {/* </div> */}
                                    </div>
                                ))}

                            </div>

                            {this.state.showAddNewProduct && (
                            <AddNewProduct show = {this.state.showAddNewProduct} 
                                            handleClose = {this.handleCloseAddNewProduct} 
                                            handleConfirm = {this.handleConfirmAddNewProduct}
                                            handleShow = {this.handleShowAddNewProduct}/>
                            )} 
                            {this.state.showDetailProduct && (
                            <DetailProductAdmin show = {this.state.showDetailProduct}   
                                                id = {this.state.selectedProduct}
                                                handleClose = {this.handleCloseDetailProduct} 
                                                handleConfirm = {this.handleConfirmDetailProduct}
                                                handleShow = {this.handleShowDetailProduct}/>
                            )}
                            {this.state.showDeleteProduct && (
                                <Modal show={this.state.showDeleteProduct} onHide={this.handleCloseDeleteProduct}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Xóa sản phẩm</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Bạn muốn xóa sản phẩm {this.state.selectedDeleteProduct} ??</Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleCloseDeleteProduct}>
                                        Thoát
                                    </Button>
                                    <Button variant="primary" 
                                            onClick={(e) => this.deleteProduct(this.state.selectedDeleteProduct,e)}>
                                        Xác nhận
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
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
