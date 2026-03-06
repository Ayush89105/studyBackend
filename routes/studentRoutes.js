const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// POST - insert data
router.post("/", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - fetch all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

module.exports = router;
