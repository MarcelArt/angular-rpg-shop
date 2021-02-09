const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/challenge1'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/challenge1/index.html');
});

app.listen(8080);