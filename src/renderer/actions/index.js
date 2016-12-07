// @flow

type SET_ACCESS_TOKEN = { type: 'SET_ACCESS_TOKEN', accessToken: string, secret: string };
export type ActionTypes = SET_ACCESS_TOKEN;
export function setAccessToken(params: { accessToken: string, secret: string }): SET_ACCESS_TOKEN {
  const { accessToken, secret } = params;
  debugger;
  return { type: 'SET_ACCESS_TOKEN', accessToken, secret };
}
