// @flow

import type { ActionTypes } from '../actions';
type State = {
  accessToken: string,
  secret: string
};

const initialState: State = {
  accessToken: '',
  secret: ''
};

const accessToken = (state: State = initialState, action: ActionTypes): State => {
  switch (action.type) {
  case 'SET_ACCESS_TOKEN':
    debugger;
    return { accessToken: action.accessToken, secret: action.secret };
  default:
    return state;
  }
};

export default accessToken;
