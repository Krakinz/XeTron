const mongoose = require("mongoose");
const welcomeSchema = new mongoose.Schema({
  Welcome: {
    type: String,
  },
  Ӽɛȶʀօռֆɨɖ: String,
});
const MessageModel = (module.exports = mongoose.model("welcomer", welcomeSchema));