const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

let dataArray = ["No info to report"];

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: dataArray });
});

app.post("/api", (req, res) => {
  console.log(`Post made with ${req.body}`)
  dataArray = req.body
  res.redirect('/api')
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});