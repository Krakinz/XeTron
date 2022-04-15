"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const antiwordsData = require("../../XɛTrση✭Database/antiwords");
module.exports = async (message) => {
  const antiwords = await antiwordsData.findOne({
    Ӽɛȶʀօռֆɨɖ: message.guild.id,
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
