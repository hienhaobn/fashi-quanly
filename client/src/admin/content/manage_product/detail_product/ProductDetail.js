import React, { Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, DatePicker, Select, message } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import domain from '../../../../saga/domain';

// Component
import EditTableTagGroup from './EditTableTagGroup';
import EditPrice from './edit_price/EditPrice';

import {
    UpSquareFilled,
} from '@ant-design/icons';

// Styles
import './css/ProductDetail.css';

import product_default from './images/product-default.jpg';

// Const
const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

class  ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.productDetailId ? {...props.product} : {},
            productAttributes: props.productDetailId ? props.productAttributes.map(item => ({...item})) : [], 
            urlFileUploadLocal: null,
            file: null,
        }
    };

    handleSelect = (value, type) => {
        const {product} = this.state;
        type === "brand" ? product.brand_id = value : product.product_type_id = value;
        this.setState({
            product,
        })
    };

    handleChangeInput = (e, type) => {
        const {product} = this.state;
        const value = e.target.value;
        switch(type) {
            case "name":
                product.product_name = value;
                break;
            case "total":
                product.total_product = parseInt(value);
                break;
            case "description":
                product.description = value;
                break;
            default:
                break;
        }
        this.setState({
            product,
        });
    };

    handleChangeTag = (value, attributeName) => {
        let {productAttributes} = this.state;
        const {attributes} = this.props;
        if(productAttributes.length === 0) {
            attributes.map(item => {
                const productAttribute = {
                    attribute_id: item._id,
                    name: item.name,
                    value: [],
                }
                productAttributes.push(productAttribute);
            })
        }
        productAttributes.find(item => item.name === attributeName).value = value;
        
        this.setState({
            productAttributes,
        })
    };

    handleUpdate = () => {
        const newProduct = this.state.product;
        const newProductAttributes = this.state.productAttributes;
        const {file} = this.state;
        const {updateProduct, product, onClose, productAttributes} = this.props;
        productAttributes.map(item => delete item.name);
        const formData = new FormData();
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        }
        const data = [];
        if(!this.isEqual(newProduct, product)) {
            const newData = JSON.stringify(newProduct);
            formData.append('product', newData);
            data.push(newProduct);
        }
        if(!this.isEqual(newProductAttributes, productAttributes)) {
            const newData = JSON.stringify(newProductAttributes);
            formData.append('productAttributes', newData);
            data.push(newProductAttributes);
        }
        if(file) {
            formData.append('myImage', file);
            newProduct.image_product = file.name;
        }
        updateProduct(formData, config, data);
    }

    handleAdd = () => {
        const {product, productAttributes, file} = this.state;
        const {createProduct, onClose} = this.props;
        productAttributes.map(item => delete item.name);
        // const formData = this.objectToFormData({product, productAttributes, file});
        product.prices.map(item => delete item.id);
        const formData = new FormData();
        const productString = JSON.stringify(product);
        const productAttributesString = JSON.stringify(productAttributes);

        // bawns api gửi formData và config lên
        formData.append('myImage', file);
        formData.append('product', productString);
        formData.append('productAttributes', productAttributesString);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        }
        // bắn action add product
        // mess nên bắn bên saga
        createProduct(formData, config);
        onClose();
    }

    // fix tạm, cần xét thêm trường hợp object con, sử dụng đệ quy để xét.
    isEqual = (objA, objB) => {
        // Tạo các mảng chứa tên các property
        var aProps = Object.getOwnPropertyNames(objA);
        var bProps = Object.getOwnPropertyNames(objB);
        // Nếu độ dài của mảng không bằng nhau,
        // thì 2 objects đó không bằnh nhau.
        if (aProps.length != bProps.length) {
            return false;
        }
        
        for (var i = 0; i < aProps.length; i++) {
             var propName = aProps[i];          
              // Nếu giá trị của cùng một property mà không bằng nhau,
              // thì 2 objects không bằng nhau.
             if (objA[propName] !== objB[propName]) {             
                 return false;         
             }     
        }
        // Nếu code chạy đến đây,
        // tức là 2 objects được tính lằ bằng nhau.
        return true; 
    }

    showSetPrices = () => {
        const {showChildrenDrawer, productDetailId} =this.props;
        // Call back để lấy id từ server trả về, show cài đặt price
        if(productDetailId) {
            showChildrenDrawer();
        } else {
            message.warning("Bạn cần tạo sản phẩm trước khi cài đặt giá !!!");
        }
    }

    handleFileUpload = (event) => {
        const files = event.target.files;
        const src = [];
        if(files.length) {
            for(const i in files) {
                if (Object.prototype.hasOwnProperty.call(files, i)) {
                    src[i] = this.createObjectUrl(files[i]);
                }
            }
        }
        this.setState({
            urlFileUploadLocal: src[0],
            file: event.target.files[0],
        })
    }

    createObjectUrl = (object) => window.URL ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);

    setPriceProduct = (prices) => {
        const {product} = this.state;
        const newProduct = {...product};
        newProduct.prices = prices;
        this.setState({
            product: newProduct,
        });
    }

    render() {
        const { visible, onClose, showChildrenDrawer,
            brandProducts, productTypes, 
            onChildrenDrawerClose, childrenDrawer,
            productType, brandProduct, productDetailId } = this.props;
        const { product, productAttributes, urlFileUploadLocal } = this.state;
        const prices = product.prices ? product.prices : [];
        const created_at = product.created_at;
        const updated_at = product.updated_at;
        const description = product.description;
        return (
            <Drawer
                className="product-detail"
                title={productDetailId ? "Chi tiết sản phẩm" : "Tạo mới sản phẩm"}
                width={720}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button
                            onClick={onClose}
                            style={{ marginRight: 8 }}
                        >
                            Hủy
                    </Button>
                        <Button onClick={productDetailId ? this.handleUpdate : this.handleAdd} type="primary">
                            { productDetailId ? "Cập nhật" : "Tạo mới" }
                    </Button>
                    </div>
                }
            >
                <EditPrice childrenDrawer={childrenDrawer} onChildrenDrawerClose={onChildrenDrawerClose} prices={prices} setPriceProduct={this.setPriceProduct} />
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Tên sản phẩm"
                                rules={[{ required: true, message: 'Tên sản phẩm không được để trống' }]}
                            >
                                <Input placeholder="Tên sản phẩm" 
                                    defaultValue={product.product_name}
                                    onChange={(e) => this.handleChangeInput(e, "name")}
                                />
                            </Form.Item>
                            <Form.Item
                                name="size"
                                label="Size"
                                rules={[{ required: true, message: 'Size không được để trống' }]}
                            >
                                <EditTableTagGroup productAttributes={productAttributes} type="Size" handleChangeTag={this.handleChangeTag} />
                            </Form.Item>
                            <Form.Item
                                name="color"
                                label="Màu sắc"
                                rules={[{ required: true, message: 'Màu sắc không được để trống' }]}
                            >
                                <EditTableTagGroup productAttributes={productAttributes} type="Color" handleChangeTag={this.handleChangeTag} />
                            </Form.Item>
                            <Form.Item
                                name="price"
                                label="Giá sản phẩm"
                            >  
                                <a onClick={showChildrenDrawer}>Hiển thị bảng cài đặt giá sản phẩm</a>
                            </Form.Item>
                            <Form.Item
                                        name="total"
                                        label="Tổng số sản phẩm"
                                        rules={[{ required: true, message: 'Số sản phẩm không được để trống' }]}
                                    >
                                        <Input style={{width: 80}} type="number" placeholder="Tổng" defaultValue={product.total_product} onChange={(e) => this.handleChangeInput(e, "total")} />
                                    </Form.Item>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="type"
                                        label="Loại sản phẩm"
                                    >
                                        <Select defaultValue={productType.name} onChange={(value) => this.handleSelect(value, "type")}>
                                            {
                                                productTypes.map(item => {
                                                    return <Option value={item._id} key={item._id}>{item.name}</Option>
                                                })
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="brand"
                                        label="Thương hiệu sản phẩm"
                                    >
                                        <Select defaultValue={brandProduct.name} onChange={(value) => this.handleSelect(value, "brand")}>
                                            {
                                                brandProducts.map(item => {
                                                    return <Option value={item._id} key={item._id}>{item.name}</Option>
                                                })
                                            }
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="image"
                                label="Ảnh sản phẩm"
                            >
                                <div className="upload-image">
                                    <img style={productDetailId ? {} : {border: "1px solid black"}} src={urlFileUploadLocal ? urlFileUploadLocal : productDetailId ? `${domain}/${product.image_product}` : product_default} width="100%" height="auto" />
                                    <div className="upload">
                                        <input type="file" id="file-upload" onChange={this.handleFileUpload}/>
                                        <label for="file-upload">
                                            <UpSquareFilled />
                                        </label>
                                    </div>
                                </div>
                            </Form.Item>
                        </Col>
                    </Row>
                    {
                        productDetailId && <Row gutter={16}>
                            <Col span={12}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item
                                            name="created-at"
                                            label="Ngày tạo sản phẩm"
                                        >
                                            <DatePicker defaultValue={moment(`${created_at}`, dateFormat)} format={dateFormat} disabled />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item
                                            name="updated-at"
                                            label="Ngày cập nhật gần nhất"
                                        >
                                            <DatePicker defaultValue={moment(`${updated_at}`, dateFormat)} format={dateFormat} disabled />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    }
                    
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Miêu tả"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Miêu tả không được để trống',
                                    },
                                ]}
                            >
                                <Input defaultValue={description} hidden />
                                <Input.TextArea rows={4} placeholder="Miêu tả sản phẩm" defaultValue={description} onChange={(e) => this.handleChangeInput(e, "description")} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        );
    }
}

ProductDetail.propTypes = {
    productDetailId: PropTypes.number,

    visible: PropTypes.bool,
    childrenDrawer: PropTypes.bool,

    // func
    onClose: PropTypes.func,
    getAttributes: PropTypes.func,
    getProductAttributes: PropTypes.func,
    getBrandProducts: PropTypes.func,
    getProductTypes: PropTypes.func,
    onChildrenDrawerClose: PropTypes.func,
    showChildrenDrawer: PropTypes.func,
    updateProduct: PropTypes.func,
    createProduct: PropTypes.func,

    // Object
    product: PropTypes.object, 
    brandProduct: PropTypes.object,
    productType: PropTypes.object,

    // Array
    prices: PropTypes.array,
    attributes: PropTypes.array,
    productAttributes: PropTypes.array,
    brandProducts: PropTypes.array,
    productTypes: PropTypes.array,
}

ProductDetail.defaultProps = {
    product: {},
    productTypes: [],
    brandProducts: [],
    productAttributes: [],
    productType: {},
    brandProduct: {},
}

export default ProductDetail;
