const DashButton = require("dash-button"); // モジュール読み込み

const PHY_ADDR = "34:d2:70:59:3b:2b"; // ここでフィジカルアドレスを指定

let button = new DashButton(PHY_ADDR); // ボタンのアドレスを引数に渡してDashButtonクラスを呼び出し

console.log("I'm listening'") // 「がんばってます」を主張
let i = 0; // カウントしたかったのでとりあえずカウント用の変数を置いときます。

/*
  以下が発火するイベントの指定部。
*/
button.addListener(() => {
  console.log("["+(i++)+"] It works."); // 今回はシンプルに呼び出し回数を併記してコンソール出力
});
