"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
const byemsg = require("../../XษTrฯฮทโญDatabase/leavemessage");
const byeData = require("../../XษTrฯฮทโญDatabase/goodbyechannel");
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
    ำผษศถสึีผึษจษ: member.guild.id,
  });
  if (data) {
    const data2 = await byemsg.findOne({
      ำผษศถสึีผึษจษ: member.guild.id,
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
          `๐? ${Joined__User} `,
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
          `๐? ${Joined__User} `,
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
              `** Current Member Count **โก`,
              `ษดแดแด: #${member.guild.memberCount} `,
              true
            )
            .addField(
              `** Discriminator **๐ณ`,
              `ษชแด: #${member.user.discriminator} `,
              true
            ),
        ],
        files: [new MessageAttachment(XeCanvas.toBuffer(), "Bye-image.png")],
      });
    }
  }
};
