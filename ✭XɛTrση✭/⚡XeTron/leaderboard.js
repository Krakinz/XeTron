"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙"
"🐙"
const Discord = require("discord.js");
var {
  MessageEmbed
} = require("discord.js");
var Users = require("../../XɛTrση✭Database/xp.js");
module.exports = {
  cooldown: 5,
  name: "leaderboard",
  description: "Show the top 10 leaderboard!",
  run: async (bot, message, args) => {
    Users.find({
        serverID: message.guild.id,
      })
      .sort([
        ["xp", "descending"]
      ])
      .exec((err, res) => {
        if (err) console.log(err);
        let embed = new MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setTitle(`⚡乂ΣTЯỖN☆•version: ${XeTronGen}`)
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setDescription(`Hey ${member}\nThis is the Leaderboard of , Welcome to **${member.guild.name}**`)
          .setFooter(`Powered by ${bot.user.username}`, bot.user.displayAvatarURL());
        if (res.length === 0) {
          embed.setColor("red");
          embed.addField("No Data :c");
        } else if (res.length < 10) {
          embed.setColor("#351B96");
          for (i = 0; i < res.length; i++) {
            let member =
              message.guild.members.cache.get(res[i].did) || "User is gone :/";
            if (member === "User is gone :/") {
              embed.addField(`${i + 1}. ${member}`, `**Level**: ${res[i].level} || **XP**: ${res[i].xp}`);
            } else {
              embed.addField(`${i + 1}. ${member.user.username}`, `**Level**: ${res[i].level} || **XP**: ${res[i].xp}`);
            }
          }
        } else {
          embed.setColor("#351B96");
          for (i = 0; i < 10; i++) {
            let member = message.guild.members.get(res[i].did) || "User is gone :/";
            if (member === "User is gone :/") {
              embed.addField(`${i + 1}. ${member}`, `**Level**: ${res[i].level} || **XP**: ${res[i].xp}`);
            } else {
              embed.addField(`${i + 1}. ${member.user.username}`, `**Level**: ${res[i].level} || **XP**: ${res[i].xp}`, true);
            }
          }
        }
        message.channel.send({
          embeds: [embed]
        });
      });
  },
};
"🐙"
"🐙"
"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";