const { OAuth } = require("oauth");
const { app, BrowserWindow, shell, ipcMain} = require("electron");

let win;
const schema = "electron";
app.on("ready", () => {
  win = new BrowserWindow();
  const oauth = new OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    "RIA1C9PVcPK3hEhUhtHK2Zw0t",
    "VWsAm6TOhBw2gLqkVlZp93XfgO1jVmp2op3ar7y3m6j5w7LxOY",
    "1.0A",
    null,
    "HMAC-SHA1"
  );

  oauth.getOAuthRequestToken((error, oauthToken, oauthTokenSecret, results) => {
    console.log(error);
    if (error) return;
    const authUrl = `https://api.twitter.com/oauth/authorize?oauth_token=${oauthToken}`;
    // デフォルトブラウザに認証画面を表示
    shell.openExternal(authUrl);

    // PINコード入力画面を表示
    win.loadURL(`file://${__dirname}/../../index.html`);

    // 入力したPINコードはIPC通信でRenderer -> Main に受け渡す
    ipcMain.once("SEND_PIN", (e, args) => {
      const oauthVerifier = args.pin;
      console.log(oauthToken, oauthVerifier);
      oauth.getOAuthAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, (error, accessToken, accessTokenSecret) => {
        console.log('accessToken', accessToken);
        console.log('accessTokenSecret', accessTokenSecret);
      });
    });
  });

});
