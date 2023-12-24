const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect("your-mongodb-url");

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Admin Routes
app.post("/admin/signup", (req, res) => {
  const { username, password } = req.body;

  Admin.create({
    username,
    password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

app.post("/admin/courses", (req, res) => {
  const { title, description, price, image } = req.body;
  Course.create({
    title,
    description,
    price,
    image,
  });
});

app.get("/admin/courses", (req, res) => {
  Course.find().then((courses) => {
    res.json(courses);
  });
});

// User Routes
app.post("/users/signup", (req, res) => {
  const { username, password } = req.body;
  User.create({
    username,
    password,
  });
  res.json({
    message: "User created successfully",
  });
});

app.get("/users/courses", (req, res) => {
  Course.find().then((courses) => {
    res.json(courses);
  });
});

app.post("/users/courses/:courseId", (req, res) => {
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

app.get("/users/purchasedCourses", (req, res) => {
  // Implement fetching purchased courses logic
  const { username } = req.headers;

  User.findOne({ username })
    .populate("courses")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: "Error fetching courses" });
      } else {
        res.status(200).send(user.courses);
      }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
