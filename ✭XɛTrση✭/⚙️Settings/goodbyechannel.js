"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const Discord = require("discord.js");
const prefixModel = require("../../XɛTrση✭Database/goodbyechannel");
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
  name: "goodbyechannel",
  description: "Change the goodbye channel per server!",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    if (!args[0]) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `❌${poke.toUpperCase()} says 𝐏𝐨𝐤é𝐎𝐩𝐬𝐢𝐞 \n-⧪   Wrong Usage!\n\n🧀𝐔𝐬𝐚𝐠𝐞\n+⧪   ${message.client.prefix
        }${newScpt.toLowerCase()} <#channel|off>`;
      const cyanArea = `💡${newScpt} Details:
Set the goodbye channel <per server>!`;
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
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
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
    if (message.mentions.channels.first()) {
      const data = await prefixModel.findOne({
        Ӽɛȶʀօռֆɨɖ: message.guild.id
      });
      if (data) {
        await prefixModel.findOneAndRemove({
          Ӽɛȶʀօռֆɨɖ: message.guild.id
        });
        message.reply(
          `Leave Channel set to ${message.mentions.channels.first()}`
        );
        let newData = new prefixModel({
          Bye: message.mentions.channels.first().id,
          Ӽɛȶʀօռֆɨɖ: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setURL("https://github.com/krakinz")
            .setColor(process.env.redArea || "#B33F40")
            .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
            .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
            .setAuthor(
              "♚乂ΣTЯỖN⚡",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ).setDescription(`**\`\`\`diff
+Leave Channel set to ${message.mentions.channels.first()}
\`\`\`**`),
          ],
        });
        let newData = new prefixModel({
          Bye: message.mentions.channels.first().id,
          Ӽɛȶʀօռֆɨɖ: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await prefixModel.findOne({
        Ӽɛȶʀօռֆɨɖ: message.guild.id,
      });
      if (data2) {
        await prefixModel.findOneAndRemove({
          Ӽɛȶʀօռֆɨɖ: message.guild.id
        });
        message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setURL("https://github.com/krakinz")
            .setColor(process.env.redArea || "#B33F40")
            .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
            .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
            .setAuthor(
              "♚乂ΣTЯỖN⚡",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ).setDescription(`**\`\`\`diff
-Leave channel has been turned off!     
\`\`\`**`),
          ],
        });
      } else if (!data2) {
        return message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setURL("https://github.com/krakinz")
            .setColor(process.env.redArea || "#B33F40")
            .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
            .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
            .setAuthor(
              "♚乂ΣTЯỖN⚡",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ).setDescription(`**\`\`\`diff
-Leave channel isn't setup!    
\`\`\`**`),
          ],
        });
      }
    }
  },
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");