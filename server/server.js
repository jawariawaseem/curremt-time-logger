"use strict";
var express = require('express');
var bodyParser = require('body-parser');
// const log = require('log-to-file');
var fs = require('fs');
var customLogger = require('./logger');
var app = express();
var port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/getlogs', function (request, response) {
    fs.readFile('../logs/requestlog.log', 'utf8', function (error, data) {
        if (error) {
            console.error(error);
            return;
        }
        response.send({ logs: data });
    });
});
app.post('/api/getcurrenttime', function (request, response) {
    var date = new Date().toLocaleTimeString();
    // log(`Current time is ${date}`, fileName);
    customLogger.info(date);
    response.send({ date: date });
});
app.listen(port, function () { return console.log("Listeing on port: " + port); });
