"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const Discord = require("discord.js");
const malScraper = require("mal-scraper");
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
  name: "anime",
  description: "Get info about an anime",
  usage: "[command | Anime]",
  run: async (client, message, args) => {
    const search = `${args}`;
    if (!search) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `❌${poke.toUpperCase()} says 𝐏𝐨𝐤é𝐎𝐩𝐬𝐢𝐞 \n-⧪   Wrong Usage !!\n\n🧀𝐔𝐬𝐚𝐠𝐞\n+⧪   ${message.client.prefix
        }${newScpt.toLowerCase()} <on|off>`;
      const cyanArea = `💡${newScpt} Details:\n\nGet info about any anime!`;
      require("dotenv").config();
      await message.react("❌");
      return await message.reply({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setURL("https://github.com/krakinz")
          .setColor(process.env.redArea || "#B33F40")
          .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
          .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setFooter(`👈🏽Requested by ${message.author.username}`, message.author.avatarURL({
            dynamic: true
          })).setDescription(`**\`\`\`diff
${redArea}\`\`\`

\`\`\`fix
${cyanArea}
\`\`\`**`),
        ],
      });
    }
    `❌""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""❌`;
    malScraper.getInfoFromName(search).then((data) => {
      message.reply({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setAuthor("⚡XɛTrση☆", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setThumbnail(data.picture)
          .setTitle(`My Anime Search result for ${args}`.split(",").join(" "))
          .addField("Title", `\`${data.title}\``, true)
          .addField("Premiered", `\`${data.premiered}\``, true)
          .addField("Broadcast", `\`${data.broadcast}\``, true)
          .addField("Genres", `\`${data.genres}\``, true)
          .addField("English Title", `\`${data.englishTitle}\``, true)
          .addField("Japanese Title", `\`${data.japaneseTitle}\``, true)
          .addField("Type", `\`${data.type}\``, true)
          .addField("Episodes", `\`${data.episodes}\``, true)
          .addField("Rating", `\`${data.rating}\``, true)
          .addField("Aired", `\`${data.aired}\``, true)
          .addField("Score", `\`${data.score}\``, true)
          .addField("Favorite", `\`${data.favorites}\``, true)
          .addField("Ranked", `\`${data.ranked}\``, true)
          .addField("Duration", `\`${data.duration}\``, true)
          .addField("Studios", `\`${data.studios}\``, true)
          .addField("Popularity", `\`${data.popularity}\``, true)
          .addField("Members", `\`${data.members}\``, true)
          .addField("Score Stats", `\`${data.scoreStats}\``, true)
          .addField("Source", `\`${data.source}\``, true)
          .addField("Synonyms", `\`${data.synonyms}\``, true)
          .addField("Status", `\`${data.status}\``, true)
          .addField("Identifier", `\`${data.id}\``, true)
          .addField("Link", `[Website](${data.url})`, true)
          .setFooter(`👈🏽Requested by ${message.author.username}`, message.author.avatarURL({
            dynamic: true
          })),
        ],
      });
    });
  },
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");