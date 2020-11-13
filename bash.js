const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');
const curl = require('./curl.js');

process.stdout.write('prompt > ');

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdin.on('data', (data) => {
  const arr = data.toString().trim().split(' ');
  const cmd = arr[0];
  const arg = arr[1];

  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd === 'cat') {
    cat(done, arg);
  } else if (cmd === 'curl') {
    curl(done, arg);
  }
});
