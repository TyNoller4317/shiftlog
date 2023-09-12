const express = require("express");
const dotenv = require("dotenv").config();
const shiftlogRoutes = require("./routes/shiftlogRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use("/api/shiftlog", shiftlogRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
