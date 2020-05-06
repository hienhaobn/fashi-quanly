import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../action/actionType';

import data from '../reducer/data.fake/orderItem';

function* getOrderItems(action) {
    const orderItems = data;
    yield put({ type: actionType.GET_ORDER_ITEMS_SUCCESS, orderItems });
}

export function* getOrderItemsWatcher() {
    yield takeEvery(actionType.GET_ORDER_ITEMS, getOrderItems);
}