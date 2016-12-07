// @flow

import React from 'react';
import { ipcRenderer } from 'electron';
import PinCodeInput from './PinCodeInput';

export default class UI extends React.Component {
  componentDidMount() {
    ipcRenderer.on('SEND_ACCESS_TOKEN', (e, payload) => {
      this.props.actions.setAccessToken(payload);
    });
  }

  componentWillUnmount() {
    ipcRenderer.removeAllListeners();
  }

  render() {
    return (
      <div>
        <PinCodeInput {...this.props}/>
      </div>
    );
  }
}
