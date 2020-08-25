const fs = require("fs");
const path = require("path");
const glob = require("glob");

glob.sync(path.resolve(__dirname, "../dist/**")).forEach((filePath) => {
  if(!/(\.html|\.css|.js)/.test(filePath)) {
    return
  }
  fs.readFile(filePath, { flag: 'r+', encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.error(err)
    }
    if (!data) {
      return
    }
    const replacedContent = data && data.replace(/\/\/127.0.0.1:12349\//g, '//127.0.0.1:8098/')
    // write file
    try {
      fs.writeFile(filePath, replacedContent, () => {})
    } catch (e) {
      console.log(e)
    }
  })
});
