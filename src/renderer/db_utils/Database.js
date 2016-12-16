// @flow

import Dexie from 'dexie';

class Database extends Dexie {
  constructor() {
    super('dashTweetDb');
    this.version(1).stores({
      accessTokens: 'id, token, secret'
    });
  }
}

const instance = new Database();
instance.open().catch(() => {
  console.error("can't open database");
});
export default instance;
