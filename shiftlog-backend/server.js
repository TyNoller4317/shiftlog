const express = require("express");
const dotenv = require("dotenv").config();
const shiftlogRoutes = require("./routes/shiftlogRoutes");
const userRoutes = require("./routes/userRoutes");
const updateRoutes = require("./routes/updateRoutes");
const connectDb = require("./config/dbConnection");
const cors = require("cors");

const corsOptions = {
  origin: "https://shiftlog-frontend.onrender.com",
};

connectDb();
const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/shiftlog", shiftlogRoutes);
app.use("/api/users", userRoutes);
app.use("/api/updates", updateRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
