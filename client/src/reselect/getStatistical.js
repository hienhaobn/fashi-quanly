import {createSelector} from 'reselect';

const statisticalSelector = createSelector();

const getStatistical = (state, props) => {
    const {orders, orderItems} = state;
    const {limit, page, products} = props;
    // nhận ngày, tháng, năm gửi lên để lọc, cần thêm - nếu ko truyền, lấy mặc định ngày hôm nay
    const dateSearch = 29;
    const monthSearch = 5;
    const yearSearch = 2020;

    // lọc chỉ lấy giới số sản phẩm theo limit, page để vẽ biểu đồ
    const newProducts = [];
    products.map((item, index) => {
        if((page - 1) * limit <= index && page * limit > index) {
            newProducts.push(item);
        }
    })

    // get product name - sử dụng cho labels trong bảng thống kê
    const productNames = [];
    newProducts.map(item => productNames.push(item.product_name));

    // lọc những hóa đơn thỏa mãn điều kiện lọc theo ngày tháng năm
    const newOrders = orders.filter(item => {
        const orderDate = new Date(item.created_at);
        return orderDate.getDate() === dateSearch && orderDate.getMonth() === monthSearch - 1 && orderDate.getFullYear() === yearSearch;
    });
    // lấy ds id thỏa mãn - tiện cho việc lọc phía sau
    const ordersId = [];
    newOrders.map(item => ordersId.push(item.id))

    // lọc order items - chỉ giữ những bản ghi tm chứa orderId trong newOrders
    orderItems.filter(item => {
        const orderId = item.order_id;
        if(ordersId.indexOf(orderId) === -1) {
            return false;
        } else {
            return true;
        }
    });

    // dựa vào từng sp trong products để gen ra data array lưu số lượng từng phần tử đếm được trong orderItems
    const data = [];
    newProducts.map(item => {
        const productId = item.id;
        let count = 0;
        orderItems.map(value => {
            if(value.product_id === productId) {
                count += value.quantity;
            }
        });
        data.push(count);
    })

    return {data, productNames};
}

export const makeGetSatisticalState = () => createSelector(
    [getStatistical],
    (data) => data
);