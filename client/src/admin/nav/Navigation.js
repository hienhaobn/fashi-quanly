import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
    TeamOutlined,
    ContainerOutlined,
    DatabaseFilled,
    CodeSandboxCircleFilled,
    BugFilled,
    BankFilled,
} from '@ant-design/icons';

// Styles
import './css/Navigation.css';

const { Sider } = Layout;

class Navigation extends Component {
    render() {
        const { collapsed } = this.props;
        return (
            <Sider theme="light" trigger={null} collapsible collapsed={collapsed} className="navigation">
                <div className="logo">
                    <CodeSandboxCircleFilled className="icon" />
                    {!collapsed && <span className="title">ADMIN</span>}
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to='/admin'>
                            <BankFilled />
                            <span>Quản lý thống kê</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/admin/user'>
                            <TeamOutlined />
                            <span>Quản lý tài khoản</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/admin/product'>
                            <ContainerOutlined />
                            <span>Quản lý bài viết</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <BugFilled />
                        <span>Quản lý sản phẩm</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <DatabaseFilled />
                        <span>Quản lý hóa đơn</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    };
}

Navigation.propTypes = {
    collapsed: PropTypes.bool,
}

export default Navigation;
