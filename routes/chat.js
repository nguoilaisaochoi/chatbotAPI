var express = require("express");
var router = express.Router();

const chat_control = require("../modules/ChatHistory/chat_control");
//đăng nhập
router.post("/add", async (req, res) => {
  try {
    const { username, text, name, id } = req.body;
    let result = await chat_control.add(username, text, name, id);
    if (result) {
      res.json({ data: result });
      console.log(result.text);
    } else {
      res.json({ data: null });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/list", async (req, res) => {
  try {
    const { username } = req.query;
    let result = await chat_control.list(username);
    if (result) {
      res.json({ data: result });
      console.log(result.text);
    } else {
      res.json({ data: null });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/recentchat", async (req, res) => {
  try {
    const { username } = req.query;
    let result = await chat_control.recentchat(username);
    if (result) {
      res.json({ data: result });
      console.log(result.text);
    } else {
      res.json({ data: null });
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    let result = await chat_control.deletechat(id);
    if (result) {
      res.json({ data: result });
    } else {
      res.json({ data: null });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
