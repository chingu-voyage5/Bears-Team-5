import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoalNewForm from '../../components/GoalNewForm';
import Spinner from '../../components/Spinner';
import * as SC from './StyledComponents';
import * as actions from '../../actions/goals';
import { requireAuth } from '../../components/HoCs';

class GoalsNew extends React.Component {
  constructor() {
    super();
    this.checkFetching = this.checkFetching.bind(this);
  }

  checkFetching() {
    return this.props.isFetching;
  }

  render() {
    const {
      signin,
      user: { errors, isFetching },
    } = this.props;

    return (
      <SC.SigninContainer>
        <SC.ContentContainer>
          <SC.Title>New Goal</SC.Title>
          <SC.FormContainer>
            <GoalNewForm savegoal={signin} checkFetching={this.checkFetching} />
          </SC.FormContainer>
          { errors.request && <SC.Error>{ errors.request }</SC.Error>}
          { isFetching && <SC.SpinnerContainer><Spinner /></SC.SpinnerContainer>}
        </SC.ContentContainer>
      </SC.SigninContainer>
    );
  }
}

GoalsNew.propTypes = {
  savegoal: PropTypes.func,
  isFetching: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  errors: PropTypes.shape({}),
};

// Signin.defaultProps = {
//   signin: () => {},
//   isFetching: 'TZFZTFIZTFI',
//   isAuthenticated: 'LJHBOBOUIBOUI',
//   errors: {},
// };

const mapDispatchToProps = dispatch => ({
  signin: newGoalData => dispatch(actions.save.request(newGoalData)),
});

export default connect(null, mapDispatchToProps)(requireAuth(GoalsNew));
