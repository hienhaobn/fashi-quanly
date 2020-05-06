import React, { Component } from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

// Component
import ManagerProductContainer from './manage_product/ManagerProductContainer';

// Const
const { Content } = Layout;

class SwapContent extends Component {
    test = () => {}
    
    render() {
        return (
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    paddingTop: 0,
                    paddingBottom: 0,
                }}
            >
                <Switch>
                    <Route exact path='/admin' component={ManagerProductContainer} />
                    <Route path='/admin/product' render={(props) => (
                        <ManagerProductContainer />
                    )} />
                    <Route path='/admin/product/:id' component={ManagerProductContainer} />
                </Switch>
            </Content>
        );
    }
}

export default SwapContent;