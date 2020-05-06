import {connect} from 'react-redux';
import Statistical from './Statistical';
import {getOrders, getOrderItems} from '../../../../action/action';

// Selector
import {makeGetSatisticalState} from '../../../../reselect/getStatistical';


const makeMapStateToProps = () => {
    const getStatisticalState = makeGetSatisticalState();
    const mapStateToProps = (state, props) => {
        const data = getStatisticalState(state, props);
        return {
            data,
        }
    };
    return mapStateToProps;
};

function mapDispatchToProps(dispatch) {
    return {
        getOrders: () => dispatch(getOrders()),
        getOrderItems: () => dispatch(getOrderItems()),
    };
}

const StatisticalContainer = connect(makeMapStateToProps, mapDispatchToProps)(Statistical);

export default StatisticalContainer;