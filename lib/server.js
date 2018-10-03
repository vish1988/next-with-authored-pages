const next = require('next');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const express = require('express');

const options = {
  root: __dirname + '/../static/',
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
};

app.prepare().then(() => {
  const server = express();
  server.get('/robots.txt', (req, res) =>
    res.status(200).sendFile('robots.txt', options)
  );
  server.use(handler);
  server.listen(3000);
});