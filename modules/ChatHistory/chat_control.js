const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
ChatModel = require("../ChatHistory/chat");

const add = async (iduser, text, name, id, img) => {
  const user = await Usermodel.findById(iduser);
  let result;
  if (user && id) {
    result = await ChatModel.findOneAndUpdate(
      { _id: id },
      { text: text },
      { img: img }
    );
    return result;
  } else if (user) {
    const newChat = new ChatModel({
      username: user.username,
      text: text,
      name: name,
      img: img,
    });
    result = await newChat.save();
    return result;
  }
};

const list = async (id) => {
  let result;
  const user = await Usermodel.findById(id);
  user
    ? (result = await ChatModel.find({ username: user.username }).sort({
        createdAt: -1,
      }))
    : null;
  return result;
};

const recentchat = async (id) => {
  let result;
  const user = await Usermodel.findById(id);
  user
    ? (result = await ChatModel.findOne({ username: user.username }).sort({
        createdAt: -1,
      }))
    : null;
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
