"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const serverData = require("../../XɛTrση✭Database/serverupdate");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (oldGuild, newGuild) => {
  const data = await serverData.findOne({
    Ӽɛȶʀօռֆɨɖ: newGuild.id
  });
  if (!data) return;
  if (newGuild.name !== oldGuild.name) {
    newGuild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Name Changed",
          `${oldGuild.name} => ${newGuild.name}`
        ),
      ],
    });
  } else if (newGuild.iconURL() !== oldGuild.iconURL()) {
    newGuild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Icon Changed",
          `[Old Icon](${oldGuild.iconURL()}) => [New Icon](${newGuild.iconURL()})`
        ),
      ],
    });
  } else if (newGuild.splashURL() !== oldGuild.splashURL()) {
    newGuild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Splash Changed",
          `[Old Splash](${oldGuild.splashURL()}) => [New Splash](${newGuild.splashURL()})`
        )
        .setThumbnail(`${newGuild.splashURL()}`)
        .setTimestamp(),
      ],
    });
  } else if (newGuild.memberCount !== oldGuild.memberCount) {
    newGuild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Members Changed",
          `${oldGuild.memberCount} => ${newGuild.memberCount}`
        ),
      ],
    });
  } else if (newGuild.ownerId !== oldGuild.ownerId) {
    newGuild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Server Updates")
        .addField(
          "Server Owner Changed",
          `${oldGuild.owner.user.username} => ${newGuild.owner.user.username}`
        ),
      ],
    });
  } else {
    return;
  }
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");