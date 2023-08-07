import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class Catalog_Manage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div>
                <div className="text-center" >Quản lý danh mục</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog_Manage);
