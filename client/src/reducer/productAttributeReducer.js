import * as actionType from '../action/actionType';

const productAttributes = (state = [], action) => {
    switch(action.type) {
        case actionType.GET_PRODUCT_ATTRIBUTES_SUCCESS:
            return action.productAttributes;
        case actionType.UPDATE_PRODUCT_ATTRIBUTES:
            const {productAttributes} = action;
            const data = [...state];
            productAttributes.map(item => {
                const index = data.map(value => value.id).indexOf(item.id);
                data[index] = item;
            });
            return data;
        case actionType.CREATE_PRODUCT_ATTRIBUTES_SUCCESS:
            const newData = [...state];
            action.productAttributes.map(item => newData.push(item));
            return newData;
        default:
            return state;
    }
}

export default productAttributes;