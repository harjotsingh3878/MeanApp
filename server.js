// const http = require('http');
// const app = require('./backend/app');

// const port = process.env.PORT || 3000

// app.set('port', process.env.PORT || 3000)
// const server = http.createServer(app);

// server.listen(port);

const http = require('http');
// const debug = require('debug')("node-angular");
const app = require('./backend/app');

const port = process.env.PORT || 3000

app.set('port', process.env.PORT || 3000)
const server = http.createServer(app);

server.listen(port);