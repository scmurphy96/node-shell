const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const arr = data.toString().trim().split(' ');
  const cmd = arr[0];
  const arg = arr[1];

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat') {
    cat(arg);
  }
});
