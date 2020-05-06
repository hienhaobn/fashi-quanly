import * as actionType from '../action/actionType';

const prices = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_PRICES_SUCCESS:
            return action.prices;
        case actionType.UPDATE_PRICES:
            const {prices} = action;
            const productId = prices[0].product_id;
            const data = [...state.filter(item => item.product_id !== productId), ...prices];
            return data;
        default:
            return state;
    }
}

export default prices;