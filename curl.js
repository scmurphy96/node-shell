const request = require('request');

module.exports = function (done, fileName) {
  request.get(fileName, (err, response, body) => {
    if (err) {
      done(err);
    } else {
      done('statusCode:', response && response.statusCode);
      done(body);
    }
  });
};
