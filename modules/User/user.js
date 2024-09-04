const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema(
  {
    idToken: { type: String },
    name: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", userschema);
