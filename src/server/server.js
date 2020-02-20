const path = require('path');
const express = require('express');
const routes = require('./router.config');
const app = express();
function setCustomCacheControl(res, path) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (express.static.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

function getFileExtendingName (filename) {
  // 文件扩展名匹配正则
  var reg = /\.[^\.]+$/;
  var matches = reg.exec(filename);
  if (matches) {
    return matches[0];
  }
  return '';
}

app.use(express.static(path.join(__dirname), {
  maxAge: '365d',
  setHeaders: setCustomCacheControl
}));

app.get('/*', function (req, res) {
  if (getFileExtendingName(req.url)) return res.sendFile(path.join(__dirname, req.params[0]));
  const currentRoute = routes.find(route => new RegExp(route.path + '$').test(req.url))
  return currentRoute ? res.sendFile(path.join(__dirname, currentRoute.component)) : res.sendFile(path.join(__dirname, '/pages/NotFound/index.html'));
});

app.use(function(req, res, next){
  res.status(404);
  res.sendFile(path.join(__dirname, '/pages/NotFound/index.html'));
});

app.listen(8098, '0.0.0.0');
