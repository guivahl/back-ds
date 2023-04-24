const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const Authentication = require('./middlewares/Authentication');
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');

const { PORT } = require('./config');

const app = express();

app.use(cors());

app.use(express.json());

app.use(Authentication.initialize());

app.use(routes);

app.use(ErrorMiddleware.handler());

app.listen(PORT, () => console.log(`Server runnning on port: ${PORT}!`));
