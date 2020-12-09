const express = require('express');
const bodyParser = require('body-parser');

// const log = require('log-to-file');
const fs = require('fs');
const customLogger = require('./logger');

const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended:true}));


app.get('/api/getlogs', (request:any,response:any) => {
	fs.readFile('requestlog.log', 'utf8',(error:any, data:any) => {
		if (error) {
			console.error(error);
			return;
		}
		response.send({logs: data});
	});
});

app.post('/api/getcurrenttime',(request:any,response:any) => {

	let date = new Date().toLocaleTimeString();
	// log(`Current time is ${date}`, fileName);
	customLogger.info(date);
	response.send({date});
});

app.listen(port, () => console.log(`Listeing on port: ${port}`));