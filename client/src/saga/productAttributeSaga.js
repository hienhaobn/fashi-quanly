import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../action/actionType';
import axios from 'axios';
import domain from './domain';

import data from '../reducer/data.fake/productAttribute';

function* getProductAttribute() {
    // const productAttributes = data;
    const productAttributes = yield axios.get(`${domain}/productAttribute`).then(res => res.data).catch(err => console.log(err));
    yield put({ type: actionType.GET_PRODUCT_ATTRIBUTES_SUCCESS, productAttributes })
}

export function* getListProductAttributeWatcher() {
    yield takeEvery(actionType.GET_PRODUCT_ATTRIBUTES, getProductAttribute);
}

// cap nhat product attribute cua 1 sp
function* updateProductAttributes(action) {
    const {productAttributes} = action;
    // ban action cap nhat product attributes
}

export function* updateProductAttributesWatcher() {
    yield takeEvery(actionType.UPDATE_PRODUCT_ATTRIBUTES, updateProductAttributes);
}