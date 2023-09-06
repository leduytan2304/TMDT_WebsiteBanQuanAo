import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Multiselect } from "multiselect-react-dropdown";

import '../ModalAdmin.scss';
import './AddNewProduct.scss';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';

import Select from 'react-select';

const options = [
  { value: '1', label: 'Sản phẩm mới' },
  { value: '2', label: 'Siêu Sale' },
  { value: '3', label: 'Áo' },
  { value: '4', label: 'Quần' },
];

const mdParser = new MarkdownIt(/* Markdown-it options */);



class AddNewProduct extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isSaveSuccessful1: false,
            isSaveSuccessful2: false,
            colorArray: ["Đỏ", "Cam", "Vàng", "Lục", "Lam", "Chàm", "Tím"],
            sizeArray: ["XS", "S", "M", "L", "XL", "XXL"],

            product_name: '',

            product_material: '',

            selectedCatalog: '',

            inputList: [],
            addNewColor: false,
            selectedColors: [],


            selectedSize: [],

            img_link: '',

            contentMarkdown: '',
            contentHTML: '',

            discount: '',

            price: '',
        };
    }


    // bắt sự kiện thay đổi trong input tên sản phẩm
    handleChangeProductName = (event) => {
        this.setState({
            product_name: event.target.value,
        })
    }

    // bắt sự kiện thay đổi trong input chất liệu
    handleChangeProductMaterial = (event) => {
        this.setState({
            product_material: event.target.value,
        })
    }

    // Chọn màu
    handleColorSelect = (selectedList, selectedItem) => {
        this.setState({
            selectedColors: selectedList,
        }, () => {
            console.log("Selected Colors:", this.state.selectedColors);
        });
    };

    // Chọn size
    handleSizeSelect = (selectedList, selectedItem) => {
        this.setState({
            selectedSize: selectedList,
        }, () => {
            console.log("Selected Size:", this.state.selectedSize);
        });
    };

    // thay đổi gì trong ô thêm màu thì in ra console
    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const { inputList } = this.state;
        const list = [...inputList];
        list[index][name] = value;
        this.setState({
          inputList: list,
        });
    };

    // xóa 1 ô thêm màu
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

    // thêm 1 input để thêm màu
    handleAddClick = () => {    
        const { inputList } = this.state;
        this.setState({
            addNewColor: true,
        })
        this.setState({
          inputList: [...inputList, { color_product: ""}],
        });
    };

    // bắt sự kiện thay đổi trong input hình ảnh
    handleChangeIMG = (event) => {
        this.setState({
            img_link: event.target.value,
        })
    }

    // in ra console những thứ trong markdown
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    // lưu các thông tin vào state
    handleSave1 = () => {
        const { inputList, selectedColors,id_product,product_name,selectedCatalog,
            img_link ,selectedSize,discount,price, product_material} = this.state;

        if (!product_name || !product_material || !selectedCatalog || !img_link || selectedColors.length === 0
                || selectedSize.length === 0 || !discount || !price) {
                toast.error('Chưa nhập đủ thông tin', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 4000,
                })
        }
        else {
            this.setState({
                isSaveSuccessful1: true,
            }, () => {
                console.log(
                            "Tên:", this.state.product_name,
                            "Chất liệu:", this.state.product_material,
                            "Mardown:", this.state.contentMarkdown,
                            "HTML:", this.state.contentHTML,
                            "Giảm giá:", this.state.discount,
                            "Giá bán:", this.state.price);
            });
        }
    }
    
    handleSave2 = () => {
        const { inputList, selectedColors,product_name,selectedCatalog,
            img_link,selectedSize,discount,price} = this.state;
        const colorsToAdd = inputList.map(item => item.color_product);
        const allColors = selectedColors.concat(colorsToAdd);

        this.setState({
            selectedColors: allColors,
            isSaveSuccessful2: true,
        }, () => {
            console.log(
                        
                        "Danh mục:", this.state.selectedCatalog.label,
                        "Ảnh:", this.state.img_link,
                        "Màu:", this.state.selectedColors,
                        "Size:", this.state.selectedSize);
        });
    }

    // bắt sự kiện chọn danh mục
    handleChangeCatalog  = (selectedCatalog) => {
        this.setState({ selectedCatalog });
    }

    // bắt sự kiện thay đổi trong input giám giá
    handleChangeDiscount = (event) => {
        this.setState({
            discount: event.target.value,
        })
    }

    // bắt sự kiện thay đổi trong input giá bán
    handleChangePrice = (event) => {
        this.setState({
            price: event.target.value,
        })
    }


    render() {
        const { show, handleClose, handleConfirm, handleShow } = this.props;

        return (
            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}

                <Modal className='modal-window' show={show} size='lg' onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm mới sản phẩm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <div className='product-title'>
                                <Form.Label>Tên sản phẩm:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên sản phẩm"
                                    onChange={(event) => this.handleChangeProductName(event)}
                                    autoFocus
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Chất liệu:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Chất liệu"
                                    onChange={(event) => this.handleChangeProductMaterial(event)}
                                    autoFocus
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Danh mục:</Form.Label>
                                <div className='select-input'>
                                    <Select 
                                        value = {this.state.selectedCatalog}
                                        onChange={this.handleChangeCatalog}

                                        //kéo lên trên cùng để xem options
                                        options={options}
                                        placeholder = {'--Danh mục--'}
                                        name = {"selectedCatalog"}
                                        // className="form-select"
                                    /> 
                                </div>
                            </div>
                            <div className='product-description-edit'>
                                <Form.Label>Mô tả sản phẩm:</Form.Label>
                                <div className='product-title'>
                                    <MdEditor style={{ height: '500px' }} 
                                              renderHTML={text => mdParser.render(text)} 
                                              onChange={({ html, text }) => this.handleEditorChange({ html, text })} />
                                </div>
                            </div>
                            <div className='product-title'>
                                <Form.Label>Hình ảnh:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ảnh"
                                    onChange={(event) => this.handleChangeIMG(event)}
                                    autoFocus
                                />
                            </div>
                            <div className='product-color'>
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
                                                selectedValues={this.state.selectedColors}
                                                onSelect={this.handleColorSelect}
                                                onRemove={this.handleColorSelect}
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
                            <div className='product-size'>
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
                                    onChange={(event) => this.handleChangeDiscount(event)}
                                    autoFocus
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Giá bán:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Giá bán (VND)"
                                    onChange={(event) => this.handleChangePrice(event)}
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
                    <Button variant="primary" onClick={async () => {
                        await this.handleSave1()

                        if (this.state.isSaveSuccessful1){
                            this.handleSave2()
                        }

                        if (this.state.isSaveSuccessful2){
                            handleConfirm();
                        }
                    }}>
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