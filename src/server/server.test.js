const path = require('path');
const express = require('express');
// eslint-disable-next-line import/no-unresolved
const routes = require('./router.config');

const app = express();
function setCustomCacheControl(res, cPath) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (express.static.mime.lookup(cPath) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0');
  }
}

function getFileExtendingName(filename) {
  // 文件扩展名匹配正则
  const reg = /\.[^.]+$/;
  const matches = reg.exec(filename);
  if (matches) {
    return matches[0];
  }
  return '';
}

app.use(express.static(path.join(__dirname), {
  maxAge: '365d',
  setHeaders: setCustomCacheControl,
}));

app.get('/*', (req, res) => {
  if (getFileExtendingName(req.url)) return res.sendFile(path.join(__dirname, req.params[0]));
  const currentRoute = routes.find(route => new RegExp(`${route.path}$`).test(req.url));
  return currentRoute ? res.sendFile(path.join(__dirname, currentRoute.component)) : res.sendFile(path.join(__dirname, '/pages/NotFound/index.html'));
});

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, '/pages/NotFound/index.html'));
});

app.listen(8097, '0.0.0.0');
