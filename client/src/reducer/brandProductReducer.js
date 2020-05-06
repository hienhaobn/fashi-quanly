import * as actionType from '../action/actionType';

const brandProducts = (state = [], action) => {
    switch(action.type) {
        case actionType.GET_BRAND_PRODUCTS_SUCCESS:
            return action.brandProducts;
        default:
            return state;
    }
}

export default brandProducts;