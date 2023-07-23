import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class Sales_Statistics extends Component {

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
                <div className="text-center" >Thống kê doanh số bán hàng</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sales_Statistics);
