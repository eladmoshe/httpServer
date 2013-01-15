if (process.argv.length < 2){
	console.log("Usage: node server.js <dir name> <port> \rport and dir are optional");
	return;
}
var dir = process.argv[2] || __dirname;
var port = process.argv[3] || 1234
var connect = require('connect');
connect.createServer(
    connect.static(dir)
).listen(port);
console.log("* Server is running at port ",port, "\r* serving directory ",dir);