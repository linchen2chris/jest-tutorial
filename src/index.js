import http from 'http';

import express from 'express';

// let a = sum(3, 4);
// console.log('a = ', a);

// const callback = (err, method) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log('area is ', method.area());
//   }
// };

// let server = http.createServer((req, res) => {
//   console.log(req);
//   res.statusCode = 200;
//   res.res.end(
//     '<html> <title>title</title> <body> <h1>my header</h1> <p> the content </p> </body> </html>'
//   );
// });

const app = express();

app.use((req, res) => {
  console.log(req.headers);
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
