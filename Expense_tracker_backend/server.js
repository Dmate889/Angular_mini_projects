const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on: https://localhost:${PORT}`);
});




