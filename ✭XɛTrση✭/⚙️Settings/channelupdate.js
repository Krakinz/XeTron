"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const channelModel = require("../../XɛTrση✭Database/channelupdate");
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
  name: "channelupdate",
  description: "Channel Updates info per server!",
  userPerms: ["MANAGE_GUILD"],
  run: async (client, message, args) => {
    const data = await channelModel.findOne({
      Ӽɛȶʀօռֆɨɖ: message.guild.id
    });
    if (!args[0] || args[0].length > 18) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `❌${poke.toUpperCase()} says 𝐏𝐨𝐤é𝐎𝐩𝐬𝐢𝐞 \n-⧪   Wrong Usage!\n\n🧀𝐔𝐬𝐚𝐠𝐞\n+⧪   ${message.client.prefix
        }${newScpt.toLowerCase()} <channel ID>`;
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
    if (data) {
      try {
        await channelModel.findOneAndRemove({
          Ӽɛȶʀօռֆɨɖ: message.guild.id
        });
        await client.channels.cache.get(`${args[0]}`).send({
          content: `**Channel :** <#${args[0]}>`,
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.XeTrons || "#FFBF00")
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            )
            .setAuthor(
              "⚡XɛTrση☆",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n+CHANNEL🔔UPDATES\n+Now will Receive All The Channel Updates of this server!\n\`\`\``
            ),
          ],
        });
        let newChannel = new channelModel({
          Ӽɛȶʀօռƈɦɨɖ: args[0],
          Ӽɛȶʀօռֆɨɖ: message.guild.id,
        });
        await newChannel.save();
        await message.reply({
          content: `**Channel :** <#${args[0]}>`,
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.XeTrons || "#FFBF00")
            .setAuthor(
              "⚡XɛTrση☆",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n+CHANNEL🔔UPDATES Is Now Active!\n\`\`\``
            )
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ),
          ],
        });
      } catch (e) {
        await message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.NaNKol)
            .setAuthor(
              "⚡XɛTrση☆",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n-Error sending Confirmation!\n+Please enter a valid Ӽɛȶʀօռƈɦɨɖ and Try-Again.\`\`\``
            )
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ),
          ],
        });
      }
    } else if (!data) {
      try {
        await channelModel.findOneAndRemove({
          Ӽɛȶʀօռֆɨɖ: message.guild.id
        });
        await client.channels.cache.get(`${args[0]}`).send({
          content: `**Channel :** <#${args[0]}>`,
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.XeTrons || "#FFBF00")
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            )
            .setAuthor(
              "⚡XɛTrση☆",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n+CHANNEL🔔UPDATES\n+Now will Receive All The Channel Updates of this server!\n\`\`\``
            ),
          ],
        });
        let newChannel = new channelModel({
          Ӽɛȶʀօռƈɦɨɖ: args[0],
          Ӽɛȶʀօռֆɨɖ: message.guild.id,
        });
        await newChannel.save();
        await message.reply({
          content: `**Channel :** <#${args[0]}>`,
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.XeTrons || "#FFBF00")
            .setAuthor(
              "⚡XɛTrση☆",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n+CHANNEL🔔UPDATES Is Now Active!\n\`\`\``
            )
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ),
          ],
        });
      } catch (e) {
        await message.reply({
          embeds: [
            new Discord.MessageEmbed()
            .setTimestamp()
            .setColor(process.env.NaNKol)
            .setAuthor(
              "⚡XɛTrση☆",
              "https://i.postimg.cc/bwrSWMdK/XeTron.gif"
            )
            .setDescription(
              `\`\`\`diff\n-Error sending Confirmation!\n+Please enter a valid Ӽɛȶʀօռƈɦɨɖ and Try-Again.\`\`\``
            )
            .setFooter(
              `👈🏽Requested by ${message.author.username}`,
              message.author.avatarURL({
                dynamic: true
              })
            ),
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