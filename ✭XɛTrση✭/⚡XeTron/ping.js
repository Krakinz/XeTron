"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const Discord = require("discord.js");
module.exports = {
    name: "ping",
    aliases: [],
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        message.channel.send("`๐` **- Getting my ping ...**").then((result_message) => {
            const ping = result_message.createdTimestamp - message.createdTimestamp;
            result_message.delete();
            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                    .setTimestamp()
                    .setTitle(`'${client.user.username}' Latency Test`)
                    .addField(`Ping`, `\`${ping} ms\``)
                    .addField(`API Latency`, `\`${Math.round(client.ws.ping)} ms\``)
                ]
            });
        });
    },
};