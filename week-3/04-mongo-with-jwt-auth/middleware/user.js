function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  if (!username || !password) {
    res.status(401).send({ message: "Unauthorized" });
    return;
  }

  if (username === "user" && password === "user") {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
}

module.exports = userMiddleware;
