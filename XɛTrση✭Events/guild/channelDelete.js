"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const channelData = require("../../XɛTrση✭Database/channelupdate");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (channel) => {
  const data = await channelData.findOne({
    Ӽɛȶʀօռֆɨɖ: channel.guild.id
  });
  if (!data) return;
  channel.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
    embeds: [
      new MessageEmbed()
      .setTimestamp()
      .setColor(process.env.XeTrons || "#FFBF00")
      .setURL("https://github.com/krakinz")
      .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
      .setTitle("Channel Deleted").setDescription(`**\`\`\`diff
!⪢⪢⪢ CHANNELNAME
-${channel.name}
!⪢⪢⪢ CHANNEL ID
-${channel.id}
!⪢⪢⪢ CHANNEL TYPE
-${channel.type}
\`\`\`**`),
    ],
  });
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");