"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
console.clear();
require("dotenv");
const fs = require("fs");
const chalk = require("chalk");
const ascii = require("ascii-table");
const XeTronFol = fs.readdirSync("./✭XɛTrση✭");
const XeTronTable = new ascii().setHeading("✭XɛTrση✭", "Health");
const menuEvents = (event) => require(`./XɛTrση✭Events/menus/${event}`);
const guildEvent = (event) => require(`./XɛTrση✭Events/guild/${event}`);
const clientEvent = (event) => require(`./XɛTrση✭Events/client/${event}`);
const otherEvent = (event) => require(`./XɛTrση✭Events/functions/${event}`);
const {
  Client,
  Collection,
  Intents,
  MessageEmbed
} = require("discord.js");
const XɛTrση = new Client({
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
XɛTrση.categories = fs.readdirSync("./✭XɛTrση✭/");
XɛTrση.commands = new Collection();
XɛTrση.aliases = new Collection();
XɛTrση.setMaxListeners(0);
loadCommands(XɛTrση);
loadEvents(XɛTrση);
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);
  XɛTrση.channels.cache.get(process.env.KRAKINZLAB).send({
    embeds: [new MessageEmbed()
      .setTitle("Uncaught Exception")
      .setDescription(`${err}`).setColor("RED"),
    ],
  });
});
process.on("unhandledRejection", (reason, promise) => {
  console.log("[FATAL] Possibly Unhandled Rejection at: Promise ", promise, " reason: ", reason.message);
  XɛTrση.channels.cache.get(process.env.KRAKINZLAB).send({
    embeds: [new MessageEmbed()
      .setTitle("Unhandled Promise Rejection")
      .addField("Promise", `${promise}`)
      .addField("Reason", `${reason.message}`)
      .setColor("RED"),
    ],
  });
});

XɛTrση.login(process.env.XETRON).then(() => {
  console.log(chalk.bgYellowBright.black(` Successfully logged in as: \n${XɛTrση.user.username}#${XɛTrση.user.discriminator}`));
});

function loadCommands(XɛTrση) {
  for (const folder of XeTronFol) {
    const commandFiles = fs.readdirSync(`./✭XɛTrση✭/${folder}`).filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`./✭XɛTrση✭/${folder}/${file}`);
      if (command.name) {
        XɛTrση.commands.set(command.name, command);
        var str = file;
        var newStr = str.slice(0, -3);
        XeTronTable.addRow("⚡ " + newStr.toUpperCase(), "Ready 🐙");
      } else {
        XeTronTable.addRow("❌ " + newStr.toUpperCase(), "Not Valid XɛTrση File");
        continue;
      }
      if (command.aliases && Array.isArray(command))
        command.aliases.forEach((alias) => XɛTrση.aliases.set(alias, command.name));
    }
    console.log(XeTronTable.toString());
  }
}


XɛTrση.on('guildCreate', (guild) => {
  console.log("NEW")
});


function loadEvents(XɛTrση) {
  const cooldowns = new Collection();
  XɛTrση.on("error", console.error);
  XɛTrση.on("warn", (info) => console.log(info));
  XɛTrση.on("ready", () => clientEvent("ready")(XɛTrση));
  XɛTrση.on("messageCreate", (meyo) => clientEvent("mention")(meyo, XɛTrση));
  XɛTrση.on("messageCreate", (meyo) => guildEvent("command")(meyo, cooldowns));
  XɛTrση.on("messageDelete", (meyo) => guildEvent("messageDelete")(meyo));
  XɛTrση.on("messageUpdate", (meyo, neyo) => guildEvent("messageUpdate")(meyo, neyo));
  XɛTrση.on("channelCreate", (meyo) => guildEvent("channelCreate")(meyo));
  XɛTrση.on("channelDelete", (meyo) => guildEvent("channelDelete")(meyo));
  XɛTrση.on("channelUpdate", (meyo, neyo) => guildEvent("channelUpdate")(meyo, neyo));
  XɛTrση.on("guildMemberUpdate", (meyo, neyo) => guildEvent("guildMemberUpdate")(meyo, neyo));
  XɛTrση.on("guildMemberAdd", (meyo) => guildEvent("guildMemberAdd")(meyo));
  XɛTrση.on("guildMemberRemove", (meyo) => guildEvent("guildMemberRemove")(meyo));
  XɛTrση.on("guildBanAdd", (meyo) => guildEvent("guildBanAdd")(meyo));
  XɛTrση.on("guildBanRemove", (meyo) => guildEvent("guildBanRemove")(meyo));
  XɛTrση.on("guildUpdate", (meyo, neyo) => guildEvent("guildUpdate")(meyo, neyo));
  XɛTrση.on("threadUpdate", (meyo, neyo) => guildEvent("threadUpdate")(meyo, neyo, XɛTrση));
  XɛTrση.on("threadMembersUpdate", (meyo, neyo) => guildEvent("threadMembersUpdate")(meyo, neyo, XɛTrση));
  XɛTrση.on("threadCreate", (meyo) => guildEvent("threadCreate")(meyo, XɛTrση));
  XɛTrση.on("threadDelete", (meyo) => guildEvent("threadDelete")(meyo, XɛTrση));
  XɛTrση.on("messageCreate", (meyo) => otherEvent("antilinks")(meyo));
  XɛTrση.on("messageCreate", (meyo) => otherEvent("antiwords")(meyo));
  XɛTrση.on("guildMemberAdd", (meyo) => otherEvent("welcome")(meyo));
  XɛTrση.on("guildMemberRemove", (meyo) => otherEvent("goodbye")(meyo));
  XɛTrση.on("interactionCreate", (meyo) => menuEvents("help")(meyo, XɛTrση));
}
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");