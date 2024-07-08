const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
ChatModel = require("../ChatHistory/chat");
const jwt = require("jsonwebtoken");

const add = async (username, text, id) => {
  const user = await Usermodel.findOne({ username });
  let result;
  console.log(id);
  if (user && id) {
    result = await ChatModel.findOneAndUpdate({ _id: id }, { text: text });
    return result;
  } else if (user) {
    const newChat = new ChatModel({
      username: username,
      text: text,
    });
    result = await newChat.save();
    return result;
  }
};

module.exports = { add };
