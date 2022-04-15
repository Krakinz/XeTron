"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const byemsg = require("../../XɛTrση✭Database/leavemessage");
const byeData = require("../../XɛTrση✭Database/goodbyechannel");
const { MessageEmbed, MessageAttachment } = require("discord.js");
const XeTronCanvas = require("canvas");
const Greeters = [
  "GroundXeno/Greet/h0.png",
  "GroundXeno/Greet/h1.png",
  "GroundXeno/Greet/h2.png",
  "GroundXeno/Greet/h3.png",
  "GroundXeno/Greet/h4.png",
  "GroundXeno/Greet/h5.png",
  "GroundXeno/Greet/h6.png",
  "GroundXeno/Greet/h7.png",
  "GroundXeno/Greet/h8.png",
  "GroundXeno/Greet/h9.png",
];
module.exports = async (member) => {
  const data = await byeData.findOne({
    Ӽɛȶʀօռֆɨɖ: member.guild.id,
  });
  if (data) {
    const data2 = await byemsg.findOne({
      Ӽɛȶʀօռֆɨɖ: member.guild.id,
    });
    if (data2) {
      var leavemessage = data2.JoinMsg;
      leavemessage = leavemessage.replace("{user.mention}", `${member}`);
      leavemessage = leavemessage.replace("{user.name}", `${member.user.tag}`);
      leavemessage = leavemessage.replace("{server}", `${member.guild.name}`);
      leavemessage = leavemessage.replace(
        "{membercount}",
        `${member.guild.memberCount}`
      );
      let embed = new MessageEmbed()
        .setDescription(leavemessage)
        .setColor("GREEN");
      let channel = data.Bye;
      member.guild.channels.cache.get(channel).send({ embeds: [embed] });
    } else if (!data2) {
      let channel = data.Bye;
      const XeCanvas = XeTronCanvas.createCanvas(1772, 633);
      const XeCtx = XeCanvas.getContext("2d");
      let Greeter = Greeters[Math.floor(Math.random() * Greeters.length)];
      const background = await XeTronCanvas.loadImage(Greeter);
      XeCtx.drawImage(background, 0, 0, XeCanvas.width, XeCanvas.height);
      XeCtx.strokeStyle = "#FFFFFF";
      XeCtx.strokeRect(0, 0, XeCanvas.width, XeCanvas.height);
      var Joined__User = `${member.user.username}`;
      if (Joined__User.length >= 10) {
        XeCtx.font = "bold 120px Symbola";
        XeCtx.fillStyle = "#FFFFFF";
        XeCtx.fillText(
          `💠 ${Joined__User} `,
          720,
          XeCanvas.height / 2 + 20,
          720,
          XeCanvas.width / 2 - 200,
          500,
          500
        );
      } else {
        XeCtx.font = "bold 140px Symbola";
        XeCtx.fillStyle = "#FFFFFF";
        XeCtx.fillText(
          `💠 ${Joined__User} `,
          720,
          XeCanvas.height / 2 + 20,
          720,
          XeCanvas.width / 2 - 200,
          500,
          500
        );
      }
      XeCtx.beginPath();
      XeCtx.arc(315, XeCanvas.height / 2, 200, 0, Math.PI * 2, true);
      XeCtx.closePath();
      XeCtx.clip();
      const avatar = await XeTronCanvas.loadImage(
        member.user.displayAvatarURL({ format: "png" })
      );
      XeCtx.drawImage(avatar, 90, XeCanvas.height / 2 - 200, 500, 500);
      member.guild.channels.cache.get(channel).send({
        embeds: [
          new MessageEmbed()
            .setTimestamp()
            .setTitle("Bye")
            .setColor(process.env.NaNKol)
            .setDescription(
              `${member},left **${member.guild.name}**! We hope you liked our Server and hope to see you soon!`
            )
            .setThumbnail(`${member.user.displayAvatarURL()}`)
            .addField(
              `** Current Member Count **⚡`,
              `ɴᴜᴍ: #${member.guild.memberCount} `,
              true
            )
            .addField(
              `** Discriminator **💳`,
              `ɪᴅ: #${member.user.discriminator} `,
              true
            ),
        ],
        files: [new MessageAttachment(XeCanvas.toBuffer(), "Bye-image.png")],
      });
    }
  }
};
