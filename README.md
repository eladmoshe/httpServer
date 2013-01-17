httpServer
==========

An extremely simple developement http server using node.js for serving the content of a local directory 
on a development machine. 

Useful for super quick and dirty development deployment, without the restriction browsers impose when 
loading html page and scripts directly from the disk.

### Usage: 
```
node server.js <directory to serve> <port to listen> 
```

both parameters are optional. Default directory is the directory of the server file; default port is 1234.

### Prerequisites:
1. Make sure you have node.js installed
2. Run ```npm install```
