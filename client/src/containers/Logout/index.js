import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as userActions from '../../actions/user';


function LogoutContainer(props) {
  const { userLogout } = props;
  userLogout();
  return <Redirect to="/" />;
}


LogoutContainer.propTypes = {
  userLogout: PropTypes.func,
};

LogoutContainer.defaultProps = {
  userLogout: () => {},
};


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userActions.userLogout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);
