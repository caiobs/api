import express from "express";

const app = express();

app.use(express.json());

// DB connection
import conn from "./db/conn.js";
conn();

// routes
import routes from "./routes/router.js";

app.use("/api", routes);

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));



