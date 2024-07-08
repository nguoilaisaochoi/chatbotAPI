const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatchema = new Schema(
  {
    username: { type: String, require: true },
    text: { type: Array, require: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("chat", chatchema);
