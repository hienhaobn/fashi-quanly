import * as actionType from '../action/actionType';

const productTypes = (state = [], action) => {
    switch(action.type) {
        case actionType.GET_PRODUCT_TYPES_SUCCESS:
            return action.productTypes;
        default:
            return state;
    }
}

export default productTypes;