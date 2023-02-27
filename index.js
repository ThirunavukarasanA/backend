const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./Config/db");
const Routers = require("./Router/Router");
const app = express();

// bodyParser for handling form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// db connectiions
db;

// Router
app.use("/api", Routers);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port http://localhost:${process.env.PORT}`);
});
