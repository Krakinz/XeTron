const mongoose = require("mongoose");
const memberSchema = new mongoose.Schema({
  Ӽɛȶʀօռֆɨɖ: String,
  Ӽɛȶʀօռƈɦɨɖ: String,
});
const memberModel = (module.exports = mongoose.model(
  "memberupdates",
  memberSchema
));