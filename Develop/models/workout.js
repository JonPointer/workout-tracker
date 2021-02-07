const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Another way to do this?
// Child schema method:
// const exercisesSchema = new Schema({
//     type: {
//         type: String,
//         trim: true
//     },
//     name: {
//         type: String,
//         type: true
//     },
//     duration: {
//         type: Number
//     },
//     weight: {
//         type: Number
//     },
//     reps: {
//         type: Number
//     },
//     sets: {
//         type: Number
//     },
// });

const workoutSchema = new Schema({
    day: {
        type: Date,
    },
    // If using the child scheme method
    // exercises: exercisesSchema
    
    exercises: [{ type: String, name: String, duration: Number, weight: Number, reps: Number, sets: Number}]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;