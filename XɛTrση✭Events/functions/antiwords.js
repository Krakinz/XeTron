"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const antiwordsData = require("../../XษTrฯฮทโญDatabase/antiwords");
module.exports = async (message) => {
  const antiwords = await antiwordsData.findOne({
    ำผษศถสึีผึษจษ: message.guild.id,
  });
  if (antiwords) {
    if (
      message.content.match("bitch") ||
      message.content.match("hoe") ||
      message.content.match("slut") ||
      message.content.match("nigga") ||
      message.content.match("nigg") ||
      message.content.match("dick") ||
      message.content.match("cunt") ||
      message.content.match("shit") ||
      message.content.match("fuck")
    ) {
      message.delete();
      message.reply("**No Bad Words Allowed Please Stop!**").then((msg) => {
        let time = "4s";
        setTimeout(function () {
          msg.delete();
        }, ms(time));
      });
    } else {
      return;
    }
  } else if (!antiwords) {
    return;
  }
};
