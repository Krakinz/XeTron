"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const Discord = require("discord.js");
const booru = require("booru");
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
  name: "danbooru",
  category: "nsfw",
  description: "Searches danbooru image board",
  botPerms: ["EMBED_LINKS"],
  run: async (bot, message, args, level) => {
    var errMessage = "This is not an nsfw Channel";
    if (!message.channel.nsfw) {
      `❌""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""❌`;
      const redArea = `❌${poke.toUpperCase()} says 𝐏𝐨𝐤é𝐎𝐩𝐬𝐢𝐞 \n-⧪   Wrong Channel !!\n\n🧀𝐔𝐬𝐚𝐠𝐞\n+⧪   ${message.client.prefix
        }${newScpt.toLowerCase()} ❗(𝗜𝗻𝘀𝗶𝗱𝗲 𝗼𝗻𝗹𝘆 𝗡𝗦𝗙𝗪👅𝗖𝗵𝗮𝗻𝗻𝗲𝗹!)`;
      const cyanArea = `💡${newScpt} Details:\n\nSends ${newScpt} nsfw pics`;
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
    if (
      message.content.toUpperCase().includes("LOLI") ||
      message.content.toUpperCase().includes("GORE")
    )
      return message.reply(
        "That kind of stuff is not allowed! Not even in nsfw channels!"
      );
    var query = message.content.split(/\s+/g).slice(1).join(" ");
    booru
      .search("db", [query], {
        random: true
      })
      .then(booru.commonfy)
      .then((images) => {
        for (let image of images) {
          const embed = new Discord.MessageEmbed()
            .setTitle(`Danbooru: ${query}`)
            .setImage(image.common.file_url)
            .setColor(process.env.XeTrons || "#FFBF00")
            .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
            .setFooter(`👈🏽Requested by ${message.author.username}`, message.author.avatarURL({
              dynamic: true
            }))
            .setURL(image.common.file_url);
          return message.reply({
            embeds: [embed]
          });
        }
      })
      .catch((err) => {
        if (err.name === "booruError") {
          return message.reply(`No results found for **${query}**!`);
        } else {
          return message.reply(`No results found for **${query}**!`);
        }
      });
  },
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");