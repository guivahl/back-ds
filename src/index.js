const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const Authentication = require('./middlewares/Authentication');

const { PORT } = require('./config');

const app = express();

app.use(cors());

app.use(express.json());

app.use(Authentication.initialize());

app.use(routes);

app.listen(PORT, () => console.log(`Server runnning on port: ${PORT}!`));
