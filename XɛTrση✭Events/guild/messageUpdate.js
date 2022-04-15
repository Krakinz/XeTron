"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const messageData = require("../../XɛTrση✭Database/messagelog");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (oldMessage, newMessage) => {
  const data = await messageData.findOne({
    Ӽɛȶʀօռֆɨɖ: newMessage.guild.id
  });
  if (!data) return;
  const channel = data.Ӽɛȶʀօռƈɦɨɖ;
  newMessage.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
    embeds: [
      new MessageEmbed()
      .setTimestamp()
      .setColor(process.env.XeTrons || "#FFBF00")
      .setURL("https://github.com/krakinz")
      .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
      .setTitle("Message Edited")
      .setDescription(
        `${newMessage.author} edited their message in ${newMessage.channel}`
      )
      .addField(
        "Jump to Message",
        `[Click Me](https://discord.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id})`
      )
      .addField(`Old Message`, `${oldMessage.content}`, true)
      .addField("New Message", `${newMessage.content}`, true),
    ],
  });
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");