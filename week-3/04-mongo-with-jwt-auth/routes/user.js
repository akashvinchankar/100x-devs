const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic

  const { username, password } = req.body;
  const user = new User({ username, password });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: "Error creating user" });
    } else {
      res.status(200).send(user);
    }
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic

  Course.find({}, (err, courses) => {
    if (err) {
      res.status(500).send({ message: "Error fetching courses" });
    } else {
      res.status(200).send(courses);
    }
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic

  const { courseId } = req.params;
  const { username } = req.headers;

  Course.findById(courseId, (err, course) => {
    if (err) {
      res.status(500).send({ message: "Error fetching course" });
    } else {
      User.findOneAndUpdate(
        { username },
        { $push: { courses: course } },
        { new: true },
        (err, user) => {
          if (err) {
            res.status(500).send({ message: "Error updating user" });
          } else {
            res.status(200).send(user);
          }
        }
      );
    }
  });
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic

  const { username } = req.headers;
});

module.exports = router;
