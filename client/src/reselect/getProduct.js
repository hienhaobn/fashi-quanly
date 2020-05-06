import {createSelector} from 'reselect';

const productSelector = createSelector();

const getProducts = (state, props) => {
    const {searchName, searchPrice, searchTotal, searchBrand, searchType, searchDate} = props;
    const {products} = state;

    // reselect giống const, chỉ đảm bảo số lượng phần tử ko ảnh hưởng tới store, nhưng thuộc tính trong phần tử vẫn bị thay đổi, nên cần copy dữ liệu trước khi thao tác.
    const newData = products.map(item => ({ ...item }));
    const dateCurrent = new Date();
    newData.map((item, index) => {
        const prices = item.prices;
        prices && prices.map(price => {
            const dateFrom = new Date(price.price_from);
            const dateTo = new Date(price.price_to);
            if(dateFrom < dateCurrent && dateCurrent < dateTo) {
                item.price = price.price;
            }
        })
        if(!item.price) {
            item.price = 100;
        }
    });

    // lọc sản phẩm theo từng điều kiện search
    const newProducts = newData.filter(item => {
        // theo số lượng hàng tồn
        let checkTotal = true;
        if(searchTotal === 1) {
            checkTotal = item.total_product < 20;
        } else if(searchTotal === 2) {
            checkTotal = 20 <= item.total_product && item.total_product <= 100;
        } else if(searchTotal === 3) {
            checkTotal = item.total_product > 100;
        }

        // theo giá 
        let checkPrice = true;
        if(searchPrice > 20) {
            checkPrice = (item.price - 10) <= searchPrice && searchPrice <= (item.price + 10); 
        }

        // theo tên sản phẩm
        const checkName = item.product_name.toLowerCase().includes(searchName.toLowerCase());

        // theo thương hiệu sản phẩm
        let checkBrand = true;
        if(searchBrand === "0") {
            checkBrand = true;
        } else {
            checkBrand = searchBrand === item.brand_id;
        }

        // theo loại sản phẩm
        let checkType = true;
        if(searchType === "0") {
            checkType = true;
        } else {
            checkType = searchType === item.product_type_id;
        }

        // lọc theo ngày tạo sản phẩm
        let checkDate = true;
        if(searchDate === "") {
            checkDate = true;
        } else {
            checkDate = searchDate === item.created_at.slice(0, 10);
        }

        return checkName && checkTotal && checkPrice && checkBrand && checkType && checkDate;
    });
    return newProducts;
}

export const makeGetProductState = () => createSelector(
    [getProducts],
    (products) => products
);

const getProductSelector = (state, productId) => state.products.find(item => item._id === productId);

const getPricesSelector = (state, productId) => state.prices.filter(item => item.product_id === productId);

const getProductAttributesSelector = (state, productId) => {
    const productAttributes = state.productAttributes.filter(item => item.product_id === productId);
    productAttributes.map(item => {
        const attribute = state.attributes.find(i => i._id === item.attribute_id);
        item.name = attribute.name;
    })
    return productAttributes;
}

const getBrandProductSelector = (state, brandProductId) => state.brandProducts.find(item => item._id === brandProductId);

const getProductTypeSelector = (state, productTypeId) => state.productTypes.find(item => item._id === productTypeId);

productSelector.getProductSelector = getProductSelector;
productSelector.getPricesSelector = getPricesSelector;
productSelector.getProductAttributesSelector = getProductAttributesSelector;
productSelector.getBrandProductSelector = getBrandProductSelector;
productSelector.getProductTypeSelector = getProductTypeSelector;

export default productSelector;