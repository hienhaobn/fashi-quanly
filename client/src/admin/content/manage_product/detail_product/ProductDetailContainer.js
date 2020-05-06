import {connect} from 'react-redux';

// Component
import ProductDetail from './ProductDetail';

// Action
import { getProductAttributes, 
    updateProduct, updateProductAttributes,
    createProduct,
} from '../../../../action/action';

// Selector
import productSelector from '../../../../reselect/getProduct';

const mapStateToProps = (state, ownProps) => {
    const {productDetailId} = ownProps;
    const {attributes, brandProducts, productTypes} = state;
    // lấy các thông tin chi tiết của một sp
    const product = productDetailId !== 0 && productSelector.getProductSelector(state, productDetailId);
    const productAttributes = productDetailId !== 0 && productSelector.getProductAttributesSelector(state, productDetailId);
    const brandProduct = product && productSelector.getBrandProductSelector(state, product.brand_id);
    const productType = product && productSelector.getProductTypeSelector(state, product.product_type_id);
    const prices = productDetailId !== 0 && productSelector.getPricesSelector(state, productDetailId);
    return {
        product,
        productAttributes,
        attributes, 
        brandProduct,
        productType,
        brandProducts,
        productTypes,
        prices,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateProduct: (formData, config, data) => dispatch(updateProduct(formData, config, data)),
        createProduct: (formData, config) => dispatch(createProduct(formData, config)),
    };
};

const ProductDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

export default ProductDetailContainer;