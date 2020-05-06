import React, { Component } from 'react';
import { Layout} from 'antd';

// Component
import Navigation from './nav/Navigation';
import HeaderContainer from './header/HeaderContainer';
import SwapContent from './content/SwapContent';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout>
                <Navigation collapsed={collapsed} />
                <Layout className="site-layout">
                    <HeaderContainer collapsed={collapsed} toggle={this.toggle}/>
                    <SwapContent />
                </Layout>
            </Layout>
        );
    }
}

export default Home;