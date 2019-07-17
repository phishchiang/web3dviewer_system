const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware : we can accept the req.body data
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('hello word'));
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the web 3d viewer API" })
);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
