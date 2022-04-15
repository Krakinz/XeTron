"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const voiceData = require("../../XɛTrση✭Database/voiceupdate");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (oldState, newState) => {
  const data = await voiceData.findOne({
    Ӽɛȶʀօռֆɨɖ: newState.guild.id
  });
  if (!data) return;
  let oldUser = oldState.member;
  let newUser = newState.member;
  if (
    (oldUser.voice.channelId !== newUser.voice.channelId &&
      newUser.voice.channelId !== null) ||
    undefined
  ) {
    newState.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Voice State Updates")
        .setDescription(
          `${newUser} joined the voice channel <#${newUser.voice.channelId}>`
        ),
      ],
    });
  } else if (
    (oldUser.voice.channelId !== newUser.voice.channelId &&
      newUser.voice.channelId === null) ||
    undefined
  ) {
    newState.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.NaNKol)
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Voice State Updates")
        .setDescription(
          `${newUser} left the voice channel <#${oldUser.voice.channelId}>`
        ),
      ],
    });
  } else if (oldState.mute !== newState.mute) {
    newState.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Voice State Updates")
        .setDescription(
          `${newUser} was ${newState.mute ? "muted" : "unmuted"}`
        ),
      ],
    });
  } else if (oldState.deaf !== newState.deaf) {
    newState.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [
        new MessageEmbed()
        .setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL("https://github.com/krakinz")
        .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
        .setTitle("Voice State Updates")
        .setDescription(
          `${newUser} was ${newState.deaf ? "deafened" : "undeafened"}`
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