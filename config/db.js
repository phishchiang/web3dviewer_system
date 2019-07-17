const mongoose = require("mongoose");
// to access the global variable from config we created
const config = require("config");
// so we can use the mongoURI here
const db = config.get("mongoURI");
/*
const connectDB = () => {
  mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
};
*/
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
