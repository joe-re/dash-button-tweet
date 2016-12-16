// @flow

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UI from './components/UI';
import * as Actions from './actions';


class Container extends React.Component {
  render() {
    return (
      <UI {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return state.accessToken;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
