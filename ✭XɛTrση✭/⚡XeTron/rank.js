var Discord = require("discord.js");
var Canvas = require("canvas");
var {
  getMember
} = require("../../XpMem");
var Users = require("../../XɛTrση✭Database/xp");
var Cards = require("../../XɛTrση✭Database/card");

module.exports = {
  cooldown: 5,
  name: "rank",
  aliases: ["level", "card"],
  description: "Show you your XP Card.",
  usage: "[username | id | mention]",
  run: async (bot, message, args) => {
    var canvas = Canvas.createCanvas(840, 300);
    var ctx = canvas.getContext("2d");
    Cards.findOne({
        did: message.author.id,
      },
      (err, cards) => {
        if (err) {
          console.log(err);
          return message.reply("An error happened. ```" + err + "```");
        }
        Users.findOne({
            did: message.author.id,
            serverID: message.guild.id,
          },
          async (err, users) => {
            if (err) {
              console.log(err);
              return message.reply("An error happened. ```" + err + "```");
            }
            var member = getMember(message, args.join(" "));
            var background = await Canvas.loadImage("GroundXeno/Rank.png");
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            //Draw rectangle
            ctx.beginPath();
            ctx.fillStyle = "rgba(196, 180, 127, 0.5)";
            ctx.opacity = 50 % ctx.fillRect(260, 80, 650, 160);
            ctx.closePath();
            ctx.stroke();
            //Get Username
            ctx.font = "40px Symbola";
            ctx.fillStyle = "#000";
            ctx.fillText(member.displayName, 280, 136);
            //Show XP and levels
            let nxtlvl = 300 * Math.pow(2, users.level);
            ctx.font = "20px Symbola";
            ctx.fillStyle = "#000";
            ctx.fillText(
              "You are level " + users.level + " - " + users.xp + " XP",
              280,
              180
            );
            var xpLeft = nxtlvl - users.xp;
            ctx.font = "30px Symbola";
            ctx.fillStyle = "#000";
            ctx.fillText(`next level in ${xpLeft} XP`, 280, 225);
            await GetAvatar(message, ctx);
            message.reply({
              files: [
                new Discord.MessageAttachment(
                  canvas.toBuffer(),
                  "rank-cards.png"
                ),
              ],
            });
          }
        );
      }
    );
  },
};

async function GetAvatar(message, ctx) {
  Users.findOne({
      did: message.author.id,
    },
    async (err, users) => {
      let nxtlvl = 300 * Math.pow(2, users.level);
      var n = ((users.xp - nxtlvl) / nxtlvl) * -100;
      var member = getMember(message);
      var arc = ((100 - n) / 100) * Math.PI;
      ctx.strokeStyle = member.displayHexColor;
      ctx.beginPath();
      ctx.lineWidth = 15;
      ctx.arc(125, 140, 102, Math.PI * 1.5, arc);
      ctx.stroke();
    }
  );
  ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.arc(125, 140, 102, 0, Math.PI * 2);
  ctx.stroke();
  var avatar = await Canvas.loadImage(
    message.author.displayAvatarURL({
      format: "png"
    })
  );
  ctx.beginPath();
  ctx.arc(125, 140, 100, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, 25, 40, 200, 200);
}