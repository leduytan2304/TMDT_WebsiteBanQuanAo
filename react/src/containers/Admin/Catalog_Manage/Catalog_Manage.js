import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import Slider from 'react-slick';
// Import css files:
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../HomePage/HomeFooter';
import '../admin.scss';
import HomeFooter from '../../HomePage/HomeFooter';

import AddCatalog from './AddCatalog';
import Delete from '../Delete';
import EditCatalog from './EditCatalog';
import AddProduct_Catalog from './AddProduct_Catalog';


class Catalog_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryID: null,
            selectedCategoryName: null,
            showDelete: false,
            showAdd: false,
            showEdit: false,
            showAddProduct: false
        }
    }

    handleCategoryClick = (categoryId, categoryName) => {
        this.setState((prevState) => ({
            selectedCategoryID: prevState.selectedCategoryID === categoryId ? null : categoryId,
        }));
        console.log(categoryName);
    };

    //Những cửa sổ cho xóa danh mục

    handleCloseDelete = () => {
        this.setState({ 
            showDelete: false,
        });
    }

    handleConfirmDelete = () => {
        this.setState({ showDelete: false});
        alert('Xóa danh mục')
    }

    handleShowDelete = (categoryName) => {
        this.setState({ 
            showDelete: true,
            // selectedCategoryID:categoryId,
            selectedCategoryName:categoryName
        }); 
        // console.log(categoryId);
        console.log(categoryName, "show delete" );
    }


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

    
    render() {
        const categories = [
            { id: 1, name: 'Sản phẩm mới' },
            { id: 2, name: 'Siêu Sale' },
            { id: 3, name: 'Áo' },
            { id: 4, name: 'Quần' },
            // ... Add more categories
        ];

        // const products = {
        //     1: [
        //         { id: 101, name: 'Sản phẩm 1' },
        //         { id: 102, name: 'Sản phẩm 2' },
        //         // ... Sản phẩm cho Danh mục 1
        //     ],
        //     2: [
        //         { id: 201, name: 'Sản phẩm 3' },
        //         { id: 202, name: 'Sản phẩm 4' },
        //         // ... Sản phẩm cho Danh mục 2
        //     ],
        //     // ... Add more products for other categories
        // };

        const { selectedCategoryID } = this.state;

        let settings = {
            dots: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <React.Fragment>
                <div className='admin-container'>
                    <div className='admin-content'>
                        <div className='catalog-header'>
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
                                                <i class="far fa-times-circle" 
                                                   onClick={() => this.handleShowDelete(category.name)}></i>
                                                <i class="fas fa-edit"
                                                   onClick={() => this.handleShowEdit(category.name)}></i>
                                                <i class="fas fa-caret-down" 
                                                   onClick={() => this.handleCategoryClick(category.id, category.name)}>
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
                                                <div className='catalog-customize'>
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
                                                <div className='catalog-customize'>
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
                                                <div className='catalog-customize'>
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
                                                <div className='catalog-customize'>
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
                                                <div className='catalog-customize add-catalog'>
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
                        {this.state.showDelete && (
                            <Delete show = {this.state.showDelete} 
                                    handleClose = {this.handleCloseDelete} 
                                    handleConfirm = {this.handleConfirmDelete}
                                    handleShow = {this.handleShowDelete}/>
                        )} 
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
