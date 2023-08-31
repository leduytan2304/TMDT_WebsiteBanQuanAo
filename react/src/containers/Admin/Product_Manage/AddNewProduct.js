import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Multiselect } from "multiselect-react-dropdown";

import '../ModalAdmin.scss';
import './AddNewProduct.scss';


class AddNewProduct extends Component {


    constructor(props) {
        super(props);
        this.state = {
          colorArray: ["Đỏ", "Cam", "Vàng", "Lục", "Lam", "Chàm", "Tím"],
          sizeArray: ["XS", "S", "M", "L", "XL", "XXL"],
          inputList: [],
          addNewColor: false,
          selectedColors: [],
          selectedSize: [],
          previewImgURL: [],
          isOpen: false,
          photoIndex: '',
        };
    }

    handleColorSelect = (selectedList, selectedItem) => {
        this.setState({
          selectedColors: selectedList,
        });
    
        console.log("Selected Colors:", selectedList);
    };

    handleSizeSelect = (selectedList, selectedItem) => {
        this.setState({
          selectedSize: selectedList,
        });
    
        console.log("Selected Size:", selectedList);
    };

    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const { inputList } = this.state;
        const list = [...inputList];
        list[index][name] = value;
        this.setState({
          inputList: list,
        });
        console.log("inputList", inputList)
    };

    handleRemoveClick = (index) => {
        const { inputList } = this.state;
        const list = [...inputList];
        if (this.state.inputList.length === 0) {
            this.setState({
                addNewColor: false,
            })
            return;
        }
        list.splice(index, 1);
        this.setState({
          inputList: list,
        });
        
        console.log(this.state.inputList.length)
    };

    handleAddClick = () => {    
        const { inputList } = this.state;
        this.setState({
            addNewColor: true,
        })
        this.setState({
          inputList: [...inputList, { color_product: ""}],
        });
    };

    handleOnChangeIMG = (event) => {
        let data = event.target.files;
        // let file = data[0];
        let files = Array.from(data);

        let objectUrls = files.map(file => URL.createObjectURL(file));
        this.setState(prevState => ({
            previewImgURL: prevState.previewImgURL.concat(objectUrls),
        }));

        // if (files) {
        //     // let objectUrl = URL.createObjectURL(file);
        //     let objectUrls = files.map(file => URL.createObjectURL(file));
        //     this.setState({
        //         previewImgURL: objectUrls
        //     })
        // }
    }

    openPreviewIMG = (index) => {
        this.setState({
            isOpen: true,
            photoIndex: index,
        })
    }


    render() {
        const { show, handleClose, handleConfirm, handleShow } = this.props;

        return (
            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}

                <Modal className='modal-window' show={show} size='xl' onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm mới sản phẩm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <div className='product-title'>
                                <Form.Label>Mã sản phẩm:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Mã sản phẩm"
                                    autoFocus
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Tên sản phẩm:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên sản phẩm"
                                    autoFocus
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Danh mục:</Form.Label>
                                <div className='select-input'>
                                    <span className='dropdown'>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>--Danh mục--</option>
                                            <option value="1">Sản phẩm mới</option>
                                            <option value="2">Siêu Sale</option>
                                            <option value="3">Áo</option>
                                            <option value="3">Quần</option>
                                        </select>
                                    </span> 
                                </div>
                            </div>
                            <div className='product-title'>
                                <Form.Label>Hình ảnh:</Form.Label>
                                <div className='select-input'>
                                
                                    <div className='input-img'>
                                        <div className='preview-img'>
                                            {this.state.previewImgURL.map((url, index) => (
                                                <div
                                                    key={index}
                                                    className='preview-img-item'
                                                    style={{ backgroundImage: `url(${url})` }}
                                                    onClick={() => this.openPreviewIMG(index)}
                                                ></div>
                                            ))}
                                        </div>
                                        <input id='add-img' 
                                               type='file' 
                                               hidden 
                                               onChange={(event) => this.handleOnChangeIMG(event)}
                                               multiple/>
                                        <Form.Label className='label-upload' htmlFor='add-img'>Tải ảnh lên 
                                            <i className='fas fa-upload'></i>
                                        </Form.Label>
                                    </div>
                                </div>
                            </div>
                            <div className='product-color-size'>
                                <Form.Label>Màu sắc:</Form.Label>
                                <div className='product-title'>
                                    <div className='select-color-product'>
                                        <Form.Label>Chọn màu:</Form.Label>
                                        <div className='multi-select'>
                                            {/* <Multiselect showArrow options={this.state.colorArray} isObject={false} /> */}
                                            <Multiselect
                                                placeholder='Chọn màu'
                                                showArrow
                                                options={this.state.colorArray}
                                                onSelect={this.handleColorSelect}
                                                onRemove={this.handleColorSelect}
                                                selectedValues={this.state.selectedColors}
                                                isObject={false}
                                            />
                                        </div>
                                    </div>
                                    <div className='add-newcolor-product'>
                                        <Form.Label>Thêm màu:</Form.Label>
                                        <div className='add-color-content'>
                                            {this.state.addNewColor && this.state.inputList.map((singleService, index) => (
                                                <div key={index} className="add-color-name">
                                                    <div className="add-color">
                                                        <input
                                                            name="color_product"
                                                            type="text"
                                                            id="service"
                                                            value={singleService.color_product}
                                                            onChange={(e) => this.handleInputChange(e, index)}
                                                            required
                                                        />
                                                        {this.state.inputList.length !== 0 && (
                                                            <i class="far fa-times-circle" 
                                                                onClick={() => this.handleRemoveClick(index)}></i>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                            <i className="fas fa-plus-circle" onClick={() => this.handleAddClick()}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-color-size'>
                                <Form.Label>Size:</Form.Label>
                                <div className='product-title'>
                                    <div className='select-color-product'>
                                        <Form.Label>Chọn size:</Form.Label>
                                        <div className='multi-select'>
                                            {/* <Multiselect showArrow options={this.state.colorArray} isObject={false} /> */}
                                            <Multiselect
                                                placeholder='Chọn size'
                                                showArrow
                                                options={this.state.sizeArray}
                                                onSelect={this.handleSizeSelect}
                                                onRemove={this.handleSizeSelect}
                                                selectedValues={this.state.selectedSize}
                                                isObject={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-title'>
                                <Form.Label>Giảm giá:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="% Giảm giá"
                                    autoFocus
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Giá bán:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Giá bán (VND)"
                                    autoFocus
                                />
                            </div>
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
                        Lưu
                    </Button>
                    </Modal.Footer>
                </Modal>
                {this.state.isOpen &&
                    <Lightbox
                        mainSrc={this.state.previewImgURL[this.state.photoIndex]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewProduct);