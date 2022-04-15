const mongoose = require("mongoose");
const prefixSchema = new mongoose.Schema({
  Prefix: String,
  Ӽɛȶʀօռֆɨɖ: String,
});
const prefixModel = (module.exports = mongoose.model("prefix", prefixSchema));