const path = require('path');
const express = require('express');
const app = express();
// const compression = require('compression');
function setCustomCacheControl(res, path) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (express.static.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=0')
  }
}

// app.use(compression())
app.use(express.static(path.join(__dirname, './dist'), {
  maxAge: '365d',
  setHeaders: setCustomCacheControl
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'pages/index/index.html'));
});

// app.get('/*', function (req, res) {
//   res.send(200);
// });

app.listen(8098);
