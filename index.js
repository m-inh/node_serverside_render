const express = require('express');
const morgan = require('morgan');
const path = require('path');

const laberGeneratorService = require('./label-generator-service');

const server = express();

server.use(morgan('dev'));

server.get('/', (req, res) => {
	//res.sendFile(path.resolve(__dirname, "./template.html"));
	const label = laberGeneratorService.generateVTPLabel({district_name: "Phú Thọ", order_id: "1548225505200"});

	res.send(label);
});

server.listen(3001, (err) => {
	if (!err) console.log('server is listening on 3000');
});
