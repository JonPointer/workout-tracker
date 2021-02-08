const Workout = require("../models/workout.js");

// Routes:

module.exports = (app) => {

    // Route to return all workouts and compute the total duration for each workout
    app.get("/api/workouts", (req, res) => {
        // First sum up the duration of exercises for each workout (day)
        Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" },
                }
            }
        ])
            // Now return the database 
            .then(dbWorkouts => {
                console.log("Workouts: " + dbWorkouts);
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Route to return the last 7 workouts and compute the total duration for each workout
    app.get("/api/workouts/range", (req, res) => {
        Workout.aggregate([
            {
                // Select the last 7 workouts
                $limit: 7
            },
            {
                // Now compute the total duration with these last 7 workouts
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" },
                }
            }
        ])
            // Now return the database 
            .then(dbWorkouts => {
                console.log("Workouts: " + dbWorkouts);
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Route to add a workout
    app.post("/api/workouts", ({body}, res) => {
        // set the day
        let day = new Date();
        // Create the workout
        Workout.create({day, body})
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    // Route to add exercises to an existing workout
    app.put("/api/workouts/:id", (req, res) => {
        let bodyExercises = req.body;
        Workout.updateOne({ _id: req.params.id }, { $push: { "exercises": bodyExercises }})
            .then(dbWorkouts => {
                res.json(dbWorkouts);
            })
            .catch(err => {
                res.json(err);
            });
    });
};

