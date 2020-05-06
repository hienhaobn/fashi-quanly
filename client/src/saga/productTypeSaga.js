import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../action/actionType';
import axios from 'axios';
import domain from './domain';

import data from '../reducer/data.fake/productType';

function* getListProductType(action) {
    // const productTypes = data;
    const productTypes = yield axios.get(`${domain}/productType`).then(res => res.data).catch(err => console.log(err));
    yield put({ type: actionType.GET_PRODUCT_TYPES_SUCCESS, productTypes});
}

export function* getListProductTypeWatcher() {
    yield takeEvery(actionType.GET_PRODUCT_TYPES, getListProductType);
}