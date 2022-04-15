const {
    MessageEmbed
} = require("discord.js");
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================
module.exports = {
    name: "snipe",
    aliases: [],
    usage: "snipe",
    description: "Get last message which is deleted with message Author and Image(If any)",
    // =============================================================================
    // 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
    // =============================================================================
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id);
        if (!msg) {
            message.react("❗");
            message.channel.send(
                new MessageEmbed()
                .setTimestamp()
                .setColor("#FF5733")
                .setAuthor("♚乂ΣTЯỖN⚡👑Multi☣️Purpose🤖Bot")
                .setURL("https://github.com/krakinz")
                .setTitle("Snipe aka get-Back Deleted Messages")
                .setFooter(`👈🏽‍Reqstd by ${message.author.username}`, message.author.avatarURL({
                    dynamic: true
                }))
                .addFields({
                    name: `**\`⚠️Error\`**`,
                    value: "There's nothing to snipe!",
                    inline: true,
                }, {
                    name: `**\`🔸Example\`**`,
                    value: "pls snipe",
                    inline: true,
                })
            );
            return;
        }
        if (msg.image) {
            embed.setImage(msg.image).setColor("#FF5733").setTimestamp();
        }
        message.channel.send(
            new MessageEmbed().setAuthor(msg.author).setDescription(msg.content)
        );
    },
};
// =============================================================================
// 𝐇𝐲𝐜𝐨𝐫𝐞 𝐢𝐬 𝐚 𝐝𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐩𝐮𝐫𝐩𝐨𝐬𝐞 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐝𝐢𝐬𝐜𝐨𝐫𝐝.𝐣𝐬 𝐚𝐧𝐝 𝐡𝐚𝐬 𝟓𝟎+𝐟𝐞𝐚𝐭𝐮𝐫𝐞𝐬..
// =============================================================================