"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const Discord = module.require("discord.js");
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
  name: "suggest",
  description: "Suggest Features for Infinity",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const avatar = message.author.avatarURL;
    const suggestchannel = client.channels.cache.get("747756561790664764");
    const suggestion = args.join(" ");
    if (!suggestion) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `โ${poke.toUpperCase()} says ๐๐จ๐ครฉ๐๐ฉ๐ฌ๐ข๐ \n-โงช   Wrong Usage!\n\n๐ง๐๐ฌ๐๐ ๐\n+โงช   ${message.client.prefix
        }${newScpt.toLowerCase()} <suggestion text>`;
      const cyanArea = `๐ก${newScpt} Details:
So you want to suggest some for โก๐๐๐๐ซ๐จ๐งโก?
Cooooolllllllllllllll..
Be sure to send it to our XeTron Moderation Team using this command.`;
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
    message.reply(`\`\`\`diff
+Thanks for Suggesting Features for Infinity.
+Our Mod team will inform you if your Suggestion is accepted or not!
    \`\`\``);
    const embed = new Discord.MessageEmbed()
      .setAuthor(`New Suggestion!`, avatar)
      .setDescription(`${suggestion} \n\nBy: ${message.author.tag}`)
      .setFooter(`ID: ${message.author.id}`)
      .setColor("RANDOM");
    suggestchannel.send({
      embeds: [embed]
    });
  },
  catch (error) {
    const errorlogs = client.channels.cache.get("747750993583669258");
    message.reply(
      "Looks like an error has occured. The error has been reported to the Report Section"
    );
    errorlogs.send(`Error in Suggest Command! \nError: \n` + error);
  },
};
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");