const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
  // .then(() => {
  //   console.log("Connect To The DB...");
  // })
  // .catch((err) => {
  //   console.error("Connection Error: " + err);
  // });
};

module.exports = connectDB;
