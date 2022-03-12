import { connect } from 'react-redux';
import Principal from '../principal/Principal';

const mapStateToProps = (state) => {
    return {
        course: state.userState.course,
    };
};

const PrincipalContainer = connect(mapStateToProps)(Principal);
export default PrincipalContainer;
