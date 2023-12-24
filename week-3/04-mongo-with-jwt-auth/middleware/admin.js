// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;

  if (!username || !password) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  if (username === "admin" && password === "admin") {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
}

module.exports = adminMiddleware;
