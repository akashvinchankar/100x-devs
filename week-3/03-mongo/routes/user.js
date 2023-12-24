const { Router } = require("express");
const router = Router();
import { User, Course } from "../db";
const userMiddleware = require("../middleware/user");

// User Signup
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Courses
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({ published: true });
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Purchase Course
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);

    if (!course || !course.published) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Implement purchase logic here

    res.json({ message: "Course purchased successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get Purchased Courses
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Implement logic to retrieve user's purchased courses here

    res.json({ purchasedCourses: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
