const express = require('express')
const serverless = require("serverless-http");

// Create an instance of the Express app
const app = express();

// Create a router to handle routes
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.get('/test', (req, res) => {
    res.send('Hello World!')
})

// Use the router to handle requests to the `/.netlify/functions/api` path
app.use(`/.netlify/functions/api`, router);

// Export the app and the serverless function
//module.exports = app;
module.exports.handler = serverless(app);