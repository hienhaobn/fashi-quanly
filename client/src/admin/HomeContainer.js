import {connect} from 'react-redux';

// Component
import Home from './Home';

function mapStateToProp(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

const HomeContainer = connect(mapStateToProp, mapDispatchToProps)(Home);

export default HomeContainer;