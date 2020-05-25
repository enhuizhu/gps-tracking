import React from 'react';
import { Route, Redirect } from 'react-router-native';
import { connect } from 'react-redux';

export const PrivateRoute = (props) => {
  // need to check if user already authorized or not
  if (!(props.userInfo && props.userInfo.token)) {
    return <Redirect to='/login'></Redirect>;
  }

  return <Route {...props}></Route>;
}

const mapStateToProps = ((state) => {
  return {
    userInfo: state.userInfo
  }
});

export default connect(mapStateToProps)(PrivateRoute);
