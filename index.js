const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

  

let person = {
  name:"中本圭亮",//自分の名前
  nickname: "中本圭亮,"//ニックネーム
  birthday:"9月18日",//誕生日
  zodiac: "いて座",//  星座
}

console.log("ニックネーム: " + person.nickname);
console.log("星座: " + person.zodiac);
console.log("誕生日: "+ person.birthday);

