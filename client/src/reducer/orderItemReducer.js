import * as actionType from '../action/actionType';

const orderItems = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_ORDER_ITEMS_SUCCESS:
            return action.orderItems;
        default:
            return state;
    }
}

export default orderItems;