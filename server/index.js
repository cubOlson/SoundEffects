const path = require('path');
const express = require("express");
var cors = require('cors')

const PORT = process.env.PORT || 3001;

const app = express();

let dataArray = ["No info to report"];

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/api", (req, res) => {
  res.json({ message: dataArray });
});

app.post("/api", (req, res) => {
  console.log(req.url)
  const {theObject} = req.body
  console.log(theObject)
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});