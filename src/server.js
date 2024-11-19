const express = require("express");

const app = express();

app.use(express.json());

// DB connection
const conn = require("./db/conn");
conn();

// routes
const routes = require("./routes/router");

app.use("/api", routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));



