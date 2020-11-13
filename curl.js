const request = require('request');


module.exports = function (fileName) {
  request.get(fileName, (err, response, body) => {
    if (err) {
      throw err
    } else {
      process.stdout.write('statusCode:', response && response.statusCode);
      process.stdout.write(body);
      process.stdout.write('\nprompt > ');
    }
  })
}
