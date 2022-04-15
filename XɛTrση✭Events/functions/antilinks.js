"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const antilinkData = require("../../XɛTrση✭Database/antilink");
const ms = require("ms");
module.exports = async (message) => {
  const antilink = await antilinkData.findOne({
    Ӽɛȶʀօռֆɨɖ: message.guild.id,
  });
  if (antilink) {
    if (
      message.content.match("https://") ||
      message.content.match("discord.gg") ||
      message.content.match("www.")
    ) {
      message.delete();
      let msg = message.channel
        .send("No links allowed while anti-link is active!")
        .then((msg) => {
          let time = "2s";
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        });
    }
  }
};
