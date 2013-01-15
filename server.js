var dir = process.argv[2] || __dirname;

var connect = require('connect');
connect.createServer(
    connect.static(dir)
).listen(1234);