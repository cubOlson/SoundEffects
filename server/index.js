const path = require('path');
const express = require("express");
var cors = require('cors')

const PORT = process.env.PORT || 3001;

const app = express();

let dataArray = ["No info to report"];

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: dataArray });
});

app.post("/api", (req, res) => {
  console.log(req.url)
  var finalArr = []
  const {soundArr} = req.body
  dataArray = soundArr
  for(let i = 0; i < dataArray.length; i+=25){
    var loopArr = []
    for(let j = 0; j < 25; j++){
      loopArr.push(dataArray[i+j])
    }
    finalArr.push(loopArr)
  }
  console.log(finalArr)
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});