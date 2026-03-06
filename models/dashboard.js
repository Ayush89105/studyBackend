const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  performance: Number,
  rating: Number,
  attendance: Number,
  feesStatus: String,
  monthlyPerformance: [
    {
      month: String,
      score: Number
    }
  ],
  attendanceRecord: {
    present: Number,
    absent: Number
  }
});

module.exports = mongoose.model("Dashboard", dashboardSchema);