import * as actionType from '../action/actionType';

const attributes = (state = [], action) => {
    switch(action.type) {
        case actionType.GET_ATTRIBUTES_SUCCESS:
            return action.attributes.data;
        default:
            return state;
    }
}

export default attributes;