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
module.exports = async (oldThread, newThread) => {
  const data = await channelData.findOne({
    Ӽɛȶʀօռֆɨɖ: newThread.guild.id
  });
  if (!data) return;
  if (oldThread.name !== newThread.name) {
    newThread.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle(`${oldThread.name}`)
        .addField(
          "Thread Name Changed",
          `${oldThread.name} => ${newThread.name}`,
          true
        ),
      ],
    });
  } else if (oldThread.rateLimitPerUser !== newThread.rateLimitPerUser) {
    newThread.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle(`${oldThread.name}`)
        .addField(
          "Thread Slowmode Updated",
          `${oldThread.rateLimitPerUser} => ${newThread.rateLimitPerUser}`
        ),
      ],
    });
  } else if (oldThread.archived !== newThread.archived) {
    newThread.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle(`${oldThread.name}`)
        .addField(
          "Thread Archive Status Changed",
          `${oldThread.archived ? "Yes" : "No"} => ${
              newThread.archived ? "Yes" : "No"
            }`
        ),
      ],
    });
  }
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");