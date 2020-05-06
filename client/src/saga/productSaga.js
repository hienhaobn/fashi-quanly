import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../action/actionType';
import axios from 'axios';
import domain from './domain';
import {message} from 'antd';

import data from '../reducer/data.fake/product';

// get list product
function* getListProduct(action) {
    // const products = data;
    const products = yield axios.get(`${domain}/product`).then(res => res.data).catch(err => console.log(err));
    yield put({type: actionType.GET_PRODUCTS_SUCCESS, products});
}

export function* getListProductWatcher() {
    yield takeEvery(actionType.GET_PRODUCTS, getListProduct);
}

// delete product
function* deleteProduct(action) {
    const {productId} = action;
    axios.delete(`${domain}/product`, {params: {productId}}).then(res => {
        message.success('Xóa sản phẩm thành công!');
    }).catch(err => console.log(err));
    debugger;
    // bắn api delete product dựa vào product id. rồi tiếp tục xử lý bên reducer.
}

export function* deleteProductWatcher() {
    yield takeEvery(actionType.DELETE_PRODUCT, deleteProduct);
}

// update product
function* updateProduct(action) {
    const {formData, config, data} = action;
    axios.put(`${domain}/product`, formData, config).then(res => {
        message.success('Cập nhật sản phẩm thành công!!!');
    }).catch(err => console.log(err));

    // ban action update product vaf product attributes
    const product = data[0];
    const productAttributes = data[1];
    if(product) {
        yield put({ type: actionType.UPDATE_PRODUCT_SUCCESS, product });
    }
    if(productAttributes) {
        yield put({ type: actionType.UPDATE_PRODUCT_ATTRIBUTES, productAttributes });
    }
}

export function* updateProductWatcher() {
    yield takeEvery(actionType.UPDATE_PRODUCT, updateProduct);
}

// create product
function* createProduct(action) {
    const {formData, config} = action;
    const data = yield axios.post(`${domain}/product`, formData, config)
    .then(res => {
        message.success("Tạo sản phẩm thành công, hãy cài đặt giá cho sản phẩm mới !!!");
        return res.data;
    }).catch(err => console.log(err));
    const {product, productAttributes} = data;
    
    // đúng chỉ bắn action cập nhật reducer khi res success
    yield put({type: actionType.CREATE_PRODUCT_SUCCESS, product});
    yield put({type: actionType.CREATE_PRODUCT_ATTRIBUTES_SUCCESS, productAttributes})
}

export function* createProductWatcher() {
    yield takeEvery(actionType.CREATE_PRODUCT, createProduct);
}