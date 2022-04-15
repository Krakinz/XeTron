"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const memberData = require("../../XɛTrση✭Database/memberupdate");
const {
  MessageEmbed
} = require("discord.js");
module.exports = async (oldMember, newMember) => {
  const data = await memberData.findOne({
    Ӽɛȶʀօռֆɨɖ: newMember.guild.id
  });
  if (!data) return;
  if (newMember.nickname !== oldMember.nickname) {
    let oldNickname = oldMember.nickname ? oldMember.nickname : oldMember.user.username;
    let newNickname = newMember.nickname ? newMember.nickname : newMember.user.username;
    newMember.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [new MessageEmbed().setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL(`https://github.com/krakinz`)
        .setThumbnail(`${newMember.user.avatarURL()}`)
        .setTitle(`\`\`\`Member🔔Update\`\`\``)
        .addField(`📝**\`${newNickname}\`**`, `**Changed their Nickname**`)
        .addField(`🔎**\`User Tag\`**`, `${newMember.user.tag}`, true)
        .addField(`⚰️**\`Old Nickname\`**`, `${oldNickname}`, true)
        .addField(`🥳**\`New Nickname\`**`, `${newNickname}`, true)
        .setAuthor(`⚡乂ΣTЯỖN☆•`, `https://i.postimg.cc/bwrSWMdK/XeTron.gif`),
      ],
    });
  } else if (newMember.user.username !== oldMember.user.username) {
    let oldusername = oldMember.user.username;
    let newusername = newMember.user.username;
    newMember.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [new Discord.MessageEmbed().setTimestamp()
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL(`https://github.com/krakinz`)
        .setThumbnail(`${newMember.user.avatarURL()}`)
        .setTitle(`\`\`\`Member🔔Update\`\`\``)
        .addField(`📝**\`${newMember.user.tag}\`**`, `**Changed their Username**`)
        .addField(`🔎**\`User Tag\`**`, `${newMember.user.tag}`, true)
        .addField(`⚰️**\`Old Username\`**`, `${oldusername}`, true)
        .addField(`🥳**\`New Username\`**`, `${newusername}`, true)
        .setAuthor(`⚡乂ΣTЯỖN☆•`, `https://i.postimg.cc/bwrSWMdK/XeTron.gif`),
      ],
    });
  } else if (newMember.user.avatarURL() !== oldMember.user.avatarURL()) {
    let oldavatar = oldMember.user.avatarURL();
    let newavatar = newMember.user.avatarURL();
    newMember.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
      embeds: [new Discord.MessageEmbed().setTimestamp()
        .setImage(`${newavatar}`)
        .setThumbnail(`${oldavatar}`)
        .setColor(process.env.XeTrons || "#FFBF00")
        .setURL(`https://github.com/krakinz`)
        .setImage(`${newMember.user.avatarURL()}`)
        .setTitle(`\`\`\`Member🔔Update\`\`\``)
        .addField(`📝**\`${newMember.user.tag}\`**`, `**Changed their Avatar**`)
        .addField(`🔎**\`User Tag\`**`, `${newMember.user.tag}`, true)
        .setAuthor(`⚡乂ΣTЯỖN☆•`, `https://i.postimg.cc/bwrSWMdK/XeTron.gif`),
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