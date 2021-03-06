"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
console.clear();
require("dotenv");
const fs = require("fs");
const chalk = require("chalk");
const ascii = require("ascii-table");
const XeTronFol = fs.readdirSync("./โญXษTrฯฮทโญ");
const XeTronTable = new ascii().setHeading("โญXษTrฯฮทโญ", "Health");
const menuEvents = (event) => require(`./XษTrฯฮทโญEvents/menus/${event}`);
const guildEvent = (event) => require(`./XษTrฯฮทโญEvents/guild/${event}`);
const clientEvent = (event) => require(`./XษTrฯฮทโญEvents/client/${event}`);
const otherEvent = (event) => require(`./XษTrฯฮทโญEvents/functions/${event}`);
const {
  Client,
  Collection,
  Intents,
  MessageEmbed
} = require("discord.js");
const XษTrฯฮท = new Client({
  allowedMentions: {
    parse: ["users", "roles", "everyone"]
  },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});
XษTrฯฮท.categories = fs.readdirSync("./โญXษTrฯฮทโญ/");
XษTrฯฮท.commands = new Collection();
XษTrฯฮท.aliases = new Collection();
XษTrฯฮท.setMaxListeners(0);
loadCommands(XษTrฯฮท);
loadEvents(XษTrฯฮท);
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);
  XษTrฯฮท.channels.cache.get(process.env.KRAKINZLAB).send({
    embeds: [new MessageEmbed()
      .setTitle("Uncaught Exception")
      .setDescription(`${err}`).setColor("RED"),
    ],
  });
});
process.on("unhandledRejection", (reason, promise) => {
  console.log("[FATAL] Possibly Unhandled Rejection at: Promise ", promise, " reason: ", reason.message);
  XษTrฯฮท.channels.cache.get(process.env.KRAKINZLAB).send({
    embeds: [new MessageEmbed()
      .setTitle("Unhandled Promise Rejection")
      .addField("Promise", `${promise}`)
      .addField("Reason", `${reason.message}`)
      .setColor("RED"),
    ],
  });
});

XษTrฯฮท.login(process.env.XETRON).then(() => {
  console.log(chalk.bgYellowBright.black(` Successfully logged in as: \n${XษTrฯฮท.user.username}#${XษTrฯฮท.user.discriminator}`));
});

function loadCommands(XษTrฯฮท) {
  for (const folder of XeTronFol) {
    const commandFiles = fs.readdirSync(`./โญXษTrฯฮทโญ/${folder}`).filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`./โญXษTrฯฮทโญ/${folder}/${file}`);
      if (command.name) {
        XษTrฯฮท.commands.set(command.name, command);
        var str = file;
        var newStr = str.slice(0, -3);
        XeTronTable.addRow("โก " + newStr.toUpperCase(), "Ready ๐");
      } else {
        XeTronTable.addRow("โ " + newStr.toUpperCase(), "Not Valid XษTrฯฮท File");
        continue;
      }
      if (command.aliases && Array.isArray(command))
        command.aliases.forEach((alias) => XษTrฯฮท.aliases.set(alias, command.name));
    }
    console.log(XeTronTable.toString());
  }
}


XษTrฯฮท.on('guildCreate', (guild) => {
  console.log("NEW")
});


function loadEvents(XษTrฯฮท) {
  const cooldowns = new Collection();
  XษTrฯฮท.on("error", console.error);
  XษTrฯฮท.on("warn", (info) => console.log(info));
  XษTrฯฮท.on("ready", () => clientEvent("ready")(XษTrฯฮท));
  XษTrฯฮท.on("messageCreate", (meyo) => clientEvent("mention")(meyo, XษTrฯฮท));
  XษTrฯฮท.on("messageCreate", (meyo) => guildEvent("command")(meyo, cooldowns));
  XษTrฯฮท.on("messageDelete", (meyo) => guildEvent("messageDelete")(meyo));
  XษTrฯฮท.on("messageUpdate", (meyo, neyo) => guildEvent("messageUpdate")(meyo, neyo));
  XษTrฯฮท.on("channelCreate", (meyo) => guildEvent("channelCreate")(meyo));
  XษTrฯฮท.on("channelDelete", (meyo) => guildEvent("channelDelete")(meyo));
  XษTrฯฮท.on("channelUpdate", (meyo, neyo) => guildEvent("channelUpdate")(meyo, neyo));
  XษTrฯฮท.on("guildMemberUpdate", (meyo, neyo) => guildEvent("guildMemberUpdate")(meyo, neyo));
  XษTrฯฮท.on("guildMemberAdd", (meyo) => guildEvent("guildMemberAdd")(meyo));
  XษTrฯฮท.on("guildMemberRemove", (meyo) => guildEvent("guildMemberRemove")(meyo));
  XษTrฯฮท.on("guildBanAdd", (meyo) => guildEvent("guildBanAdd")(meyo));
  XษTrฯฮท.on("guildBanRemove", (meyo) => guildEvent("guildBanRemove")(meyo));
  XษTrฯฮท.on("guildUpdate", (meyo, neyo) => guildEvent("guildUpdate")(meyo, neyo));
  XษTrฯฮท.on("threadUpdate", (meyo, neyo) => guildEvent("threadUpdate")(meyo, neyo, XษTrฯฮท));
  XษTrฯฮท.on("threadMembersUpdate", (meyo, neyo) => guildEvent("threadMembersUpdate")(meyo, neyo, XษTrฯฮท));
  XษTrฯฮท.on("threadCreate", (meyo) => guildEvent("threadCreate")(meyo, XษTrฯฮท));
  XษTrฯฮท.on("threadDelete", (meyo) => guildEvent("threadDelete")(meyo, XษTrฯฮท));
  XษTrฯฮท.on("messageCreate", (meyo) => otherEvent("antilinks")(meyo));
  XษTrฯฮท.on("messageCreate", (meyo) => otherEvent("antiwords")(meyo));
  XษTrฯฮท.on("guildMemberAdd", (meyo) => otherEvent("welcome")(meyo));
  XษTrฯฮท.on("guildMemberRemove", (meyo) => otherEvent("goodbye")(meyo));
  XษTrฯฮท.on("interactionCreate", (meyo) => menuEvents("help")(meyo, XษTrฯฮท));
}
("๐");
("๐");
("๐============================================================================================================================<โก>");
("โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!");
("๐============================================================================================================================<โก>");