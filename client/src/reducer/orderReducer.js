import * as actionType from '../action/actionType';

const orders = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_ORDERS_SUCCESS:
            return action.orders;
        default:
            return state;
    }
}

export default orders;