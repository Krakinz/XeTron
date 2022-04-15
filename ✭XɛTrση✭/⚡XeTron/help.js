"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
let os = require("os");
require("dotenv").config();
const ms = require("pretty-ms");
const moment = require("moment");
require("moment-duration-format");
let cpuStat = require("cpu-stat");
const Discord = require("discord.js");
const {
  version
} = require("discord.js");
const {
  XeTronGen
} = require("../../package.json");
const {
  version: discordjsVersion
} = require("discord.js");
module.exports = {
  cooldown: 5,
  name: "help",
  description: "Show this Command List",
  botPerms: ["EMBED_LINKS"],
  aliases: [],
  run: async (client, message) => {
    cpuStat.usagePercent(function (err, percent, seconds) {
      const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
      message.reply({
        embeds: [new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setTitle(`⚡乂ΣTЯỖN☆•version: ${XeTronGen}`)
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`🐙**\`Owner\`**`, `**KrakinzKon**`, true)
          .addField(`🛸**\`Uptime\`**`, `**${duration}**`, true)
          .addField(`💻**\`System\`**`, `**${os.arch()}**`, true)
          .addField(`👑**\`Developer\`**`, `**KrakinzLab**`, true)
          .addField(`📡**\`Ping\`**`, `**${client.ws.ping}ms**`, true)
          .addField(`⚙️**\`Engine Version\`**`, `**${XeTronGen}**`, true)
          .addField(`🧀**\`Discord.js\`**`, `**${discordjsVersion}**`, true)
          .addField(`📗**\`Node Version\`**`, `**${process.version}**`, true)
          .addField(`👥**\`Users\`**`, `**${client.users.cache.size}**`, true)
          .addField(`🖥️**\`Platform\`**`, `**\`\`${os.platform()}\`\`**`, true)
          .addField(`📚**\`Library\`**`, `**\`Discord.js v${version}\`**`, true)
          .addField(`📅**\`Created On\`**`, `**${client.user.createdAt}**`, true)
          .addField(`📡**\`Servers\`**`, `**${client.guilds.cache.size}**`, true)
          .addField(`💽**\`CPU usage\`**`, `**\`${percent.toFixed(2)}%\`**`, true)
          .addField(`💬**\`Commands Count\`**`, `**80+ (more being added)**`, true)
          .addField(`🍯**\`Channels\`**`, `**${client.channels.cache.size}**`, true)
          .addField(`🥳**\`Users Serving\`**`, `**${client.commands.size} **`, true)
          .addField(`📜**\`Channel Added\`**`, `**${client.channels.cache.size}**`, true)
          .addField(`⚙️**\`Servers Serving\`**`, `**${client.guilds.cache.size} **`, true)
          .addField(`🐙**\`CPU\`**`, `**${os.cpus().map((i) => `${i.model}`)[0]}**`, true)
          .setAuthor("⚡乂ΣTЯỖN☆•INFOS + HELP MENU", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`**\`🤖 Nodejs\`**`, `**${process.version} on ${process.platform} ${process.arch}**`, true)
          .setFooter(`👈🏽Requested by ${message.author.username}`, message.author.avatarURL({
            dynamic: true
          }))
          .addField(`**\`💾 Memory usage\`**`, `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB**`, true)
          .setDescription(`**\`\`\`fix
𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
\`\`\`**`, true),
        ],
        components: [
          new Discord.MessageActionRow().addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("XɛTrση_Help_Menu")
            .setPlaceholder("⚡乂ΣTЯỖN☆•Hɛlρ⚡Mɛɳυ✭")
            .setMinValues(1)
            .setMaxValues(1)
            .addOptions([{
                label: "XɛTrση",
                description: "Shows all the information commands",
                value: "XɛTrση_XeTron",
                emoji: "⚡",
              },

              {
                label: "Settings",
                description: "Change the bot settings",
                value: "XɛTrση_Settings",
                emoji: "⚙️",
              },
              {
                label: "Anime",
                description: "Shows all the Anime commands!",
                value: "XɛTrση_Anime",
                emoji: "🦋",
              },
              {
                label: "Adventure",
                description: "Shows all the adventure commands",
                value: "XɛTrση_Adventure",
                emoji: "🎲",
              },
              {
                label: "Moderation",
                description: "Shows all the moderation commands",
                value: "XɛTrση_Moderation",
                emoji: "🔒",
              },
              {
                label: "NSFW",
                description: "Shows all the NSFW commands",
                value: "XɛTrση_NSFW",
                emoji: "🔞",
              },
              {
                label: "Utility",
                description: "Shows all the utility commands",
                value: "XɛTrση_Utility",
                emoji: "🔧",
              },
              {
                label: "Games",
                description: "Shows all the game commands",
                value: "XɛTrση_Games",
                emoji: "🎮",
              },
            ])
          ),
        ],
      });
    })
  },
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");