const { createLogger, format, transports } = require('winston');
const { label, combine, timestamp , prettyPrint } = format;

const fileName = 'requestlog.log';	

const logger = createLogger({
  format: combine(
        timestamp(),
        prettyPrint(),
      ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: fileName , level: 'info'  }),
  ],
  exitOnError: false,
});

module.exports = logger;