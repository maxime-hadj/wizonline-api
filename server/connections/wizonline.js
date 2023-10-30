const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const logger = require("../utils/winston")(__filename);
const filepath = ('./db.sqlite')

// db connection test
// let db = new sqlite3.Database(filepath, (err) => {
// 	if (err) {
// 		console.error(err.message);
// 	}
// 	console.log("Connected to the database.");
// });

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath, sqlite3.OPEN_READONLY);
    } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
    });
    console.log('Successfully connected to the database.');
    return db;
  }
}

module.exports = createDbConnection();