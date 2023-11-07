const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/blog", (req, res) => {
  res.send('Hello Blog my name is Neetu');
});

app.listen(3000, () => {
  console.log(`Node api is running on port 3000`);
});
