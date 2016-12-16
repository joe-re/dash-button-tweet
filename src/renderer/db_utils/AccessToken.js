// @flow

import db from './Database';

export default class AccessToken {
  id: ?number;
  token: string;
  secret: string;

  static get(): Promise<typeof AccessToken.prototype> {
    return db.accessTokens.get(1);
  }

  static save(token, secret): Promise<typeof AccessToken.prototype> {
    return db.accessTokens.put({ id: 1, token, secret });
  }
}
