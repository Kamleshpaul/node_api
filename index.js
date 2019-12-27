const express = require('express')
require('dotenv').config()

const routes = require('./route/web');


const app = express();
routes(app);



// server open in specific port
const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
    console.log(`App is runing on ${PORT}`);
    console.log(`${
        process.env.APP_URL
    }:${PORT}`);
});


module.exports = app;