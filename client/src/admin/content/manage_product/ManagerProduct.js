import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, 
    Input, Slider, InputNumber, 
    Radio, Collapse, Select, DatePicker } from 'antd';
import {
    PlusCircleOutlined,
} from '@ant-design/icons';

// Component
import ManagerProductContentContainer from './ManagerProductContentContainer';
import ProductDetailContainer from './detail_product/ProductDetailContainer';

// Styles
import './css/ManagerProduct.css';

// const
const { Panel } = Collapse;
const { Option } = Select;

class ManagerProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            childrenDrawer: false,
            searchPrice: 0,
            searchTotal: 4,
            searchName: '',
            searchBrand: '0',
            searchType: '0', 
            searchDate: '',
        }
    }

    componentDidMount() {
        const { getProducts, products, 
            prices, getPrices, getAttributes, 
            getBrandProducts, getProductTypes,
            brandProducts, attributes, productTypes,
            getProductAttributes, productAttributes,
        } = this.props;
        if (products.length === 0) {
            getProducts();
        }
        if (prices.length === 0) {
            getPrices();
        }
        if(attributes.length === 0) {
            getAttributes();
        }
        if(brandProducts.length === 0) {
            getBrandProducts();
        }
        if(productTypes.length === 0) {
            getProductTypes();
        }
        if(productAttributes.length === 0) {
            getProductAttributes()
        }
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    onChange = value => {
        this.setState({
            searchPrice: value,
        });
    };

    onChangeRadio = e => {
        this.setState({
            searchTotal: e.target.value,
        });
    };

    handleChangeInput = (e) => {
        this.setState({
            searchName: e.target.value,
        })
    }

    handleChangeSelect = (value, type) => {
        if(type === "brand") {
            this.setState({
                searchBrand: value,
            })
        }
        if(type === "type") {
            this.setState({
                searchType: value,
            })
        }
    }

    handleChangeDate = (date, dateString) => {
        this.setState({
            searchDate: dateString,
        })
    }

    render() {
        const { searchPrice, searchTotal, searchName, 
            visible, childrenDrawer, searchBrand,
            searchType, searchDate } = this.state;
        const { brandProducts, productTypes } = this.props;
        return (
            <Row className="manager-product">
                <Col span={24}>
                    <Row>
                        <Col span={1} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <PlusCircleOutlined className="create-product" title="Tạo sản phẩm" onClick={this.showDrawer} style={{margin: 0, cursor: "pointer"}} />
                        </Col>
                        <Col span={23} className="search-product">
                            <Collapse>
                                <Panel header="Tìm kiến sản phẩm">
                                    <Row>
                                        <Col span={16}>
                                            <Form.Item
                                                name="name"
                                                label="Tên sản phẩm"
                                            >
                                                <Input placeholder="Tên sản phẩm" onChange={this.handleChangeInput} style={{ width: "95%" }} />
                                            </Form.Item>
                                            <Form.Item
                                                name="price"
                                                label="Giá thời điểm"
                                            >
                                                <Row>
                                                    <Col span={12}>
                                                        <Slider
                                                            step={10}
                                                            min={20}
                                                            max={400}
                                                            onChange={this.onChange}
                                                            value={typeof searchPrice === 'number' ? searchPrice : 0}
                                                        />
                                                    </Col>
                                                    <Col span={4}>
                                                        <InputNumber
                                                            step={10}
                                                            min={20}
                                                            max={400}
                                                            style={{ margin: '0 16px' }}
                                                            value={searchPrice}
                                                            onChange={this.onChange}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Form.Item>
                                            <Form.Item
                                                name="total"
                                                label="Số lượng kho"
                                            >
                                                <Input type="hidden" value={searchTotal} />
                                                <Radio.Group onChange={this.onChangeRadio}>
                                                    <Radio value={1}>Sắp hết</Radio>
                                                    <Radio value={2}>(> 20)</Radio>
                                                    <Radio value={3}>Còn nhiều (> 100)</Radio>
                                                    <Radio value={4}>Tất cả</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item
                                                name="brand"
                                                label="Thương hiệu"
                                            >
                                                <Select defaultValue="0" onChange={(value) => this.handleChangeSelect(value, "brand")}>
                                                    <Option value="0">Tất cả</Option>
                                                    {
                                                        brandProducts.map(item => {
                                                            return <Option value={item._id} key={item._id}>{item.name}</Option>
                                                        })
                                                    }
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                name="type"
                                                label="Loại sản phẩm"
                                            >
                                                <Select defaultValue="0" onChange={(value) => this.handleChangeSelect(value, "type")}>
                                                    <Option value="0">Tất cả</Option>
                                                    {
                                                        productTypes.map(item => <Option value={item._id} key={item._id}>{item.name}</Option>)
                                                    }
                                                </Select>
                                            </Form.Item>
                                            <Form.Item
                                                name="create_at"
                                                label="Ngày tạo sản phẩm"
                                            >
                                                <DatePicker onChange={this.handleChangeDate}/>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className="header-manager">
                            {
                                visible && <ProductDetailContainer
                                    visible={visible}
                                    onClose={this.onClose}
                                    childrenDrawer={childrenDrawer}
                                    showChildrenDrawer={this.showChildrenDrawer}
                                    onChildrenDrawerClose={this.onChildrenDrawerClose}
                                />
                            }
                        </Col>
                        <ManagerProductContentContainer 
                            searchName={searchName} 
                            searchPrice={searchPrice} 
                            searchTotal={searchTotal} 
                            searchBrand={searchBrand} 
                            searchType={searchType} 
                            searchDate={searchDate}
                        />
                    </Row>
                </Col>
            </Row>
        );
    }
}

ManagerProduct.propTypes = {
    getProducts: PropTypes.func,
    getPrices: PropTypes.func,
    getAttributes: PropTypes.func,
    getBrandProducts: PropTypes.func,
    getProductTypes: PropTypes.func,
    getProductAttributes: PropTypes.func,
    
    products: PropTypes.array,
    prices: PropTypes.array,
    attributes: PropTypes.array,
    productTypes: PropTypes.array,
    brandProducts: PropTypes.array,
    productAttributes: PropTypes.array,
};

export default ManagerProduct;