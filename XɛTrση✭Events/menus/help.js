"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const prefixModel = require("../../XɛTrση✭Database/setprefix");
const Discord = require("discord.js");
const XeFixer = process.env.XeFixer;
require("dotenv").config();
module.exports = async (interaction) => {
  if (!interaction.isSelectMenu()) return;
  if (interaction.customId === "XɛTrση_Help_Menu") {
    let msg = await interaction.channel.messages.fetch(interaction.message.id);
    const prefixData = await prefixModel.findOne({
      Ӽɛȶʀօռֆɨɖ: msg.guild.id,
    }).catch((err) => console.log(err));
    if (prefixData) {
      var XeRunner = prefixData.Prefix;
    } else if (!prefixData) {
      XeRunner = XeFixer;
    }
    if (interaction.values[0] === "XɛTrση_Settings") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Settings⚙️ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`SETPREFIX\`⮐**`, `**⧪ Setup The Prefix Server!⪢ \`${XeRunner}\`prefix**`, true)
          .addField(`📜**\`ANTIWORDS\`⮐**`, `**⧪ Setup Antiwords For Server!⪢ \`${XeRunner}\`antiwords**`, true)
          .addField(`📜**\`ANTILINK\`⮐**`, `**⧪ Setup antilink For Server!⪢ \`${XeRunner}\`antilink**`, true)
          .addField(`📜**\`CHANNELUPDATE\`⮐**`, `**⧪ Setup The Channel Updates for Server!⪢ \`${XeRunner}\`channelupdate**`, true)
          .addField(`📜**\`MEMBERUPDATE\`⮐**`, `**⧪ Setup The Member Updates for Server!⪢ \`${XeRunner}\`memberupdate**`, true)
          .addField(`📜**\`LEAVEMESSAGE\`⮐**`, `**⧪ Setup The Leave Message Server!⪢ \`${XeRunner}\`leavemessage**`, true)
          .addField(`📜**\`WELCOMECHANNEL\`⮐**`, `**⧪ Setup The Welcome Channel Server!⪢ \`${XeRunner}\`welcomechannel**`, true)
          .addField(`📜**\`JOINMESSAGE\`⮐**`, `**⧪ Setup The Welcome Message Server!⪢ \`${XeRunner}\`JoinMessage**`, true)
          .addField(`📜**\`GOODBYECHANNEL\`⮐**`, `**⧪ Setup The Goodbye Channel Server!⪢ \`${XeRunner}\`goodbyechannel**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_XeTron") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**XeTron⚡ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`REPORT\`⮐**`, `**⧪ Report a bug!⪢ \`${XeRunner}\`report**`, true)
          .addField(`📜**\`PING\`⮐**`, `**⧪ Get XeTron's ping!⪢ \`${XeRunner}\`ping**`, true)
          .addField(`📜**\`INVITE\`⮐**`, `**⧪ Invite XeTron!⪢ \`${XeRunner}\`invite**`, true)
          .addField(`📜**\`HELP\`⮐**`, `**⧪ Show this Command List!⪢ \`${XeRunner}\`help**`, true)
          .addField(`📜**\`SUGGEST\`⮐**`, `**⧪ Suggest Features for XeTron!⪢ \`${XeRunner}\`suggest**`, true)
          .addField(`📜**\`XETRON\`⮐**`, `**⧪ Shows the XeTron informations!⪢ \`${XeRunner}\`xetron**`, true)
          .addField(`📜**\`SERVERINFO\`⮐**`, `**⧪ Shows info about a server!⪢ \`${XeRunner}\`serverinfo**`, true)
          .addField(`📜**\`SERVERICON\`⮐**`, `**⧪ Shows displaypicture/avatar of server!⪢ \`${XeRunner}\`servericon**`, true)
          .addField(`📜**\`SNIPE\`⮐**`, `**⧪ Get last message which is deleted with message Author and Image(If any)!⪢ \`${XeRunner}\`snipe**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Anime") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Äñïmê ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`ANIME\`⮐**`, `**⧪ Search Any Anime!⪢ \`${XeRunner}\`anime (anime name)**`, true)
          .addField(`📜**\`SMUG\`⮐**`, `**⧪ Smug Anime Style!⪢ \`${XeRunner}\`smug**`, true)
          .addField(`📜**\`SMILE\`⮐**`, `**⧪ Smile Anime Style!⪢ \`${XeRunner}\`smile**`, true)
          .addField(`📜**\`HAPPY\`⮐**`, `**⧪ Happy Anime Style!⪢ \`${XeRunner}\`happy**`, true)
          .addField(`📜**\`BLUSH\`⮐**`, `**⧪ Blush Anime Style!⪢ \`${XeRunner}\`blush**`, true)
          .addField(`📜**\`CRINGE\`⮐**`, `**⧪ Cringe Anime Style!⪢ \`${XeRunner}\`cringe**`, true)
          .addField(`📜**\`CRY\`⮐**`, `**⧪ Cry Someone Anime Style!⪢ \`${XeRunner}\`cry (mention or ID)**`, true)
          .addField(`📜**\`HUG\`⮐**`, `**⧪ Hug Someone Anime Style!⪢ \`${XeRunner}\`hug (mention or ID)**`, true)
          .addField(`📜**\`PAT\`⮐**`, `**⧪ Pat Someone Anime Style!⪢ \`${XeRunner}\`pat (mention or ID)**`, true)
          .addField(`📜**\`SLAP\`⮐**`, `**⧪ Slap Someone Anime Style!⪢ \`${XeRunner}\`slap (mention or ID)**`, true)
          .addField(`📜**\`POKE\`⮐**`, `**⧪ Poke Someone Anime Style!⪢ \`${XeRunner}\`poke (mention or ID)**`, true)
          .addField(`📜**\`BITE\`⮐**`, `**⧪ Bite Someone Anime Style!⪢ \`${XeRunner}\`bite (mention or ID)**`, true)
          .addField(`📜**\`BONK\`⮐**`, `**⧪ Bonk Someone Anime Style!⪢ \`${XeRunner}\`bonk (mention or ID)**`, true)
          .addField(`📜**\`WAVE\`⮐**`, `**⧪ Wave Someone Anime Style!⪢ \`${XeRunner}\`wave (mention or ID)**`, true)
          .addField(`📜**\`WINK\`⮐**`, `**⧪ Wink Someone Anime Style!⪢ \`${XeRunner}\`wink (mention or ID)**`, true)
          .addField(`📜**\`YEET\`⮐**`, `**⧪ Yeet Someone Anime Style!⪢ \`${XeRunner}\`yeet (mention or ID)**`, true)
          .addField(`📜**\`KICK\`⮐**`, `**⧪ Kick Someone Anime Style!⪢ \`${XeRunner}\`kick (mention or ID)**`, true)
          .addField(`📜**\`KILL\`⮐**`, `**⧪ Kill Someone Anime Style!⪢ \`${XeRunner}\`kill (mention or ID)**`, true)
          .addField(`📜**\`KISS\`⮐**`, `**⧪ Kiss Someone Anime Style!⪢ \`${XeRunner}\`kiss (mention or ID)**`, true)
          .addField(`📜**\`LICK\`⮐**`, `**⧪ Lick Someone Anime Style!⪢ \`${XeRunner}\`lick (mention or ID)**`, true)
          .addField(`📜**\`PUNCH\`⮐**`, `**⧪ Punch Someone Anime Style!⪢ \`${XeRunner}\`punch (mention or ID)**`, true)
          .addField(`📜**\`DANCE\`⮐**`, `**⧪ Dance Someone Anime Style!⪢ \`${XeRunner}\`dance (mention or ID)**`, true)
          .addField(`📜**\`BULLY\`⮐**`, `**⧪ Bully Someone Anime Style!⪢ \`${XeRunner}\`bully (mention or ID)**`, true)
          .addField(`📜**\`SMOOCH\`⮐**`, `**⧪ Smooch Someone Anime Style!⪢ \`${XeRunner}\`smooch (mention or ID)**`, true)
          .addField(`📜**\`CUDDLE\`⮐**`, `**⧪ Cuddle Someone Anime Style!⪢ \`${XeRunner}\`cuddle (mention or ID)**`, true)
          .addField(`📜**\`HANDHOLD\`⮐**`, `**⧪ Handhold Someone Anime Style!⪢ \`${XeRunner}\`handhold (mention or ID)**`, true)
          .addField(`📜**\`HIGHFIVE\`⮐**`, `**⧪ Highfive Someone Anime Style!⪢ \`${XeRunner}\`highfive (mention or ID)**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Adventure") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Adventure🎲ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`8BALL\`⮐**`, `**⧪ Tells you a fortune!⪢ \`${XeRunner}\`8ball**`, true)
          .addField(`📜**\`ALERT\`⮐**`, `**⧪ Get an Alert message!⪢ \`${XeRunner}\`alert**`, true)
          .addField(`📜**\`AMAZEME\`⮐**`, `**⧪ Returns random amazing fact/image!⪢ \`${XeRunner}\`amazeme**`, true)
          .addField(`📜**\`BIDEN\`⮐**`, `**⧪ Get a custom Tweet from Biden!⪢ \`${XeRunner}\`biden**`, true)
          .addField(`📜**\`CHANGEMYMIND\`⮐**`, `**⧪ Image Manipulation Command!⪢ \`${XeRunner}\`changemymind**`, true)
          .addField(`📜**\`CLYDE\`⮐**`, `**⧪ Get a custom clyde message!⪢ \`${XeRunner}\`clyde**`, true)
          .addField(`📜**\`ILLEGAL\`⮐**`, `**⧪ Provide a text to Trump for making it illegal!⪢ \`${XeRunner}\`illegal**`, true)
          .addField(`📜**\`SCROLL\`⮐**`, `**⧪ Another Fun Command!⪢ \`${XeRunner}\`scroll**`, true)
          .addField(`📜**\`TEXTIMAGE\`⮐**`, `**⧪ Text To Image!⪢ \`${XeRunner}\`textimage**`, true)
          .addField(`📜**\`TRASH\`⮐**`, `**⧪ Another Image Manipulation Command!⪢ \`${XeRunner}\`trash**`, true)
          .addField(`📜**\`TRIGGER\`⮐**`, `**⧪Put the Triggered Overlay pic over avatars!⪢ \`${XeRunner}\`trigger**`, true)
          .addField(`📜**\`WASTED\`⮐**`, `**⧪ Put the GTA Wasted pic over avatars!⪢ \`${XeRunner}\`wasted**`, true)
          .addField(`📜**\`AVATAR\`⮐**`, `**⧪ Get a  widened avatar of a user!⪢ \`${XeRunner}\`avatar**`, true)
          .addField(`📜**\`ASCII\`⮐**`, `**⧪ Returns provided text in ascii format!⪢ \`${XeRunner}\`ascii**`, true)
          .addField(`📜**\`CATSAY\`⮐**`, `**⧪ Make the cat say your message!⪢ \`${XeRunner}\`catsay**`, true)
          .addField(`📜**\`COWSAY\`⮐**`, `**⧪ Make a cow say your message!⪢ \`${XeRunner}\`cowsay**`, true)
          .addField(`📜**\`CLAP\`⮐**`, `**⧪ Add clap emoji between each word!⪢ \`${XeRunner}\`clap**`, true)
          .addField(`📜**\`DAB\`⮐**`, `**⧪ Adds dab emoji after each word!⪢ \`${XeRunner}\`dab**`, true)
          .addField(`📜**\`EMOJIFY\`⮐**`, `**⧪ Returns provided text in emojify (emotes) form!⪢ \`${XeRunner}\`emojify**`, true)
          .addField(`📜**\`FLIPTEXT\`⮐**`, `**⧪ Flip some text!⪢ \`${XeRunner}\`fliptext**`, true)
          .addField(`📜**\`GIF\`⮐**`, `**⧪ Get gifs based on your search!⪢ \`${XeRunner}\`gif**`, true)
          .addField(`📜**\`HACK\`⮐**`, `**⧪ Hack Someone lol!⪢ \`${XeRunner}\`hack**`, true)
          .addField(`📜**\`HOWGAY\`⮐**`, `**⧪ Check How much gay lmao!⪢ \`${XeRunner}\`howgay**`, true)
          .addField(`📜**\`MEME\`⮐**`, `**⧪ Sends a random meme!⪢ \`${XeRunner}\`meme**`, true)
          .addField(`📜**\`NITRO\`⮐**`, `**⧪ Fake a nitro gift!⪢ \`${XeRunner}\`nitro**`, true)
          .addField(`📜**\`ORANGETEXT\`⮐**`, `**⧪ Colors the Text with Orange Color!⪢ \`${XeRunner}\`orangetext**`, true)
          .addField(`📜**\`POKEIMG\`⮐**`, `**⧪ Get Image of the Mentioned Pokemon!⪢ \`${XeRunner}\`pokeimg**`, true)
          .addField(`📜**\`PP\`⮐**`, `**⧪ Dick/Penis Machine Calculator!⪢ \`${XeRunner}\`pp**`, true)
          .addField(`📜**\`RESPECT\`⮐**`, `**⧪ Returns Random Respect GIF!⪢ \`${XeRunner}\`respect**`, true)
          .addField(`📜**\`REVERSE\`⮐**`, `**⧪ Reverse the text entered!⪢ \`${XeRunner}\`reverse**`, true)
          .addField(`📜**\`ROAST\`⮐**`, `**⧪ Roasts a user!⪢ \`${XeRunner}\`roast**`, true)
          .addField(`📜**\`TRIVIA\`⮐**`, `**⧪ Test your knowledge!⪢ \`${XeRunner}\`trivia**`, true)
          .addField(`📜**\`VAPORTEXT\`⮐**`, `**⧪ Fun Command!⪢ \`${XeRunner}\`vaportext**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Moderation") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Moderation🔒ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`CREATEROLE\`⮐**`, `**⧪ Creates A new role in the guild!⪢ \`${XeRunner}\`createrole**`, true)
          .addField(`📜**\`DELCHANNEL\`⮐**`, `**⧪ Delete Channels From your Server!⪢ \`${XeRunner}\`delchannel**`, true)
          .addField(`📜**\`ANNOUNCE\`⮐**`, `**⧪ Make an Announcemnet in your Serverl!⪢ \`${XeRunner}\`announce**`, true)
          .addField(`📜**\`LOCK\`⮐**`, `**⧪ Locks a Channel!⪢ \`${XeRunner}\`lock**`, true)
          .addField(`📜**\`SOFTBAN\`⮐**`, `**⧪ Soft Ban a User!⪢ \`${XeRunner}\`softban**`, true)
          .addField(`📜**\`UNLOCK\`⮐**`, `**⧪ Unlocks a Channel!⪢ \`${XeRunner}\`unlock**`, true)
          .addField(`📜**\`GIVEROLE\`⮐**`, `**⧪ Give roles to users!⪢ \`${XeRunner}\`giverole**`, true)
          .addField(`📜**\`REMOVEROLE\`⮐**`, `**⧪ Take roles from users!⪢ \`${XeRunner}\`removerole**`, true)
          .addField(`📜**\`KICKOUT\`⮐**`, `**⧪ Kick anyone with one shot xD!⪢ \`${XeRunner}\`kickout**`, true)
          .addField(`📜**\`SERVERICON\`⮐**`, `**⧪ Displays the Server Icon!⪢ \`${XeRunner}\`servericon**`, true)
          .addField(`📜**\`CLEAR\`⮐**`, `**⧪ delete the given number of messages!⪢ \`${XeRunner}\`clear**`, true)
          .addField(`📜**\`NICKNAME\`⮐**`, `**⧪ Change the Nickname of other Users!⪢ \`${XeRunner}\`nickname**`, true)
          .addField(`📜**\`MUTE\`⮐**`, `**⧪ Mutes the specified user.⪢ \`${XeRunner}\`mute**`, true)
          .addField(`📜**\`UNMUTE\`⮐**`, `**⧪ Un-Mutes the specified user.⪢ \`${XeRunner}\`unmute**`, true)
          .addField(`📜**\`TEMPMUTE\`⮐**`, `**⧪ temporarily mute a user for a given time!⪢ \`${XeRunner}\`tempmute**`, true)
          .addField(`📜**\`BAN\`⮐**`, `**⧪ Ban anyone with one shot whithout knowing anyone xD!⪢ \`${XeRunner}\`ban**`, true)
          .addField(`📜**\`USERINFO\`⮐**`, `**⧪ Get info about your account or mentiobned user's account!⪢ \`${XeRunner}\`userinfo**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_NSFW") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**NSFW🔞ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`4K\`⮐**`, `**⧪ \`${XeRunner}\`4k**`, true)
          .addField(`📜**\`ANAL\`⮐**`, `**⧪ \`${XeRunner}\`anal**`, true)
          .addField(`📜**\`ASS\`⮐**`, `**⧪ \`${XeRunner}\`ass**`, true)
          .addField(`📜**\`BDSM\`⮐**`, `**⧪ \`${XeRunner}\`bdsm**`, true)
          .addField(`📜**\`BLOWJOB\`⮐**`, `**⧪ \`${XeRunner}\`blowjob**`, true)
          .addField(`📜**\`BOOB\`⮐**`, `**⧪ \`${XeRunner}\`boobs**`, true)
          .addField(`📜**\`CREAMPIE\`⮐**`, `**⧪ \`${XeRunner}\`creampie**`, true)
          .addField(`📜**\`CUM\`⮐**`, `**⧪ \`${XeRunner}\`cum**`, true)
          .addField(`📜**\`CUMSLUTS\`⮐**`, `**⧪ \`${XeRunner}\`cumsluts**`, true)
          .addField(`📜**\`DANBOORU\`⮐**`, `**⧪ \`${XeRunner}\`danbooru**`, true)
          .addField(`📜**\`DOUJIN\`⮐**`, `**⧪ \`${XeRunner}\`doujin**`, true)
          .addField(`📜**\`EROKEMO\`⮐**`, `**⧪ \`${XeRunner}\`erokemo**`, true)
          .addField(`📜**\`FEETGIF\`⮐**`, `**⧪ \`${XeRunner}\`feetgif**`, true)
          .addField(`📜**\`FEMDOM\`⮐**`, `**⧪ \`${XeRunner}\`femdom**`, true)
          .addField(`📜**\`GANGBANG\`⮐**`, `**⧪ \`${XeRunner}\`gangbang**`, true)
          .addField(`📜**\`GONEWILD\`⮐**`, `**⧪ \`${XeRunner}\`gonewild**`, true)
          .addField(`📜**\`HENTAI\`⮐**`, `**⧪ \`${XeRunner}\`hentai**`, true)
          .addField(`📜**\`HENTAIASS\`⮐**`, `**⧪ \`${XeRunner}\`hentaiass**`, true)
          .addField(`📜**\`HENTAITHIGH\`⮐**`, `**⧪ \`${XeRunner}\`hentaithigh**`, true)
          .addField(`📜**\`KITSUNE\`⮐**`, `**⧪ \`${XeRunner}\`kitsune**`, true)
          .addField(`📜**\`LEWD\`⮐**`, `**⧪ \`${XeRunner}\`lewd**`, true)
          .addField(`📜**\`MAID\`⮐**`, `**⧪ \`${XeRunner}\`maid**`, true)
          .addField(`📜**\`MILF\`⮐**`, `**⧪ \`${XeRunner}\`milf**`, true)
          .addField(`📜**\`NGIF\`⮐**`, `**⧪ \`${XeRunner}\`ngif**`, true)
          .addField(`📜**\`NMW\`⮐**`, `**⧪ \`${XeRunner}\`nmw**`, true)
          .addField(`📜**\`NSFW\`⮐**`, `**⧪ \`${XeRunner}\`nsfw**`, true)
          .addField(`📜**\`ORGY\`⮐**`, `**⧪ \`${XeRunner}\`orgy**`, true)
          .addField(`📜**\`PANTY\`⮐**`, `**⧪ \`${XeRunner}\`panty**`, true)
          .addField(`📜**\`PORNGIF\`⮐**`, `**⧪ \`${XeRunner}\`porngif**`, true)
          .addField(`📜**\`PUBLIC\`⮐**`, `**⧪ \`${XeRunner}\`public**`, true)
          .addField(`📜**\`PUSSY\`⮐**`, `**⧪ \`${XeRunner}\`pussy**`, true)
          .addField(`📜**\`RANDOM\`⮐**`, `**⧪ Human(yes)\nHentai!(yes)⪢ \`${XeRunner}\`random**`, true)
          .addField(`📜**\`THIGH\`⮐**`, `**⧪ \`${XeRunner}\`thigh**`, true)
          .addField(`📜**\`VAGINA\`⮐**`, `**⧪ \`${XeRunner}\`vagina**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Utility") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Utility🔧ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`EMOJIID\`⮐**`, `**⧪ Get ID of emojis!⪢ \`${XeRunner}\`emojiid**`, true)
          .addField(`📜**\`SAY\`⮐**`, `**⧪ Make the bot say your message!⪢ \`${XeRunner}\`say**`, true)
          .addField(`📜**\`EMBED\`⮐**`, `**⧪ Send Messages in embed form!⪢ \`${XeRunner}\`embed**`, true)
          .addField(`📜**\`GOOGLE\`⮐**`, `**⧪ Search anything on google!⪢ \`${XeRunner}\`google**`, true)
          .addField(`📜**\`CALCULATOR\`⮐**`, `**⧪ Calculate any math!⪢ \`${XeRunner}\`calculator**`, true)
          .addField(`📜**\`WIKI\`⮐**`, `**⧪ Get Search Results from Wikipedia!⪢ \`${XeRunner}\`wiki**`, true)
          .addField(`📜**\`TRANSLATE\`⮐**`, `**⧪ Translates the given message.!⪢ \`${XeRunner}\`lock**`, true)
          .addField(`📜**\`WEATHER\`⮐**`, `**⧪ Shows Weather for the provided place!⪢ \`${XeRunner}\`weather**`, true)
          .addField(`📜**\`IMDB\`⮐**`, `**⧪ Get the information about series and movies!⪢ \`${XeRunner}\`imdb**`, true)
          .addField(`📜**\`ENLARGEMOJI\`⮐**`, `**⧪ Converting Server emoji to PNG/GIF!⪢ \`${XeRunner}\`enlargemoji**`, true)
          .addField(`📜**\`AVATAR\`⮐**`, `**⧪ Gives avatar for message author or mentioned user.!⪢ \`${XeRunner}\`avatar**`, true),
        ],
      });
    } else if (interaction.values[0] === "XɛTrση_Games") {
      await interaction.deferUpdate();
      await msg.edit({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(process.env.XeTrons || "#FFBF00")
          .setURL("https://github.com/krakinz")
          .setThumbnail("https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setAuthor("♚乂ΣTЯỖN⚡", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setTitle(`**Games🎮ÇðmmåñÐ§**`, "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .addField(`📜**\`CONNECT4\`⮐**`, `**⧪ connect4 in discord!!⪢ \`${XeRunner}\`connect4**`, true)
          .addField(`📜**\`CATCHFISH\`⮐**`, `**⧪ Deletes a role!⪢ \`${XeRunner}\`catchfish**`, true)
          .addField(`📜**\`FASTTYPE\`⮐**`, `**⧪ Type as fast as you can!⪢ \`${XeRunner}\`fasttype**`, true)
          .addField(`📜**\`FOOTBALL\`⮐**`, `**⧪ Football in discord!⪢ \`${XeRunner}\`football**`, true)
          .addField(`📜**\`GUNFIGHT\`⮐**`, `**⧪ Gunfight in discord!⪢ \`${XeRunner}\`gunfight**`, true)
          .addField(`📜**\`GUESSTHENUMBER\`⮐**`, `**⧪ Guess The Number!⪢ \`${XeRunner}\`guessthenumber**`, true)
          .addField(`📜**\`RPS\`⮐**`, `**⧪ Rock paper scissors in discord!⪢ \`${XeRunner}\`rps**`, true)
          .addField(`📜**\`SNAKE\`⮐**`, `**⧪ Classic snake in discord!⪢ \`${XeRunner}\`snake**`, true)
          .addField(`📜**\`TTT\`⮐**`, `**⧪ Tic Tac Toe in discord!⪢ \`${XeRunner}\`ttt**`, true),
        ],
      });
    }
  }
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");