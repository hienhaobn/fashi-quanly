import * as actionType from './actionType';

export function createProduct(formData, config) {
    return { type: actionType.CREATE_PRODUCT, formData, config }
}

export function getProducts() {
    return { type: actionType.GET_PRODUCTS };
}

export function getPrices() {
    return { type: actionType.GET_PRICES };
}

export function getAttributes() {
    return { type: actionType.GET_ATTRIBUTES };
}

export function getProductAttributes() {
    return { type: actionType.GET_PRODUCT_ATTRIBUTES };
}

export function getBrandProducts() {
    return { type: actionType.GET_BRAND_PRODUCTS };
}

export function getProductTypes() {
    return { type: actionType.GET_PRODUCT_TYPES };
}

export function getUsers() {
    return { type: actionType.GET_USERS };
}

export function getDetailUser() {
    return { type: actionType.GET_DETAIL_USERS };
}

export function getOrderProducts() {
    return { type: actionType.GET_ORDER_PRODUCTS };
}

export function getRoles() {
    return { type: actionType.GET_ROLES };
}

export function getBlogs() {
    return { type: actionType.GET_BLOGS };
}

export function getCategoryBlogs() {
    return { type: actionType.GET_CATEGORY_BLOGS };
}

export function deleteProduct(productId) {
    return { type: actionType.DELETE_PRODUCT, productId }
}

export function updateProduct(formData, config, data) {
    return { type: actionType.UPDATE_PRODUCT, formData, config, data }
}

export function updateProductAttributes(productAttributes) {
    return { type: actionType.UPDATE_PRODUCT_ATTRIBUTES, productAttributes }
}

export function updatePrices(prices) {
    return { type: actionType.UPDATE_PRICES, prices }
}

export function getOrders() {
    return { type: actionType.GET_ORDERS }
}
 export function getOrderItems() {
     return { type: actionType.GET_ORDER_ITEMS }
 }