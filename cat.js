const fs = require('fs');

module.exports = function (done, fileName) {
  const pathName = './' + fileName;
  fs.readFile(pathName, 'utf8', (err, data) => {
    if (err) {
      done(err);
    } else {
      done(data);
    }
  });
};
