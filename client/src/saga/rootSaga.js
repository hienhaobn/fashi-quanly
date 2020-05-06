import {all} from 'redux-saga/effects';
import {getListProductWatcher, updateProductWatcher, createProductWatcher, deleteProductWatcher} from './productSaga';
import {getListProductTypeWatcher} from './productTypeSaga';
import {getListProductAttributeWatcher, updateProductAttributesWatcher} from './productAttributeSaga';
import {getListAttributeWatcher} from './attributeSaga';
import {getListPriceWatcher, updatePricesWatcher} from './priceSaga';
import {getListBrandProductWatcher} from './brandProductSaga';
import {getOrdersWatcher} from './orderSaga';
import {getOrderItemsWatcher} from './orderItemSaga';


export default function* rootSagas() {
    yield all([
        getListProductWatcher(),
        getListProductTypeWatcher(),
        getListProductAttributeWatcher(),
        getListPriceWatcher(),
        getListBrandProductWatcher(),
        getListAttributeWatcher(),
        updateProductWatcher(),
        updatePricesWatcher(),
        updateProductAttributesWatcher(),
        createProductWatcher(),
        deleteProductWatcher(),
        getOrderItemsWatcher(),
        getOrdersWatcher(),
    ]);
}