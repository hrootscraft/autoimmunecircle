// fallback for 404 ie something that is not a route
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//setup a middleware for custom error handling - when status code is
// 500/402/... and the html is still served, handle this basically
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.NODE_ENV === "production" ? null : err.stack, //if not in production, we'd want a stack trace
  });
};

export { notFound, errorHandler };
