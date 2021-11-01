'use strict';

const express = require("express");
const app = express();
const http = require("http");
const cors = require('cors');
const server = http.Server(app);

require('dotenv').config();

const corsOptions = {
	origin: ["http://localhost:4200"],
	credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//---------------------------- ******** ---------------------------------

app.use('/', require("./routes/app.routes")(app));

app.use(function (req, res, next) {
    // Error first callback
    next();
});

app.use(express.static("public"));
//---------------------------- ******** ---------------------------------


const port = process.env.port || 2000;
app.set("port", port);

server.listen(port, () => {
    console.info(`Server is up and running on port ${port}`);
});

