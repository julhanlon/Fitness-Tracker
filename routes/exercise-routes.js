const router = require("express").Router();
const { newWorkout, getWorkout, addExercise, deleteWorkout} = require("../controllers/exercise-controllers");

router.post("/api/workouts", newWorkout);

router.get("/api/workouts", getWorkout);

router.get("/api/workouts/range", getWorkout);


router.put("/api/workouts/:id", addExercise);


router.delete("/api/workouts", deleteWorkout);



module.exports = router;