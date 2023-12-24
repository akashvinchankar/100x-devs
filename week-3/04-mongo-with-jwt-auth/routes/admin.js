const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic

  const { username, password } = req.body;
  const admin = new Admin({ username, password });

  admin.save((err, admin) => {
    if (err) {
      res.status(500).send({ message: "Error creating admin" });
    } else {
      res.status(200).send(admin);
    }
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
