const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

require('./database/mongodb');

const routes = require('./route/web');


const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

// server open in specific port
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is runing on ${PORT}`);
    console.log(`${
        process.env.APP_URL
    }:${PORT}`);
});


module.exports = app;