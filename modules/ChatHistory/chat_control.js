const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
ChatModel = require("../ChatHistory/chat");
const jwt = require("jsonwebtoken");

const add = async (username, text, name, id, img) => {
  const user = await Usermodel.findOne({ username });
  let result;
  console.log(id);
  if (user && id) {
    result = await ChatModel.findOneAndUpdate({ _id: id }, { text: text }, { img: img });
    return result;
  } else if (user) {
    const newChat = new ChatModel({
      username: username,
      text: text,
      name: name,
      img: img,
    });
    result = await newChat.save();
    return result;
  }
};

const list = async (username) => {
  let result;
  result = await ChatModel.find({ username: username }).sort({ createdAt: -1 });
  return result;
};

const recentchat = async (username) => {
  let result;
  result = await ChatModel.findOne({ username: username }).sort({ createdAt: -1 });
  return result;
};
const deletechat = async (id) => {
  let result;
  try {
    result = await ChatModel.deleteOne({ _id: id });
  } catch (error) {
    console.log(error);
  }
  return result;
};
module.exports = { add, list, recentchat, deletechat };
