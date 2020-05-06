import {connect} from 'react-redux';

// Component
import HeaderContent from './Header';

function mapStateToProps(state) {
    return {}
};

function mapDispatchToProps(dispatch) {
    return {}
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContent);

export default HeaderContainer;