import {combineReducers} from 'redux';
import products from './productReducer';
import productTypes from './productTypeReducer';
import productAttributes from './productAttributeReducer';
import prices from './priceReducer';
import brandProducts from './brandProductReducer';
import attributes from './attributeReducer';
import orders from './orderReducer';
import orderItems from './orderItemReducer';

const reducer = combineReducers({
    products,
    productTypes,
    productAttributes,
    attributes,
    brandProducts,
    prices,
    orders,
    orderItems,
});

export default reducer;