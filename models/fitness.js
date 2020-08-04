const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a workout type"
  },
  name: {
    type: String,
    required: "Enter an exercise name"
  },
  duration: {
    type: Number,
    default: 2
  },
   weight: {
    type: Number,
    default: 100,
  },
  reps: {
    type: Number,
    default: 10
  },
  sets: {
    type: Number,
    default: 2
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;