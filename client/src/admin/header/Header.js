import React, { Component } from 'react';
import { Layout, Input, Dropdown, Menu } from 'antd';
import PropTypes from 'prop-types';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SearchOutlined,
    CloseOutlined,
    BellFilled,
    MessageFilled,
    UserOutlined,
    IdcardOutlined,
    PoweroffOutlined,
    ControlOutlined,
} from '@ant-design/icons';

import './css/Header.css';

// Const
const { Header } = Layout;
const { Search } = Input;

class HeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: false,
        };
    }

    exitSearch = () => {
        this.setState({
            showSearch: false,
        })
    }

    showInput = () => {
        this.setState({
            showSearch: true,
        })
    }

    notifyContent = () => {
        return (
            <Menu>
                <Menu.Item>
                    <span>Content 1</span>
                </Menu.Item>
                <Menu.Item>
                    <span>Content 2</span>
                </Menu.Item>
            </Menu>
        );
    }

    inforAdmin = () => {
        return (
            <Menu>
                <Menu.Item>
                    <IdcardOutlined />
                    <span>My Profile</span>
                </Menu.Item>
                <hr />
                <Menu.Item>
                    <ControlOutlined />
                    <span>Setting</span>
                </Menu.Item>
                <Menu.Item>
                    <PoweroffOutlined />
                    <span>Logout</span>
                </Menu.Item>
            </Menu>
        );
    }
    
    content = () => {
        const { showSearch } = this.state;
        const { collapsed, toggle } = this.props;
        if(!showSearch) {
            return (
                <React.Fragment>
                    <span onClick={toggle}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
                    <SearchOutlined className="button-search" onClick={this.showInput} />
                    <div className="nav-bar">
                        <Dropdown overlay={this.notifyContent} trigger="click">
                            <BellFilled className="icon"/>
                        </Dropdown>
                        <Dropdown overlay={this.notifyContent} trigger="click">
                            <MessageFilled className="icon"/>
                        </Dropdown>
                        <Dropdown overlay={this.inforAdmin} trigger="click">
                            <UserOutlined className="icon"/>
                        </Dropdown>
                    </div>
                </React.Fragment>
            );
        } else {
            return <Search
                className="search"
                placeholder="input search text"
                onSearch={this.exitSearch}
                enterButton={<CloseOutlined />}
            />
        }
    }
    render() {
        const { showSearch } = this.state;
        return (
            <Header className="site-layout-background header" style={{ padding: 0 }}>
                {
                    this.content()
                }
            </Header>
        );
    }
}

HeaderContent.propTypes = {
    collapsed: PropTypes.bool,
    toggle: PropTypes.func,
}

export default HeaderContent;