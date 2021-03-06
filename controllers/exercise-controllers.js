const Workout = require("../models/fitness");

module.exports = {

  newWorkout: (req, res) => {
    Workout.create(req.body)
      .then((res) => {
        res.send(res);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getWorkout: (req, res) =>
    !req.query.id
      ? Workout.find({})
          .then((workouts) => res.send(workouts))
          .catch((err) => res.send(err))
      : Workout.findById(req.query.id)
          .then((workout) => res.send(workout))
          .catch((err) => res.send(err)),

  deleteWorkout: (req, res) =>
    Workout.findByIdAndDelete(req.query.id)
      .then(() => res.send({ msg: "deleted!" }))
      .catch((err) => res.send(err)
      ),

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

        } catch (err) {
          res.send(err);
        }
      },
};