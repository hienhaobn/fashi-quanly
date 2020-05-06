import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../action/actionType';

import data from '../reducer/data.fake/price';

function* getListPrice() {
    const prices = data;
    yield put({ type: actionType.GET_PRICES_SUCCESS, prices })
}

export function* getListPriceWatcher() {
    yield takeEvery(actionType.GET_PRICES, getListPrice);
}

// update prices cua 1 sp
function* updatePrices(action) {
    const {prices} = action;
    // ban action update prices
}

export function* updatePricesWatcher() {
    yield takeEvery(actionType.UPDATE_PRICES, updatePrices);
}