var express = require("express");
var router = express.Router();

const chat_control = require("../modules/ChatHistory/chat_control");
//đăng nhập
router.post("/add", async (req, res) => {
  try {
    const {iduser,text, name, id, img } = req.body;
    let result = await chat_control.add( iduser, text, name, id, img);
    if (result) {
      res.json({ data: result });
    } else {
      res.json({ data: null });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/list", async (req, res) => {
  try {
    const { id } = req.query;
    let result = await chat_control.list(id);
    if (result) {
      res.json({ data: result });
    } else {
      res.json({ data: result });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/recentchat", async (req, res) => {
  try {
    const { id } = req.query;
    let result = await chat_control.recentchat(id);
    if (result) {
      res.json({ data: result });
    } else {
      res.json({ data: null });
    }
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { id } = req.query;
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
