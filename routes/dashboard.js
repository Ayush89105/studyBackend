const express = require("express");
const jwt = require("jsonwebtoken");
const Dashboard = require("../models/dashboard");

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const dashboard = await Dashboard.findOne({
      userId: decoded.id
    });

    res.json(dashboard);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

module.exports = router;