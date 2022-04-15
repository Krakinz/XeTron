const mongoose = require("mongoose");
const antiwordsSchema = new mongoose.Schema({
  Ӽɛȶʀօռֆɨɖ: String,
});
const model = mongoose.model("antiwords", antiwordsSchema);
module.exports = model;