"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const Discord = require("discord.js");
module.exports = {
    name: "ping",
    aliases: [],
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        message.channel.send("`🏓` **- Getting my ping ...**").then((result_message) => {
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