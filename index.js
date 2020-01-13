const express = require("express");

const app = express();
const PORT = 3000;

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use(express.static(__dirname + "/index.html"));

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
