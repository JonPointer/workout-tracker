const express = require('express');
const mongoose = require("mongoose");

const htmlRouter = require('./routes/html-routes.js');
const apiRouter = require('./routes/api-routes.js');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Invoke routes
htmlRouter(app);
apiRouter(app);

// Starting the Express app
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});