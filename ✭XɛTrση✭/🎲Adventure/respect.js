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
  name: "respect",
  description: "Returns Random Respect GIF",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `โ${poke.toUpperCase()} says ๐๐จ๐ครฉ๐๐ฉ๐ฌ๐ข๐ \n-โงช   Wrong Usage!\n\n๐ง๐๐ฌ๐๐ ๐\n+โงช   ${message.client.prefix
        }${newScpt.toLowerCase()} <mention>`;
      const cyanArea = `๐ก${newScpt} Details:\n\n`;
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
          .setAuthor("โกไนฮฃTะฏแปNโโข", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
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
    var gif = [
      `https://media.tenor.com/images/0eb1f1ff68936dbde97bebfa4145e6f0/tenor.gif`,
      `https://media.tenor.com/images/aff79a052e44a086ae473277d7da8a16/tenor.gif`,
      `https://media.tenor.com/images/81e0044564919b3804681952f4191621/tenor.gif`,
      `https://media.tenor.com/images/67e34fd8928748888c93894e0fc07c1d/tenor.gif`,
      `https://media.tenor.com/images/6c6d4aef595b236fa1e925ab1ab43502/tenor.gif`,
      `https://media.tenor.com/images/045b1c2e205826ccc7418bb13cc1bcd7/tenor.gif`,
      `https://media.tenor.com/images/e56d320cdc20d4f8602be39b4e460d49/tenor.gif`,
      `https://media.tenor.com/images/cb6989d452a97107bcff9e6aa8c4ba3d/tenor.gif`,
      `https://media.tenor.com/images/a697ff336053aa2eb4d9ed9a8b8526ea/tenor.gif`,
      `https://media.tenor.com/images/4363c864b009e851dacc13b259a9d75c/tenor.gif`,
      `https://media.tenor.com/images/d73aac94ff4e9b22a94a223ffd9ec651/tenor.gif`,
    ];
    const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} respects ${user.displayName}`)
      .setImage(`${gif[Math.floor(Math.random() * gif.length)]}`)
      .setColor("RANDOM");
    message.reply({
      embeds: [embed]
    });
  },
};
"๐";
"๐";
"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";