const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema(
  {
    name: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("user", userschema);
