const express = require('express');
const app = express();
const env = require('./config/environment');

const mongoose = require('mongoose');
mongoose.connect(env.dbUri);

const router = require('./config/router');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('dev'));

console.log(env.port, 'is port');

// app.use(express.static(`${__dirname}/public`));
// app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use('/api', router);

app.listen(env.port, () => console.log(`Express is running on port ${env.port}`));

module.exports = app;
