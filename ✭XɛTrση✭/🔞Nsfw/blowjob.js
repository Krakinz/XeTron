"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const Discord = require("discord.js");
const got = require("got");
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
  name: "blowjob",
  category: "nsfw",
  description: "Sends blowjob pics",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    try {
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
            .setAuthor(
              "⚡乂ΣTЯỖN☆•",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
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
      got("https://www.reddit.com/r/Blowjobs/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          let wow = new Discord.MessageEmbed()
            .setDescription(`**` + title + `**`)
            .setImage(amazeme)
            .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
            .setFooter(`👈🏽Requested by ${message.author.username}`, message.author.avatarURL({
              dynamic: true
            }))
            .setColor(process.env.XeTrons || "#FFBF00");
          message.reply({
            embeds: [wow]
          });
        })
        .catch(console.error);
    } catch (err) {
      const errorlogs = client.channels.cache.get("747423875956080801");
      message.reply(
        `Whoops, We got a error right now! This error has been reported to Support center!`
      );
      errorlogs.send(
        `Error in ${message.guild.name}  by ${message.author.username} on  blowjob commands!\n\nError:\n\n ${err}`
      );
    }
  },
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");