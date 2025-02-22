const sqlite3 = require('sqlite3');


const db = new sqlite3.Database(
    "./expenses.db",
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if(err)
            console.log("An error occurred during the creation of the database")
        else console.log("The database has been created")
    }
);

db.run(
    "CREATE TABLE IF NOT EXISTS mainIncome (id INTEGER PRIMARY KEY, income INTEGER)"
);

function updateIncome(income){
    const query = "UPDATE mainIncome SET income = income - ?";

    db.run(query, [income], err => {
        if(err) console.log(`˙There was a problem running the following queryÉ ${query}`);
        else console.log("Income has been updated")
    })

}


module.exports = {
    updateIncome
}