"use strict";
var _a = require('winston'), createLogger = _a.createLogger, format = _a.format, transports = _a.transports;
var label = format.label, combine = format.combine, timestamp = format.timestamp, prettyPrint = format.prettyPrint;
var fileName = 'requestlog.log';
var logger = createLogger({
    format: combine(timestamp(), prettyPrint()),
    transports: [
        new transports.Console(),
        new transports.File({ filename: fileName, level: 'info' }),
    ],
    exitOnError: false,
});
module.exports = logger;
