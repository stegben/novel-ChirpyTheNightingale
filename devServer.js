/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const DEV_PORT = process.env.DEV_PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath, // 從設定檔來的重要參數
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler)); // 跟前端緊密聯繫

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(DEV_PORT, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${DEV_PORT}`);
});
