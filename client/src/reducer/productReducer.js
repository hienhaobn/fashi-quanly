import * as actionType from '../action/actionType';

const products = (state = [], action) => {
    switch(action.type) {
        case actionType.CREATE_PRODUCT_SUCCESS:
            const newData = [...state];
            newData.unshift(action.product);
            return newData;
        case actionType.GET_PRODUCTS_SUCCESS:
            return [...action.products];
        case actionType.DELETE_PRODUCT:
            const {productId} = action;
            return [...state.filter(item => item._id !== productId)];
        case actionType.UPDATE_PRODUCT_SUCCESS:
            const {product} = action;
            const newProducts = [...state];
            debugger;
            const index = newProducts.map(item => item._id).indexOf(product._id);
            newProducts[index] = product;
            return newProducts;
        default:
            return state;
    }
};

export default products;