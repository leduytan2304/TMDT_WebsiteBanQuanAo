import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Slider from 'react-slick';
// Import css files:
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import '../ModalAdmin.scss';

// import '../../HomePage/HomeFooter';
import '../admin.scss';
// import '../Delete_Product.scss';
import HomeFooter from '../../HomePage/HomeFooter';

import AddCatalog from './AddCatalog';
// import Delete from '../Delete';
import EditCatalog from './EditCatalog';
import AddProduct_Catalog from './AddProduct_Catalog';

import DetailProductAdmin from '../Product_Manage/DetailProductAdmin';
import axios from 'axios';


class Catalog_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryID: null,
            selectedCategoryName: null,
            showDelete: false,
            showAdd: false,
            showEdit: false,
            showAddProduct: false,
            showDetailProduct: false,
            selectedProduct: null,
            showDeleteProduct: false,
            selectedDeleteProduct: null,
            products: [],
        }
    }

    handleCategoryClick = (categoryId, categoryName, categoryName2) => {
        this.setState((prevState) => ({
            selectedCategoryID: prevState.selectedCategoryID === categoryId ? null : categoryId,
        }));

        axios.get(`http://localhost:8000/api/image/${categoryName2}`)
          .then(res => {
            const products = res.data;
            this.setState({ products });
          })
          .catch(error => console.log(error));

        console.log("Loại",categoryName);
    };


    //Những cửa sổ cho thêm danh mục
    handleCloseAdd = () => {
        this.setState({ showAdd: false});
    }

    handleConfirmAdd = () => {
        this.setState({ showAdd: false});
        alert('Thêm danh mục')
    }

    handleShowAdd = () => {
        this.setState({ showAdd: true});
    }


    //Những cửa sổ cho sửa danh mục
    handleCloseEdit = () => {
        this.setState({ showEdit: false});
    }

    handleConfirmEdit = () => {
        this.setState({ showEdit: false});
        alert('Sửa danh mục')
    }

    handleShowEdit = (categoryName) => {
        this.setState({ 
            showEdit: true,
            selectedCategoryName:categoryName
        });
        console.log(categoryName, "show edit" );
    }

    //Những cửa sổ cho thêm sản phẩm vào danh mục
    handleCloseAddPro = () => {
        this.setState({ showAddProduct: false});
    }

    handleConfirmAddPro = () => {
        this.setState({ showAddProduct: false});
        // alert('Thêm sản phẩm vào danh mục')
    }

    handleShowAddPro = (categoryName) => {
        this.setState({ 
            showAddProduct: true,
            selectedCategoryName:categoryName
        });
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

    componentDidMount(){
        

          
    };
 

    
    render() {
        const categories = [
            { id: 1, name: 'Sản phẩm mới', name2: 'spm' },
            { id: 2, name: 'Siêu Sale' , name2: 'ss'},
            { id: 3, name: 'Áo' , name2: 'ao'},
            { id: 4, name: 'Quần' , name2: 'quan'},
            // ... Add more categories
        ];


        const { selectedCategoryID } = this.state;


        let settings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <React.Fragment>
                <div className='admin-container catalog-frame'>
                    <div className='admin-content'>
                        <div className='admin-header'>
                            <span>Danh mục: </span>
                            <i className="fas fa-plus-circle" onClick={() => this.handleShowAdd()}></i>
                        </div>
                        <div className='catalog-dropdown'>
                            <ul>
                                {categories.map((category) => (
                                    <li key={category.id}
                                        style={{ cursor: 'pointer' }} >
                                        <div className='catalog-content'>
                                            {category.name}
                                            <div className='icon-action'>
                                                {/* <i class="far fa-times-circle" 
                                                   onClick={() => this.handleShowDelete(category.name)}></i> */}
                                                <i class="fas fa-edit"
                                                   onClick={() => this.handleShowEdit(category.name)}></i>
                                                <i class="fas fa-caret-down" 
                                                   onClick={() => this.handleCategoryClick(category.id, category.name, category.name2)}>
                                                </i>
                                            </div>
                                        </div>
                                        {selectedCategoryID === category.id && (
                                            // <ul>
                                            //     {products[selectedCategoryID].map((product) => (
                                            //         <li key={product.id}>{product.name}</li>
                                            //     ))}
                                            // </ul>
                                            <Slider {...settings}>
                                                {this.state.products.map((product) => (
                                                    <div className='slider-customize' 
                                                         key={product.id}
                                                         onClick={() => this.handleShowDetailProduct(product.id)}>
                                                        <img src= {product.ImageLink}  />
                                                        <div className='bg-image'>
                                                            
                                                            <div className='product-discount'>
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className='product-detail text-center'>
                                                            <div className='product-name'>{product.ProductName}</div>
                                                            <div className='product-price'>
                                                                <span>{product.ProductPrice}</span>
                                                                <del>199.000vnđ</del>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className='slider-customize add-catalog'>
                                                    {/* <img src= {sieusaleImg} />  */}
                                                    <div className='add-image' 
                                                        onClick={() => this.handleShowAddPro(category.name)}>

                                                    </div>
                                                </div>
                                            </Slider>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
 
                        {this.state.showAdd && (
                            <AddCatalog show = {this.state.showAdd} 
                                        handleClose = {this.handleCloseAdd} 
                                        handleConfirm = {this.handleConfirmAdd}
                                        handleShow = {this.handleShowAdd}/>
                        )} 
                        {this.state.showEdit && (
                            <EditCatalog show = {this.state.showEdit}
                                         oldname = {this.state.selectedCategoryName}
                                         handleClose = {this.handleCloseEdit} 
                                         handleConfirm = {this.handleConfirmEdit}
                                         handleShow = {this.handleShowEdit}/>
                        )} 
                        {this.state.showAddProduct && (
                            <AddProduct_Catalog  show = {this.state.showAddProduct}
                                        name = {this.state.selectedCategoryName}
                                        handleClose = {this.handleCloseAddPro}
                                        handleConfirm = {this.handleConfirmAddPro} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog_Manage);
