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

app.post("/setincomePlus", (req, res) => {
  const { income } = req.body;
  console.log("The income received from the FE: " + JSON.stringify(req.body));
  db.updateIncomePlus(income, (err) => {
    if (err) {
      console.log("Error occurred when calling POST setincome");
      return res
        .status(500)
        .json({ error: "Error occurred when calling POST setincomePlus" });
    }
    return res.status(200).json({ message: "Income has been updated" });
  });
});

app.post("/setincomeMinus", (req, res) => {
  const { income } = req.body;
  db.updateIncomeMinus(income, (err) => {
    if (err) {
      console.log("Error occurred when calling POST setincome");
      return res
        .status(500)
        .json({ error: "Error occurred when calling POST setincomeMinus" });
    }
    return res.status(200).json({ message: "Income has been updated" });
  });
});

app.get("/getincome", (req, res) => {
  db.selectIncome((err, rows) => {
    if (err)
      return res.status(500).json({
        error: "Database error when calling GET income",
        details: err.message,
      });
    else return res.status(200).json({ rows });
  });
});

app.post("/setCategory", (req, res) => {
  const { category, amount } = req.body;
  db.setCategories(category, amount, (err) => {
    if (err) {
      console.log(`Error occurred when calling POST /setCategory`);
      res
        .status(500)
        .json({ message: "Error occurred when calling POST /setCategory" });
    } else
      res
        .status(200)
        .json({ message: `${category} has been increased with ${amount}` });
  });
});
