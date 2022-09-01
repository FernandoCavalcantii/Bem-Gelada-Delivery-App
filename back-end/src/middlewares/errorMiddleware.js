const errorMiddleware = (err, _req, res, _next) => {
  if (err.status) {
    const { status, message } = err;
    return res.status(status).json({ message });
  }

  return res.status(500).json({ message: err.message });
};

module.exports = errorMiddleware;
