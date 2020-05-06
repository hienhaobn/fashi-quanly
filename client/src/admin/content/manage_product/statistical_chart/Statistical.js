import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

class Statistical extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {getOrders, getOrderItems} = this.props;
        getOrders();
        getOrderItems();
    }

    click = () => {};

    render() {
        const {data} = this.props;
        debugger;
        return (
            <Bar
                data={{
                    labels: data.productNames,
                    datasets: [
                        {
                            label: "Số sản phẩm",
                            backgroundColor: [
                                "#3e95cd",
                                "#8e5ea2",
                                "#3cba9f",
                                "#e8c3b9",
                                "#c45850",
                                "red",
                                "blue",
                                "green"
                            ],
                            data: data.data
                        }
                    ]
                }}
                options={{
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Biểu đồ thống kê số sản phẩm bản được trong tháng 5 năm 2020"
                    }
                }}
            />
        );
    }
}

Statistical.propTypes = {
    getOrders: Proptypes.func,
    getOrderItems: Proptypes.func,
    data: Proptypes.object,
}

export default Statistical;