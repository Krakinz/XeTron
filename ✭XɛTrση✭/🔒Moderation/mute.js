"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
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
      const redArea = `โ${poke.toUpperCase()} says ๐๐จ๐ครฉ๐๐ฉ๐ฌ๐ข๐ \n-โงช   Wrong Usage!\n\n๐ง๐๐ฌ๐๐ ๐\n+โงช   ${message.client.prefix
        }${newScpt.toLowerCase()} <mention>`;
      const cyanArea = `๐ก${newScpt} Details:\n\nMutes the specified user.`;
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
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");