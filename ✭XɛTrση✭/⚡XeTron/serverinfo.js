"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  cooldown: 5,
  name: "serverinfo",
  category: "utility",
  description: "Shows info about a server",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    //command
    const mention = message.member;
    const afk =
      message.guild.afkChannel === null ? "`None`" : message.guild.afkChannel;
    let servericon = message.guild.iconURL;
    let verifLevels = {
      NONE: "None",
      LOW: "Low",
      MEDIUM: "Medium",
      HIGH: "(โฏยฐโกยฐ๏ผโฏ๏ธต  โปโโป (High)",
      VERY_HIGH: "โปโโปใใฝ(เฒ ็เฒ )ใๅฝกโปโโป (Very High)",
    };
    let region = {
      brazil: "Brazil",
      "eu-central": "Central Europe",
      singapore: "Singapore",
      "us-central": "U.S. Central",
      sydney: "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      london: "London",
      amsterdam: "Amsterdam",
      hongkong: "Hong Kong",
      russia: "Russia",
      southafrica: "South Africa",
      india: "India",
    };
    const serverembed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .setThumbnail(servericon)
      .addField(
        `General Info`,
        `Owner: ${message.guild.owner} \nRegion: \`${
          region[message.guild.region]
        }\` \nVerification Lvl: \`${
          verifLevels[message.guild.verificationLevel]
        }\``
      )
      .addField(
        `Overview`,
        `Total Channels: \`${
          message.guild.channels.cache.size
        }\` \nText Channels: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_TEXT")
            .size
        }\` \nVoice Channels: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_VOICE")
            .size
        }\` \nAFK Channel: ${afk} \nAFK Timeout: \`${
          message.guild.afkTimeout
        } sec\` \nTotal Roles: \`${
          message.guild.roles.cache.size
        }\` \nTotal Emojis: \`${message.guild.emojis.cache.size}\``
      )
      .addField(
        `Member Info`,
        `Total Members: \`${message.guild.memberCount}\` \nHumans: \`${
          message.guild.members.cache.filter((member) => !member.user.bot).size
        }\` \nBots: \`${
          message.guild.members.cache.filter((member) => member.user.bot).size
        }\``
      )
      .addField(
        `Misc. Info`,
        `You Joined on: \n\`${moment(mention.joinedAt).format(
          "dddd, MMMM Do YYYY, h:mm:ss A"
        )}\` \nCreated On: \n\`${moment(message.guild.createdAt).format(
          "dddd, MMMM Do YYYY, h:mm:ss A"
        )}\``
      )
      .setThumbnail(message.guild.iconURL())
      .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL())
      .setColor("RANDOM")
      .setTimestamp();

    message.reply({
      embeds: [serverembed]
    });
  },
};
"๐";
"๐";
"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";