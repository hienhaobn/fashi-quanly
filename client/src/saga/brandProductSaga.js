import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../action/actionType';
import axios from 'axios';
import domain from './domain';

import data from '../reducer/data.fake/brandProduct';

function* getListBrandProduct() {
    // const brandProducts = data;
    const brandProducts = yield axios.get(`${domain}/productBrand`).then(res => res.data).catch(err => console.log(err));
    yield put({ type: actionType.GET_BRAND_PRODUCTS_SUCCESS, brandProducts });
}

export function* getListBrandProductWatcher() {
    yield takeEvery(actionType.GET_BRAND_PRODUCTS, getListBrandProduct);
}