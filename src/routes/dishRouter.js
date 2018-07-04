import express from 'express';

const dishRouter = express.Router();
dishRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('will send all dishes');
  })
  .post((req, res, next) => {
    res.end('create dishes!' + req.body.name);
  });

export default dishRouter;
