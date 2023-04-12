const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const ExpressJwt = require('./middlewares/ExpressJwt');

const { PORT } = require('./config');

const app = express();

app.use(cors());

app.use(express.json());

app.use(ExpressJwt.initialize());

app.use(routes);

app.listen(PORT, () => console.log(`Server runnning on port: ${PORT}!`));
