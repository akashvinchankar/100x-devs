import { User } from "../db";

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  if (!username || !password) {
    res.status(401).send("Unauthorized");
  }

  const user = await User.findOne({ username, password });

  if (!user) {
    res.status(401).send("Unauthorized");
  }
}

module.exports = userMiddleware;
