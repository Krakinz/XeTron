"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const {
  MessageEmbed
} = require("discord.js");
const channelData = require("../../XɛTrση✭Database/channelupdate");
module.exports = async (thread) => {
  const data = await channelData.findOne({
    Ӽɛȶʀօռֆɨɖ: thread.guild.id
  });
  if (!data) return;
  thread.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
    embeds: [
      new MessageEmbed()
      .setTimestamp()
      .setColor(process.env.NaNKol)
      .setURL("https://github.com/krakinz")
      .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
      .setTitle("Thread Deleted").setDescription(`Name: ${thread.name}
ID: ${thread.id}
Owner: <@!${thread.ownerId}>
Member Count: ${thread.memberCount}
Messages Sent: ${thread.messages.cache.size}
Parent Channel: ${thread.parent.name}`),
    ],
  });
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");