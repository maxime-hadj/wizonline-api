const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const filepath = ('./db.sqlite')

// db connection test
// let db = new sqlite3.Database('./db.sqlite', err => {
//   if (err)
//   throw err;
//   console.log('logged to db');
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