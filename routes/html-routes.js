// Dependencies
const path = require('path');

// Routes
module.exports = (app) => {

    // index route loads index.html
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/index.html'))
    );

    // stats route loads stats.html
    app.get('/stats', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    );

    // exercise route loads exercise.html
    app.get('/exercise', (req, res) =>
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    );
};