// Middleware for handling auth

import Admin from "../db/index";

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  if (!username || !password) {
    res.status(401).send("Unauthorized");
  }

  const admin = await Admin.findOne({ username, password });

  if (!admin) {
    res.status(401).send("Unauthorized");
  }
}

module.exports = adminMiddleware;
