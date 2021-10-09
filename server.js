const express = require('express');
const { config } = require('dotenv');
require('dotenv').config();
const app = express();
require('rootpath')();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require("./app/models");
const errorHandler = require('./app/middleware/error-handler');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());


db.sequelize.sync();
// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));


require('./app/routes/user.routes')(app);
require('./app/routes/lesson.routes')(app);


// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
