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

class DetailProductAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSaveSuccessful: false,
            colorArray: ["Đỏ", "Cam", "Vàng", "Lục", "Lam", "Chàm", "Tím"],
            sizeArray: ["XS", "S", "M", "L", "XL", "XXL"],

            id_product: '',
            product_name: 'Áo khoác',


            selectedCatalog: '3',

            inputList: [],
            addNewColor: false,
            selectedColors: ["Vàng", "Lục"],

            selectedSize: ["S", "M", "L", "XL"],

            previewImgURL: [],
            isOpen: false,
            photoIndex: '',

            contentMarkdown: '',
            contentHTML: '',

            discount: '6%',

            price: '190,000₫',
        };
    }

    
    handleChangeProductName = (event) => {
        this.setState({
            product_name: event.target.value,
        })
    }

    
    handleChangeCatalog  = (selectedOption) => {
        this.setState({ selectedCatalog: selectedOption.value 
        }, () => {
            console.log("Danh mục:", this.state.selectedCatalog); 
        });
    }

    
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }

    
    handleOnChangeIMG = (event) => {
        let data = event.target.files;
        // let file = data[0];
        let files = Array.from(data);

        let objectUrls = files.map(file => URL.createObjectURL(file));
        this.setState(prevState => ({
            previewImgURL: prevState.previewImgURL.concat(objectUrls),
        }));
    }

    
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

    
    openPreviewIMG = (index) => {
        this.setState({
            isOpen: true,
            photoIndex: index,
        })
    }

    
    handleColorSelect = (selectedList, selectedItem) => {
        this.setState({
            selectedColors: selectedList,
        }, () => {
            console.log("Selected Colors:", this.state.selectedColors);
        });
    };

    
    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const { inputList } = this.state;
        const list = [...inputList];
        list[index][name] = value;
        this.setState({
          inputList: list,
        });
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

   
    handleSizeSelect = (selectedList, selectedItem) => {
        this.setState({
            selectedSize: selectedList,
        }, () => {
            console.log("Selected Size:", this.state.selectedSize);
        });
    };

    
    handleChangeDiscount = (event) => {
        this.setState({
            discount: event.target.value,
        })
    }

    
    handleChangePrice = (event) => {
        this.setState({
            price: event.target.value,
        })
    }

    
    handleSave = (id) => {
        const { inputList, selectedColors,id_product,product_name,selectedCatalog,
            previewImgURL,selectedSize,discount,price} = this.state;
        const colorsToAdd = inputList.map(item => item.color_product);
        const allColors = selectedColors.concat(colorsToAdd);

        if (!product_name || !selectedCatalog || previewImgURL.length === 0 || selectedColors.length === 0
            || selectedSize.length === 0 || !discount || !price) {
                toast.error('Chưa nhập đủ thông tin', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 4000,
                })
        }
        else {
            this.setState({
                id_product: id,
                selectedColors: allColors,
                isSaveSuccessful: true,
            }, () => {
                console.log("ID:", this.state.id_product,
                            "Tên:", this.state.product_name,
                            "Danh mục:", options.find(option => option.value === this.state.selectedCatalog),
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
    
    render() {
        // id này là truyền từ bên file Product_Manage qua. Này đang làm giao diện nên làm code thô
        // mốt làm thì kết nối database vào Product_Manage.js rồi lấy mã sản phẩm, rồi truyền qua file này bằng id
        // file này kết nối database rồi dựa vào id đã truyền load thông tin của sản phẩm đó ra
        const { show, id, handleClose, handleConfirm, handleShow } = this.props;
        return (
            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}

                <Modal className='modal-window' show={show} size='lg' onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Chi tiết sản phẩm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <div className='product-title'>
                                <Form.Label>Mã sản phẩm:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Mã sản phẩm" 
                                    value= {id}// truyền mã sản phẩm vào đây
                                    autoFocus   
                                    disabled="true" // để disable tại thấy mã sản phẩm không cần sửa
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Tên sản phẩm:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tên sản phẩm"
                                    onChange={(event) => this.handleChangeProductName(event)}
                                    autoFocus
                                    value= {this.state.product_name}
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Danh mục:</Form.Label>
                                <div className='select-input'>
                                    <Select 
                                        value = {options.find(option => option.value === this.state.selectedCatalog)}
                                        onChange={this.handleChangeCatalog}

                                        //kéo lên trên cùng để xem options. Viết thêm API để load danh mục. Xem thêm video 67
                                        options={options} 
                                        placeholder = {'--Danh mục--'} // truyền danh mục vào đây
                                        name = {"selectedCatalog"}
                                    /> 
                                </div>
                            </div>

                            {/* Cái mô tả sản phẩm này xem thử video 67, 68 xem :v */}
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
                                            {/* thấy chatGPT nói là tải ảnh từ database lên rồi lưu vào previewImgURL trước
                                            sau đấy để cho mấy dòng tiếp theo làm :V */}
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
                                                selectedValues={this.state.selectedColors} // truyền những màu đã có vào đây
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
                                    placeholder="20%"
                                    onChange={(event) => this.handleChangeDiscount(event)}
                                    autoFocus
                                    value= {this.state.discount}
                                />
                            </div>
                            <div className='product-title'>
                                <Form.Label>Giá bán:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="200.000₫"
                                    // onChange={(event) => this.handleChangePrice(event)}
                                    autoFocus
                                    value= {this.state.price}
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
                        await this.handleSave(id)
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailProductAdmin);