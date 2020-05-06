import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Popconfirm, Col, Row, Pagination, Form, DatePicker } from 'antd';
import domain from '../../../saga/domain';
import {
    DeleteOutlined,
    SnippetsOutlined
} from '@ant-design/icons';

// Component
import ProductDetailContainer from './detail_product/ProductDetailContainer';
import StatisticalContainer from './statistical_chart/StatisticalContainer';

class ManagerProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            childrenDrawer: false,
            productDetailId: 0,
            page: 1,
            limit: 8,
            filterDate: '',
            filterMonth: '',
            filterYear: '',
        }
    }

    showDrawer = (productId) => {
        this.setState({
            visible: true,
            productDetailId: productId,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
            productDetailId: 0,
        });
    };

    // fix tạm, sau sẽ đc sử dụng trong saga - bắt status req.
    confirm = (productId) => {
        const { deleteProduct } = this.props;
        deleteProduct(productId);
    }

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
    
    handlePage = (page) => {
        this.setState({
            page,
        })
    }

    render() {
        const { visible, productDetailId, childrenDrawer, limit, page} = this.state;
        const {products} = this.props;
        const total = products.length;
        return (
            <React.Fragment>
                <Col span={24} className="main-content">
                    <Row gutter={40}>
                        {
                            products.map((item, index) => {
                                if((page - 1) * limit <= index && page * limit > index) 
                                return <Col key={index} md={6} sm={8} xs={12} className="product-item">
                                    <img src={`${domain}/${item.image_product}`} width="100%" height="400px" />
                                    <div className="content">
                                        <p>{item.product_name}</p>
                                        <p>Giá thời điểm: <span>{item.price + `$`}</span></p>
                                        <p>Còn <span>{item.total_product}</span> sản phẩm</p>
                                    </div>
                                    <div className="action">
                                        <SnippetsOutlined className="icon" title="Chi tiết" onClick={() => this.showDrawer(item._id)} />
                                        <Popconfirm
                                            title="Bạn có chắc muốn xóa sản phẩm?"
                                            onConfirm={() => this.confirm(item._id)}
                                            okText="Có"
                                            cancelText="Không"
                                        >
                                            <DeleteOutlined className="icon" title="Xóa" />
                                        </Popconfirm>
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                    <Row>
                        <Col>
                            <Pagination current={page} total={total} onChange={this.handlePage} pageSize={limit}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20}>
                            {/* gen biểu đồ thống kê theo đúng số sản phẩm xuất hiện trên giao diện - dù có đc lọc*/}
                            <StatisticalContainer page={page} limit={limit} products={products} />
                        </Col>
                        <Col span={4}>
                            <Form.Item
                                name="date"
                                label="Theo ngày:"
                            >
                                <DatePicker picker="date" />
                            </Form.Item>
                            <Form.Item
                                name="month"
                                label="Theo tháng:"
                            >
                                <DatePicker picker="month" />
                            </Form.Item>
                            <Form.Item
                                name="year"
                                label="Theo năm:"
                            >
                                <DatePicker picker="year" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Col>
                {
                    productDetailId !== 0 && <ProductDetailContainer
                        visible={visible}
                        onClose={this.onClose}
                        productDetailId={productDetailId}
                        childrenDrawer={childrenDrawer}
                        showChildrenDrawer={this.showChildrenDrawer}
                        onChildrenDrawerClose={this.onChildrenDrawerClose}
                    />
                }
            </React.Fragment>
        );
    }
}

ManagerProductContent.propTypes = {
    products: PropTypes.array,
    prices: PropTypes.array,
    deleteProduct: PropTypes.func,
}

export default ManagerProductContent;