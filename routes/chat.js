var express = require("express");
var router = express.Router();

const chat_control = require("../modules/ChatHistory/chat_control");
//đăng nhập
router.post("/add", async (req, res) => {
  try {
    const { username, text, id } = req.body;
    let result = await chat_control.add(username, text, id);
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

module.exports = router;
