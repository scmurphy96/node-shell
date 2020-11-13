const fs = require('fs');

module.exports = function (fileName) {
  const pathName = './' + fileName;
  fs.readFile(pathName, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    }
  });
};
