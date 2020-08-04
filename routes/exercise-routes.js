const router = require("express").Router();
const { newWorkout, getWorkout, newExercise, deleteWorkout} = require("../controllers/exercise-controllers");

router.post("/api/workouts", newWorkout);

router.get("/api/workouts", getWorkout);

router.put("/api/workouts/:id", newExercise);


router.delete("/api/workouts", deleteWorkout);



module.exports = router;