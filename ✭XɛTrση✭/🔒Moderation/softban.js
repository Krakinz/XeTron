"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const Discord = require("discord.js");
const {
  PokeList
} = require("../../pokelist");
var path = require("path");
let poke = PokeList[Math.floor(Math.random() * PokeList.length)];
console.log(poke);
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toUpperCase();
module.exports = {
  cooldown: 5,
  name: "softban",
  description: "Soft Ban a User",
  userPerms: ["BAN_MEMBERS"],
  botPerms: ["EMBED_LINKS", "BAN_MEMBERS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!banMember) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `โ${poke.toUpperCase()} says ๐๐จ๐ครฉ๐๐ฉ๐ฌ๐ข๐ \n-โงช   Wrong Usage!\n\n๐ง๐๐ฌ๐๐ ๐\n+โงช   ${message.client.prefix
        }${newScpt.toLowerCase()} <mention>`;
      const cyanArea = `๐ก${newScpt} Details:\n\nSoft Ban a User in the server.`;
      require("dotenv").config();
      await message.react("โ");
      return await message.reply({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setURL("https://github.com/krakinz")
          .setColor(process.env.redArea || "#B33F40")
          .setTitle(`\`\`\`${newScpt} Command Helper\`\`\``)
          .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
          .setAuthor("โกXฮฃTะฏONโก", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setFooter(`๐๐ฝRequested by ${message.author.username}`, message.author.avatarURL({
            dynamic: true
          })).setDescription(`**\`\`\`diff
${redArea}\`\`\`

\`\`\`fix
${cyanArea}
\`\`\`**`),
        ],
      });
    }
    if (banMember.id === client.user.id) {
      return await message.reply(`\`\`\`diff
-You can not do that to Me Bruv!
\`\`\``);
    }
    if (banMember.id === message.guild.owner.id) {
      return await message.reply(`\`\`\`diff
-You cannot SoftBan the Server Owner
\`\`\``);
    }
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given!";

    banMember
      .send({
        embed: {
          color: "#ff0019",
          description: `Hello, you have been banned from ${message.guild.name} for violating Server Rules`,
        },
      })
      .then(() =>
        message.guild
        .member(banMember)
        .ban(banMember, {
          days: 1,
          reason: reason
        })
      )
      .then(() =>
        message.guild.members
        .unban(banMember.id)
        .catch((err) => console.log(err))
      );

    let embed = new Discord.MessageEmbed()
      .setThumbnail(banMember.user.displayAvatarURL())
      .setColor("RANDOM")
      .addField("Moderation:", "SOFT BAN")
      .addField("Banned:", banMember.user.username)
      .addField("Moderator:", message.author.username)
      .addField("Reason:", reason)
      .setTimestamp();

    message.reply({
      embeds: [embed]
    });
  },
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");