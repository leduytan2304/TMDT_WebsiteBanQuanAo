import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './ModalAdmin.scss';

class Delete extends Component {


    // handleClose = () => {
    //     this.setState({ show: false});
    // }

    // handleShow = () => {
    //     this.setState({ show: true});
    // }
    render() {
        const { show, handleClose, handleConfirm, handleShow } = this.props;
        return (
            <>
                {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button> */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Xóa danh mục</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Bạn muốn xóa danh mục này??</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Thoát
                    </Button>
                    <Button variant="primary" onClick={handleConfirm}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Delete);