const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
    },

    exercises: [
        {
            _id: false,
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
        },
        // { _id: false }
    ]
},
    { versionKey: false }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;