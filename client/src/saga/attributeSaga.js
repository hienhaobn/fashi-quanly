import { takeEvery, put } from 'redux-saga/effects';
import * as actionType from '../action/actionType';
import axios from 'axios';
import domain from './domain';

import data from '../reducer/data.fake/attribute';

function* getListAttribute() {
    // const attributes = data;
    const attributes = yield axios.get(`${domain}/attribute`).then(res => res.data).catch(err => console.log(err));
    yield put({ type: actionType.GET_ATTRIBUTES_SUCCESS, attributes });
}

export function* getListAttributeWatcher() {
    yield takeEvery(actionType.GET_ATTRIBUTES, getListAttribute);
}