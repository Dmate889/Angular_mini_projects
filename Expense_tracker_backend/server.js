const express = require("express");
const db = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on: https://localhost:${PORT}`);
});


app.post("/setincome", (req, res) =>{
    const {income} = req.body;
    db.updateIncome(income, (err) => {
        if(err){
            console.log("Error occurred when calling POST setincome")
            return res.status(500).json({error: 'Error occurred when calling POST setincome'})
        }
        return res.status(200).json({message: 'Income has been updated'});
    })
});

app.get("/income", (req, res) => {
  db.selectIncome((err, rows) => {
    if (err)
      return res
        .status(500)
        .json({
          error: "Database error when calling GET income",
          details: err.message,
        });
    else return res.status(200).json({ income: rows });
  });
});
