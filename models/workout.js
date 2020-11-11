const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please specify exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    require: "Please enter exercise name"
                },
                duration: {
                    type: Number,
                    required: "Please specify duration of exercise (minutes)"
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
                distance: {
                    type: Number
                }
            }


        ]
    },

    {
        toJSON: {
            virtuals: true
        }

    }

);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;