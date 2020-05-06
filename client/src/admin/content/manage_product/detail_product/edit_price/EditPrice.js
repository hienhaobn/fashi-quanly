import React, {Component} from 'react';
import {Drawer, Button, message} from 'antd';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

// Component
import TableEditPrice from './TableEditPrice';

// action
import {updatePrices} from '../../../../../action/action';

class EditPrice extends Component {

    render() {
        const {childrenDrawer, onChildrenDrawerClose, prices, setPriceProduct} = this.props;
        return (
            <Drawer
                title="Chi tiết cài đặt giá sản phẩm"
                width={720}
                onClose={onChildrenDrawerClose}
                visible={childrenDrawer}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <TableEditPrice prices={prices} setPriceProduct={setPriceProduct}/>
            </Drawer>
        );
    }
}

EditPrice.propTypes = {
    childrenDrawer: PropTypes.bool,
    onChildrenDrawerClose: PropTypes.func,
    updatePrices: PropTypes.func,
    setPriceProduct: PropTypes.func,
    prices: PropTypes.array,
}

function mapDispatchToProps(dispatch) {
    return {
        updatePrices: (prices) => dispatch(updatePrices(prices)),
    };
};


export default connect(null, mapDispatchToProps)(EditPrice);
