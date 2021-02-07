const router = require("express").Router();
const Workout = require("../models/workout.js");

// Initial seed of database - used once to fill database and then commented out 

// let workoutSeed = [
//     {
//       day: new Date().setDate(new Date().getDate()-10),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Bicep Curl",
//           duration: 20,
//           weight: 100,
//           reps: 10,
//           sets: 4
//         }
//       ]
//     },
//     {
//       day: new Date().setDate(new Date().getDate()-9),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Lateral Pull",
//           duration: 20,
//           weight: 300,
//           reps: 10,
//           sets: 4
//         }
//       ]
//     },
//     {
//       day: new Date().setDate(new Date().getDate()-8),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Push Press",
//           duration: 25,
//           weight: 185,
//           reps: 8,
//           sets: 4
//         }
//       ]
//     },
//     {
//       day: new Date().setDate(new Date().getDate()-7),
//       exercises: [
//         {
//           type: "cardio",
//           name: "Running",
//           duration: 25,
//           distance: 4
//         }
//       ]
//     },
//     {
//       day: new Date().setDate(new Date().getDate()-6),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Bench Press",
//           duration: 20,
//           weight: 285,
//           reps: 10,
//           sets: 4
//         }
//       ]
//     },
//     {
//       day: new Date().setDate(new Date().getDate()-5),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Bench Press",
//           duration: 20,
//           weight: 300,
//           reps: 10,
//           sets: 4
//         }
//       ]
//     },
//     {
//       day: new Date(new Date().setDate(new Date().getDate() - 4)),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Quad Press",
//           duration: 30,
//           weight: 300,
//           reps: 10,
//           sets: 4
//         }
//       ]
//     },
//     {
//       day: new Date(new Date().setDate(new Date().getDate() - 3)),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Bench Press",
//           duration: 20,
//           weight: 300,
//           reps: 10,
//           sets: 4
//         }
//       ]
//     },
//     {
//       day: new Date(new Date().setDate(new Date().getDate() - 2)),
//       exercises: [
//         {
//           type: "resistance",
//           name: "Military Press",
//           duration: 20,
//           weight: 300,
//           reps: 10,
//           sets: 4
//         }
//       ]
//     }
//   ];
  
//   Workout.deleteMany({})
//     .then(() => Workout.collection.insertMany(workoutSeed))
//     .then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//     })
//     .catch(err => {
//       console.error(err);
//       process.exit(1);
//     });

// Routes:


module.exports = router;




// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.get("/api/transaction", (req, res) => {
//   Transaction.find({})
//     .sort({ date: -1 })
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

