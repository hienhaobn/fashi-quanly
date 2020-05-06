import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../action/actionType';

import data from '../reducer/data.fake/order';

function* getOrders(action) {
    const orders = data;
    yield put({ type: actionType.GET_ORDERS_SUCCESS, orders });
}

export function* getOrdersWatcher() {
    yield takeEvery(actionType.GET_ORDERS, getOrders);
}