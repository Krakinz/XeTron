"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const Discord = require("discord.js");
const giphy = require("giphy-api")("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");
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
  name: "gif",
  description: "Get gifs based on your search",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    if (args.length === 0) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `โ${poke.toUpperCase()} says ๐๐จ๐ครฉ๐๐ฉ๐ฌ๐ข๐ \n-โงช   Wrong Usage!\n\n๐ง๐๐ฌ๐๐ ๐\n+โงช   ${message.client.prefix
        }${newScpt.toLowerCase()} <Search terms>`;
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
    if (args.length === 1) {
      term = args.toString();
    } else {
      term = args.join(" ");
    }
    giphy.search(term).then(function (res) {
      let id = res.data[0].id;
      let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`;
      const embed = new Discord.MessageEmbed()
        .setTitle(`First result for \`${term}\` on GIPHY`)
        .setImage(msgurl)
        .setColor("RANDOM");
      message.reply({
        embeds: [embed]
      });
    });
  },
};
"๐";
"๐";
"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";