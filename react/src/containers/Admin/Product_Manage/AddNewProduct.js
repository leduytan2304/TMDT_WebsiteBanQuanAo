import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { Multiselect } from "multiselect-react-dropdown";

import '../ModalAdmin.scss';
import './AddNewProduct.scss';

class AddNewProduct extends Component {


    constructor(props) {
        super(props);
        this.state = {
          plainArray: ["Đỏ", "Cam", "Vàng", "Lục", "Lam", "Chàm", "Tím"],
          inputList: [],
          addNewColor: false,
          selectedColors: [],
        };
    }

    handleColorSelect = (selectedList, selectedItem) => {
        this.setState({
          selectedColors: selectedList,
        });
    
        console.log("Selected Colors:", selectedList);
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
                            <div className='product-color'>
                                <Form.Label>Màu sắc:</Form.Label>
                                <div className='product-title'>
                                    <div className='select-color-product'>
                                        <Form.Label>Chọn màu:</Form.Label>
                                        <div className='multi-select'>
                                            {/* <Multiselect showArrow options={this.state.plainArray} isObject={false} /> */}
                                            <Multiselect
                                                showArrow
                                                options={this.state.plainArray}
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