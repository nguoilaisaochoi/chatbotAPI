const mongoose = require("mongoose");


mongoose
  .connect("mongodb+srv://nguoilaisaochoi:12312311@cluster0.ozvoqdr.mongodb.net/Data", {
  })
  .then(() => console.log(">>>>>>>>>> DB Kết Nối!!!!!!"))
  .catch((err) => console.log(">>>>>>>>> DB Error: ", err));
