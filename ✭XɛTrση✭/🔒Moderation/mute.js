"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const Discord = require("discord.js");
const ms = require("ms");
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
  name: "mute",
  description: "Mutes the specified user.",
  usage: "Mute @user [time] [reason]",
  run: async (client, message, args, Discord) => {
    const member = message.mentions.members.first();
    let time = args[1];
    const reason = args.slice(2).join(" ");
    const role = message.guild.roles.cache.find(
      (role) => role.name === "Muted"
    );

    if (!member) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `❌${poke.toUpperCase()} says 𝐏𝐨𝐤é𝐎𝐩𝐬𝐢𝐞 \n-⧪   Wrong Usage!\n\n🧀𝐔𝐬𝐚𝐠𝐞\n+⧪   ${message.client.prefix
        }${newScpt.toLowerCase()} <mention>`;
      const cyanArea = `💡${newScpt} Details:\n\nMutes the specified user.`;
      require("dotenv").config();
      await message.react("❌");
      return await message.reply({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setURL("https://github.com/krakinz")
          .setColor(process.env.redArea || "#B33F40")
          .setTitle(`\`\`\`${newScpt} Command Helper\`\`\``)
          .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
          .setAuthor("⚡XΣTЯON⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
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
    if (member.id === client.user.id) {
      return await message.reply(`\`\`\`diff
-${message.author.username}, You can not do that to Me Bruv!
\`\`\``);
    }

    if (!time) {
      return await message.reply(`\`\`\`diff
-${message.author.username}, Tell the time!
\`\`\``);
    }
    if (!reason) {
      return await message.reply(`\`\`\`diff
-${message.author.username}, Tell me a reason
\`\`\``);
    }

    if (member.id === message.author.id)
      return message.reply("You cant mute your self!");
    if (member.id === client.id) return message.reply("You cant mute me!");

    if (!role) {
      try {
        message.reply("No muted role.. making one..!");
        let muterole = await message.guild.roles.create({
          data: {
            name: "Muted",
            permissions: [],
          },
        });
        message.guild.channels.cache
          .filter((c) => c.type === "text")
          .forEach(async (channel, id) => {
            await channel.createOverwrite(muterole, {
              SEND_MESSAGES: false,
              ADD_REACTIONS: false,
            });
          });
        message.reply(
          new Discord.MessageEmbed()
          .setDescription("Muted role has sucessfully been created")
          .setColor("GREEN")
        );
      } catch (error) {
        console.log(error);
      }
    }
    let role2 = message.guild.roles.cache.find((role) => role.name === "Muted");
    if (member.roles.cache.has(role2)) {
      return await message.reply(`\`\`\`diff
-${message.author.username}, User is already muted!
\`\`\``);
    }

    if (
      member.roles.highest.position >= message.member.roles.highest.position
    ) {
      return await message.reply(`\`\`\`diff
-${message.author.username}, You cant mute this user
\`\`\``);
    }

    await member.roles.add(role2);
    message.reply(
      `${member.user.username} has been muted for ${ms(
        ms(time)
      )}, Reason: ${reason}`
    );

    setTimeout(() => {
      member.roles.remove(role2);
    }, ms(time));
  },
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");