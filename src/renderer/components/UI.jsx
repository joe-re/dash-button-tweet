// @flow

import React from 'react';
import { ipcRenderer } from 'electron';

type State = { pinCode: string };
export default class UI extends React.Component {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = { pinCode: '' };
  }
  handleChange(e: SyntheticEvent) {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      this.setState({ pinCode: target.value });
    }
  }

  handleSubmit(_e: SyntheticEvent) {
    ipcRenderer.send('SEND_PIN', { pin: this.state.pinCode });
  }

  render() {
    return (
      <div>
        <label>Please enter, pin-code
          <input value={this.state.pinCode} onChange={this.handleChange.bind(this)}/>
        </label>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    );
  }
}
