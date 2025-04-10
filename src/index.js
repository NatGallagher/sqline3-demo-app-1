//https://coderslegacy.com/javascript-sqlite3-tutorial-for-beginners-node-js/

const sqlite3 = require('sqlite3').verbose();

//windwos or macos or linux 
//let _dbname = `src\\data\\demodb1.db`
//let _dbname = "src\\data\dashboard.db"

//macos, linux os 
//let _dbname = "src/data/demodb1.db"
let _dbname = "src/data/dashboard.db"

let db = new sqlite3.Database(_dbname, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected successfully.');
});

//insert row 
insert_query = "INSERT INTO user(username, password) VALUES(?, ?)"
values = ["usernine", "pwd9"]
//db.run(insert_query, values)

console.log("row inserted");


//returns all rows 
db.all("SELECT * FROM user", [], (err, rows) => {
    console.log(rows)
})

//returns first row
//db.get("SELECT * FROM user", [], (err, row) => {



db.get("SELECT * FROM user where username=? and password=?", ["user4","pwd4"], (err, row) => {
    if (err) {
        throw err; 
    }
    console.log(row);
});

