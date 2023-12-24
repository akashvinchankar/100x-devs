const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../models");
const router = Router();

// Admin Signup
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = new Admin({ username, password });
    await admin.save();
    res.json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Create Course
router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    const { title, description, price, imageLink } = req.body;
    const course = new Course({
      title,
      description,
      price,
      imageLink,
      published: true,
    });
    await course.save();
    res.json({ message: "Course created successfully", courseId: course._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin Get All Courses
router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
