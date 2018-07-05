import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../components/Spinner';
import * as SC from './StyledComponents';
import * as actions from '../../actions/goals';

class Goals extends React.Component {
  componentDidMount() {
    const { getDailyGoals } = this.props;
    getDailyGoals();
  }

  render() {
    const { isFetching, errors, dailyGoals } = this.props;
    return (
      <SC.GoalsContainer>
        <SC.Title>goals</SC.Title>
        <SC.GoalsListContainer>
          <h3>{this.props.user && `Welcome, ${this.props.user.email}`}</h3>
          <p>TODO: INSERT LIST COMPONENT HERE</p>
          {dailyGoals.map((goal, i) => <p key={i}>{goal.name}:{goal.isChecked}</p>)}
        </SC.GoalsListContainer>
        { errors.request && <SC.Error>{ errors.request }</SC.Error>}
        { isFetching && <SC.SpinnerContainer><Spinner /></SC.SpinnerContainer>}
      </SC.GoalsContainer>
    );
  }
}


Goals.propTypes = {
  getDailyGoals: PropTypes.func,
  dailyGoals: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    isChecked: PropTypes.bool,
  })),
  isFetching: PropTypes.bool,
  errors: PropTypes.shape({}),
};

Goals.defaultProps = {
  getDailyGoals: () => {},
  dailyGoals: [],
  isFetching: false,
  errors: {},
};


const mapStateToProps = ({ goals, user }) => ({
  user: user.profile,
  dailyGoals: goals.dailyGoals.data,
  isFetching: goals.dailyGoals.isFetching,
  errors: goals.dailyGoals.errors,
});


const mapDispatchToProps = dispatch => ({
  // getDailyGoals: () => dispatch(actions.dailyGoals.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
