import http from 'http';

import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));
console.log('__dirname = ', __dirname);

//this is default response
app.use((req, res) => {
  // morgan will replace it to do log work.
  // console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html> <title>hello</title> <body> <h1>title</h1> </body> </html>');
});

const port = 3000;
const hostName = 'localhost';
const server = http.createServer(app);

server.listen(port, hostName, () => {
  console.log(`listen ${hostName}: ${port}`);
});
