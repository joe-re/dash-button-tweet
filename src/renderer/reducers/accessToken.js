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
  console.log(action);
  switch (action.type) {
  case 'SET_ACCESS_TOKEN':
    return { accessToken: action.token, secret: action.secret };
  default:
    return state;
  }
};

export default accessToken;
