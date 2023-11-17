// require('dotenv').config();
const sqlite3 = require("sqlite3").verbose();
const filepath = "./server/connections/db.sqlite";
const path = require('path');
const express = require('express');
const fs = require('fs');
const https = require('https');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const noCache = require('nocache');
const bodyParser = require('body-parser');
// const httpContext = require('express-http-context');
const morgan = require('morgan');
const compress = require('compression');
const health = require('./server/routes/health');
// const logger = require("../utils/winston")(__filename);

// create express app
// const app = express();


// db connection test
const db = new sqlite3.Database(filepath, sqlite3.OPEN_READONLY, (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Connected to " + filepath);
});

// db.close((err) => {
// 	if (err) {
// 		return console.error(err.message);
// 	}
// 	console.log("Closed the database connection.");
// });

// GET all accounts

allAccounts = 'SELECT * FROM account';
db.all(allAccounts,[],(err, rows) => {
	if (err) {
		console.error(err.message);
	}
	rows.forEach((row) => {
		console.log(row);
	});
});


// GET all nec_soul

allNec = "SELECT * FROM nec_soul";
db.all(allNec, [], (err, rows) => {
	if (err) {
		console.error(err.message);
	}
	rows.forEach((row) => {
		console.log(row);
	});
});


// SQLite knex connection
// const knex = require("knex")({
// 	client: "sqlite3",
// 	connection: {
// 		filename: "./db.sqlite",
// 	},
// });