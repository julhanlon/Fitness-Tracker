const db = require("../models/fitness");

module.exports = {
  newWorkout: (req, res) => {
    db.Workout.create(req.body)
      .then((res) => {
        res.send(res);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getWorkout: (req, res) =>
    !req.query.id
      ? db.Workout.find({})
          .then((allworkouts) => res.send(allworkouts))
          .catch((err) => res.send(err))
      : db.Workout.findById(req.query.id)
          .then((foundworkout) => res.send(foundworkout))
          .catch((err) => res.send(err)),

  addExercise: async (req, res) => {
    try {
      const workout = await db.Workout.findById(req.params.id);
      workout.exercises.push(req.body);
      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        totalDuration += exercise.duration;
      });
      workout.totalDuration = totalDuration;
      await workout.save();
      res.send(workout);
    } catch (error) {
      res.send(error);
    }
  },

  deleteWorkout: (req, res) =>
    db.Workout.findByIdAndDelete(req.query.id)
      .then(() => res.send({ msg: "success" }))
      .catch((err) => res.send(err)),
};