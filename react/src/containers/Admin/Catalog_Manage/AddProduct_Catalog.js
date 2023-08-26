import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import '../ModalAdmin.scss';
import './AddProduct_Catalog.scss'

class AddProduct_Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // showModal: this.props,
            selectAll: false,
            checkboxes: Array(12).fill(false),
        };
    }

    handleSelectAll = () => {
        const { checkboxes, selectAll } = this.state;
        this.setState({
            selectAll: !selectAll,
            checkboxes: checkboxes.map(() => !selectAll)
        });
    };

    handleCheckboxChange = (index) => {
        const { checkboxes } = this.state;
        checkboxes[index] = !checkboxes[index];
        this.setState({ checkboxes });
    };

    handleConfirm2 = () => {
        this.state.checkboxes.forEach((checked, index) => {
            if (checked) {
                console.log("Mã sản phẩm:", `SP${index + 1}`);
            }
        });
    };


    render() {
        const {show, name, handleClose, handleConfirm } = this.props;
        return (
            <>
                <Modal show={show} size='xl' onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thêm sản phẩm vào danh mục</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='text-center'>
                            Danh mục: 
                            <span className='fw-bold'> {name}</span>
                        </div>
                        <table class="table table-hover text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Mã SP</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Giảm giá</th>
                                    <th scope="col">Giá bán</th>
                                    <th scope="col">
                                        <label>
                                            <input type="checkbox" 
                                                   checked={this.state.selectAll}
                                                   onChange={this.handleSelectAll}/>
                                            <span class="checkbox-custom"></span>
                                        </label>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: 12 }, (_, index) => (
                                    <tr key={index}>
                                        <th scope="row">SP{index + 1}</th>
                                        <td>HIGHCLUB PLANK TEE</td>
                                        <td>37%</td>
                                        <td>
                                            219,000
                                            <span>₫</span>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="checkbox" 
                                                       checked={this.state.checkboxes[index]}
                                                       onChange={() => this.handleCheckboxChange(index)}/>
                                                <span class="checkbox-custom"></span>
                                            </label>
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                    <Button variant="primary" onClick={() => {handleConfirm(); this.handleConfirm2();}}>
                        Xác nhận
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct_Catalog);