"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const chalk = require("chalk");
const mongoose = require("mongoose");
require("dotenv").config();
module.exports = (XษTrฯฮท) => {
  XษTrฯฮท.user.setPresence({
    status: "online"
  });
  var activities = [
      "โHELP",
      "๐NSFW",
      "โกXETRON",
      "๐SERVERS",
      "๐ฅณMEMBERS",
      "๐JOIN",
      "๐LEAVE",
      "๐GAMES",
      "๐ฅANIME",
      "๐UPDATES",
      "๐MODERATION",
      "โ ๏ธEVERYTHING",
    ],
    i = 0;
  setInterval(() => XษTrฯฮท.user.setActivity(`โฎ ${activities[i++ % activities.length]} โงช`, {
    type: "WATCHING"
  }), 2000);

  let allMembers = new Set();
  XษTrฯฮท.guilds.cache.forEach((guild) => {
    guild.members.cache.forEach((member) => {
      allMembers.add(member.user.id);
    });
  });

  let allChannels = new Set();
  XษTrฯฮท.guilds.cache.forEach((guild) => {
    guild.channels.cache.forEach((channel) => {
      allChannels.add(channel.id);
    });
  });

  console.log(
    chalk.bgMagentaBright.black(
      ` ${XษTrฯฮท.guilds.cache.size}servers ${XษTrฯฮท.channels.cache.size}channels ${allMembers.size}members`
    )
  );

  mongoose
    .connect(process.env.XeTronMdb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(
      console.log(
        chalk.bgGreenBright.black(
          ` ${XษTrฯฮท.user.username} Trying to connect to Database`
        )
      )
    )
    .catch((err) =>
      console.log(
        chalk.bgRedBright.black(
          ` ${XษTrฯฮท.user.username} Database Error\n${err} `
        )
      )
    );
};