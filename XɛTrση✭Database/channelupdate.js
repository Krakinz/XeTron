const mongoose = require("mongoose");
const channelSchema = new mongoose.Schema({
  Ӽɛȶʀօռƈɦɨɖ: String,
  Ӽɛȶʀօռֆɨɖ: String,
});
const channelModel = (module.exports = mongoose.model(
  "channelupdates",
  channelSchema
));