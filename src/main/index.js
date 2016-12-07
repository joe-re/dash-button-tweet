// @flow

import { OAuth } from 'oauth';
import { app, BrowserWindow, shell, ipcMain } from 'electron';

let win;
app.on('ready', () => {
  win = new BrowserWindow();
  const oauth = new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'RIA1C9PVcPK3hEhUhtHK2Zw0t',
    'VWsAm6TOhBw2gLqkVlZp93XfgO1jVmp2op3ar7y3m6j5w7LxOY',
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  oauth.getOAuthRequestToken((error, oauthToken, oauthTokenSecret) => {
    if (error) return;
    const authUrl = `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`;
    shell.openExternal(authUrl);
    win.loadURL(`file://${__dirname}/../../index.html`);

    ipcMain.once('SEND_PIN', (event, args) => {
      const oauthVerifier = args.pin;
      oauth.getOAuthAccessToken(
        oauthToken,
        oauthTokenSecret,
        oauthVerifier,
        (_error, accessToken, secret) => {
          console.log('accessToken', accessToken);
          console.log('accessTokenSecret', secret);
          event.sender.send('SEND_ACCESS_TOKEN', { accessToken, secret });
        }
      );
    });
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
