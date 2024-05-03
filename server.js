/*const parent = document.getElementById("reviewContainer")

for(let i = 0;i<10;i++){
    const review = document.createElement('div')
    review.style.cssText= "height: 200px; width: 100%; margin-top: 10px; background-color: rgb(247, 245, 245); border-radius: 10px;"
    parent.appendChild(review)
}*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./path_to_database.db');

/*db.serialize(() => {
    // Create a table
    db.run("CREATE TABLE IF NOT EXISTS students (name TEXT, age INTEGER, gpa REAL)");

    // Add a new entry to a table
    db.run("INSERT INTO students VALUES (?, ?, ?)", ["John", 21, 3.33]);

    // Get existing entries from a table individually
    db.each("SELECT * FROM students", (err, row) => {
        console.log(`${row.name} (${row.age}): ${row.gpa} GPA`);
    });

    // Get existing entries from a table as an array
    db.all("SELECT * FROM students", (err, rows) => {
        for (let row of rows) {
            console.log(`${row.name} (${row.age}): ${row.gpa} GPA`);
        }
    });

    // Update an existing entry in a table
    db.run("UPDATE students SET (age=?, gpa=?) WHERE name=?", [22, 3.4, "John"]);

    // Delete an existing entry in a table
    db.run("DELETE FROM students WHERE name=?", "John");
});

db.close();*/







const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

app.get('/all', (req, res) => {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./airlines.db', sqlite3.OPEN_READWRITE, (err)=>{
        if(err) return console.log(err.message);
        console.log("connection success")
        db.run("CREATE TABLE IF NOT EXISTS AirlineTable (AirlineName TEXT)");

        db.all("SELECT * FROM AirlineTable LIMIT 20", (err, rows) => {
            res.json(rows)
        });
    })
    db.close()
})

app.get('')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


