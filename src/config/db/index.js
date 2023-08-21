const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://mongobasic:mongobasic@cluster0.s8gyk.mongodb.net/education_dev",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("success");
  } catch (error) {
    console.log("error connect");
  }
}
module.exports = { connect };
