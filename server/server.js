const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Serve static files
app.use(express.static('build'));

// Route includes
const weatherRouter = require('./routes/weather.router');

/* Routes */
app.use('/weather', weatherRouter);



// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});