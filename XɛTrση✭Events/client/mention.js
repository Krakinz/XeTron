"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const prefixModel = require("../../XɛTrση✭Database/setprefix");
require("dotenv").config();
module.exports = async (message, client) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;
  const prefixData = await prefixModel
    .findOne({
      Ӽɛȶʀօռֆɨɖ: message.guild.id,
    })
    .catch((err) => console.log(err));
  if (prefixData) {
    var XeRunner = prefixData.Prefix;
  } else if (!prefixData) {
    XeRunner = process.env.XeFixer;
  }
  client.prefix = XeRunner;
  if (
    message.content === `<@!${client.user.id}>` ||
    message.content === `<@${client.user.id}>`
  ) {
    return message.channel.send(
      `My prefix in this server is \`${XeRunner}\`\n\nTo get a list of commands, type \`${XeRunner}help\``
    );
  }
};