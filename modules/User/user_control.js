const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
Usermodel = require("../User/user");
const jwt = require("jsonwebtoken");

const login = async (username, password) => {
  const user = await Usermodel.findOne({ username });
  if (user && bcryptjs.compareSync(password, user.password)) {
    return user;
  }
};

const reg = async (name, username, password) => {
  try {
    let result;
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    const checkusername = await Usermodel.findOne({ username: username });
    console.log(checkusername);
    if (checkusername) {
      result = 400;
    } else {
      const newUser = new Usermodel({
        name,
        username,
        password: hashPassword,
      });
      result = await newUser.save();
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
const list = async (_id) => {
  let user;
  if (_id) {
    user = await Usermodel.findById(_id);
  } else {
    user = await Usermodel.find({});
  }
  return user;
};
const changepass = async (username, passold, passnew) => {
  try {
    const check = await Usermodel.findOne({ username });
    console.log(check);
    console.log(passold);
    let result = null;
    if (check && bcryptjs.compareSync(passold, check.password)) {
      const salt = bcryptjs.genSaltSync(10);
      const hashPassword = bcryptjs.hashSync(passnew, salt);
      check.password = hashPassword ?? check.password;
      result = await check.save();
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

const update = async (username, name) => {
  try {
    let result;
    const check = await Usermodel.findOne({ username });
    console.log(check);
    if (check) {
      check.name = name ?? check.name;
      result = await check.save();
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

const del = async (id) => {
  try {
    const user = await Usermodel.deleteOne({ _id: id });
    return user;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { login, reg, list, changepass, del, update };
