// @flow

import AccessToken from '../db_utils/AccessToken';
type SET_ACCESS_TOKEN = { type: 'SET_ACCESS_TOKEN', token: string, secret: string };
export function setAccessToken(params: { token: string, secret: string }): SET_ACCESS_TOKEN {
  const { token, secret } = params;
  AccessToken.save(token, secret);
  return { type: 'SET_ACCESS_TOKEN', token, secret };
}

export function fetchAccessToken() {
  return (dispatch: (p: SET_ACCESS_TOKEN) => void ) =>
    AccessToken.get().then(accessToken => {
      dispatch({ type: 'SET_ACCESS_TOKEN', token: accessToken.token, secret: accessToken.secret });
    });
}

export type ActionTypes = SET_ACCESS_TOKEN;
