import {connect} from 'react-redux';

// Component
import ManagerProduct from './ManagerProduct';

// Action
import {getProducts, getPrices, getAttributes, 
    getBrandProducts, getProductTypes, getProductAttributes} from '../../../action/action';

function mapStateToProps(state) {
    const {products, prices, attributes, brandProducts, productTypes, productAttributes} = state;
    return {
        products,
        prices,
        attributes,
        brandProducts,
        productTypes,
        productAttributes,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        getPrices: () => dispatch(getPrices()),
        getAttributes: () => dispatch(getAttributes()),
        getBrandProducts: () => dispatch(getBrandProducts()),
        getProductTypes: () => dispatch(getProductTypes()),
        getProductAttributes: () => dispatch(getProductAttributes()),
    };
};

const ManagerProductContainer = connect(mapStateToProps, mapDispatchToProps)(ManagerProduct);

export default ManagerProductContainer;