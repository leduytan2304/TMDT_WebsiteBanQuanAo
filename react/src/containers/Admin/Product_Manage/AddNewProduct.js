import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

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
            isSaveSuccessful: false,
            colorArray: ["Đỏ", "Cam", "Vàng", "Lục", "Lam", "Chàm", "Tím"],
            sizeArray: ["XS", "S", "M", "L", "XL", "XXL"],
            
            id_product: '',
            product_name: '',


            selectedCatalog: '',

            inputList: [],
            addNewColor: false,
            selectedColors: [],

            selectedSize: [],

            previewImgURL: [],
            isOpen: false,
            photoIndex: '',

            contentMarkdown: '',
            contentHTML: '',

            discount: '',

            price: '',
        };
    }

    // bắt sự kiện thay đôi trong input mã sản phẩm
    handleChangeIDProduct = (event) => {
        this.setState({
            id_product: event.target.value,
        })
    }

    // bắt sự kiện thay đổi trong input tên sản phẩm
    handleChangeProductName = (event) => {
        this.setState({
            product_name: event.target.value,
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
        // console.log("inputList", inputList[0].color_product)
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

    // bắt sự kiện thay đổi ảnh
    handleOnChangeIMG = (event) => {
        let data = event.target.files;
        // let file = data[0];
        let files = Array.from(data);

        let objectUrls = files.map(file => URL.createObjectURL(file));
        this.setState(prevState => ({
            previewImgURL: prevState.previewImgURL.concat(objectUrls),
        }));
    }

    // dùng để lưu vị trí ảnh muốn phóng to. Ctrl F tìm kiếm Lightbox để xem thêm
    openPreviewIMG = (index) => {
        this.setState({
            isOpen: true,
            photoIndex: index,
        })
    }

    // xóa ảnh đã chọn. Di chuột vào ảnh sẽ hiện ra icon, nhấn xóa
    deletePreviewIMG = (index, e) => {
        e.stopPropagation();
        const updatedPreviewImgURL = [...this.state.previewImgURL];
        updatedPreviewImgURL.splice(index, 1);

        this.setState({
            isOpen: false,
            photoIndex: '',
            previewImgURL: updatedPreviewImgURL, 
        });

        alert("Xóa");
    }

    // in ra console những thứ trong markdown
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    // lưu các thông tin vào state
    handleSave = () => {
        const { inputList, selectedColors,id_product,product_name,selectedCatalog,
            previewImgURL,selectedSize,discount,price} = this.state;
        const colorsToAdd = inputList.map(item => item.color_product);
        const allColors = selectedColors.concat(colorsToAdd);

        if (!id_product || !product_name || !selectedCatalog || !previewImgURL || !selectedColors
            || !selectedSize || !discount || !price) {
                toast.error('Chưa nhập đủ thông tin', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 4000,
                })
        }
        else {
            this.setState({
                selectedColors: allColors,
                isSaveSuccessful: true,
            }, () => {
                console.log("ID:", this.state.id_product,
                            "Tên:", this.state.product_name,
                            "Danh mục:", this.state.selectedCatalog.label,
                            "Mardown:", this.state.contentMarkdown,
                            "HTML:", this.state.contentHTML,
                            "Ảnh:", this.state.previewImgURL,
                            "Màu:", this.state.selectedColors,
                            "Size:", this.state.selectedSize,
                            "Giảm giá:", this.state.discount,
                            "Giá bán:", this.state.price);
            });
        }
    }

    // bắt sự kiện chọn danh mục
    handleChangeCatalog = (selectedCatalog) => {
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
                                <Form.Label>Mã sản phẩm:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Mã sản phẩm"
                                    onChange={(event) => this.handleChangeIDProduct(event)}
                                    autoFocus
                                />
                            </div>
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
                                <div className='select-input'>
                                
                                    <div className='input-img'>
                                        <div className='preview-img'>
                                            {this.state.previewImgURL.map((url, index) => (
                                                <div
                                                    key={index}
                                                    className='preview-img-item'
                                                    style={{ backgroundImage: `url(${url})` }}
                                                    onClick={() => this.openPreviewIMG(index)}
                                                >
                                                    <div className="img-overlay">
                                                        <i class="far fa-times-circle" 
                                                            onChange={(event) => this.handleOnChangeIMG(event)}
                                                            onClick={(e) => this.deletePreviewIMG(index,e)}>
                                                        </i>
                                                    </div>
                                                </div>
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
                        await this.handleSave()
                        if (this.state.isSaveSuccessful){
                            handleConfirm();
                        }
                    }}>
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