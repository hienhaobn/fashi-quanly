import {connect} from 'react-redux';

// Component
import ManagerProductContent from './ManagerProductContent';

// Action
import {deleteProduct} from '../../../action/action';

// Selector
import {makeGetProductState} from '../../../reselect/getProduct';


const makeMapStateToProps = () => {
    const getProductState = makeGetProductState();
    const mapStateToProps = (state, props) => {
        const products = getProductState(state, props);
        return {
            products,
            prices: state.prices,
        }
    };
    return mapStateToProps;
};

function mapDispatchToProps(dispatch) {
    return {
        deleteProduct: (productId) => dispatch(deleteProduct(productId)),
    }
}

const ManagerProductContentContainer = connect(makeMapStateToProps, mapDispatchToProps)(ManagerProductContent);

export default ManagerProductContentContainer;