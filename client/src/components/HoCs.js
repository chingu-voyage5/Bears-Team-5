import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const requireAuth = Component =>
  connect(({ user }) => ({ user }))(props =>
    (!props.user.isAuthenticated && !props.user.isFetching
      ? <Redirect to="/signin"/>
      : <Component { ...props}/>));
