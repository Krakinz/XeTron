const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  Ӽɛȶʀօռֆɨɖ: String,
  Ӽɛȶʀօռƈɦɨɖ: String,
});
const messageModel = (module.exports = mongoose.model(
  "messagelogs",
  messageSchema
));