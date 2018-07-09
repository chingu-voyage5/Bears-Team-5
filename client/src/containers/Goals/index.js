import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Spinner from '../../components/Spinner';
import * as SC from './StyledComponents';

const Goals = (props) => {
  const {
    isFetching, errors, goals, user,
  } = props;
  console.log('GOALS', goals);

  return (
    <SC.GoalsContainer>
      <SC.Title>goals</SC.Title>
      <SC.GoalsListContainer>
        <h3>{user && `Welcome, ${user.email}`}</h3>
        <p>TODO: INSERT LIST COMPONENT HERE</p>
        <ul>{goals.map((goal, i) =>
          <li key={`L${i}`}>
            {goal.description}:{goal.user_id}
            {goal.shortgoals &&
              <ul>
                {goal.shortgoals.map((short, j) => <li key={`S${j}`}>{short.description}</li>)}
              </ul>
            }
          </li>)}
          </ul>
      </SC.GoalsListContainer>
      { errors.request && <SC.Error>{ errors.request }</SC.Error>}
      { isFetching && <SC.SpinnerContainer><Spinner /></SC.SpinnerContainer>}
    </SC.GoalsContainer>
  );
};

Goals.propTypes = {
  user: PropTypes.shape({}),
  goals: PropTypes.arrayOf(PropTypes.shape({
    user_id: PropTypes.string,
    description: PropTypes.string,
    shortgoals: PropTypes.arrayOf(PropTypes.shape({
      longgoal_id: PropTypes.string,
      description: PropTypes.string,
    })),
  })),
  isFetching: PropTypes.bool,
  errors: PropTypes.shape({}),
};

Goals.defaultProps = {
  user: {},
  goals: [],
  isFetching: false,
  errors: {},
};


const mapStateToProps = ({ goals, user }) => ({
  goals: goals.data,
  user: user.profile,
  isFetching: goals.isFetching,
  errors: goals.errors,
});

export default connect(mapStateToProps)(Goals);
