var fs = require('fs');

fs.appendFile('/tmp/message.txt', 'data to append', function (err) {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
