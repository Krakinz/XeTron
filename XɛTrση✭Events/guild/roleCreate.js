const roleData = require("../../XɛTrση✭Database/roleupdates");
const {
  MessageEmbed
} = require("discord.js");

module.exports = async (role) => {
  const data = await roleData.findOne({
    Ӽɛȶʀօռֆɨɖ: role.guild.id,
  });

  if (!data) return;

  const embed = new MessageEmbed()
    .setTitle("Role Created")
    .setDescription(
      `Role Name: ${role.name}\nRole ID: ${role.id}\nHoisted: ${
        role.hoisted ? "Yes" : "No"
      }\nMentionable: ${role.mentionable ? "Yes" : "No"}`
    )
    .setColor("GREEN")
    .setTimestamp();

  role.guild.channels.cache.get(data.Ӽɛȶʀօռƈɦɨɖ).send({
    embeds: [embed]
  });
};