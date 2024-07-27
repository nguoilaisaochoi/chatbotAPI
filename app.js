var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cron = require("node-cron");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var chatRouter = require("./routes/chat");

var app = express();

//connect mongodb
const database = require("./config/db");

const cors = require("cors");
const { default: axios } = require("axios");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/chat", chatRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// delay
const delayedFunction = () => {
  console.log("Hey!");
  this.router.get("/user/connect", async (req, res) => {
    try {
      res.json({ message: "Connected!" });
    } catch (error) {
      console.error(error);
    }
  });
};

const fetchAPI = async () => {
  try {
    await axios.get("https://chatbotapi-nxd4.onrender.com/user/connect");
  } catch (error) {
    console.error("Error fetching API:", error.message);
  }
};

//call sever
cron.schedule("*/8 * * * *", () => {
  fetchAPI();
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
