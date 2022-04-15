"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
require("dotenv").config();
const {
  Anime
} = require("djs-anime");
const Discord = require("discord.js");
const {
  PokeList
} = require("../../pokelist");
var path = require("path");
let poke = PokeList[Math.floor(Math.random() * PokeList.length)];
console.log(poke);
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toUpperCase();
module.exports = {
  cooldown: 5,
  name: "kill",
  run: async (client, message) => {
    const Hit = message.mentions.members.first();
    if (!Hit) {
      // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
      const redArea = `❌${poke.toUpperCase()} says 𝐏𝐨𝐤é𝐎𝐩𝐬𝐢𝐞 \n-⧪   Wrong Usage !!\n\n🧀𝐔𝐬𝐚𝐠𝐞\n+⧪   ${message.client.prefix
        }${newScpt.toLowerCase()} <on|off>`;
      const cyanArea = `💡${newScpt} Details:\n\nIs he dead?`;
      require("dotenv").config();
      await message.react("❌");
      return await message.reply({
        embeds: [
          new Discord.MessageEmbed()
          .setTimestamp()
          .setURL("https://github.com/krakinz")
          .setColor(process.env.redArea || "#B33F40")
          .setTitle(`**\`\`\`${newScpt} Command Helper\`\`\`**`)
          .setThumbnail(`https://i.some-random-api.ml/pokemon/${poke}.png`)
          .setAuthor("⚡乂ΣTЯỖN☆•", "https://i.postimg.cc/bwrSWMdK/XeTron.gif")
          .setFooter(`👈🏽Requested by ${message.author.username}`, message.author.avatarURL({
            dynamic: true
          })).setDescription(`**\`\`\`diff
${redArea}\`\`\`

\`\`\`fix
${cyanArea}
\`\`\`**`),
        ],
      });
    }
    `❌""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""❌`;
    var kills = [
      ` after a long day, plops down on the couch with ${Hit} and turns on The Big Bang Theory. After a Sheldon Cooper joke, ${Hit} laughs uncontrollably as they die.`,
      `${message.author.username} Alt+F4'd ${Hit}.exe!`,
      `${message.author.username} attempted to play a flute, exploding the head of ${Hit}.`,
      `${message.author.username} blew his ear drums out listening to music too hard.`,
      `${message.author.username} challenges ${Hit} to a fist fight to the death. ${Hit} wins.`,
      `${message.author.username} cleaves the head of ${Hit} with a keyboard.`,
      `${message.author.username} crushes ${Hit} with a fridge.`,
      `${message.author.username} decapitates ${Hit} with a sword.`,
      `${message.author.username} drags ${Hit}s ears too hard and rips them off.`,
      `${message.author.username} drowns ${Hit} in a beer barrel.`,
      `${message.author.username} drowns ${Hit} in a tub of hot chocolate. *How was your last drink?*`,
      `${message.author.username} eviscerates ${Hit} with a rusty butter knife. Ouch!`,
      `${message.author.username} feeds toothpaste-filled oreos to ${Hit}, who were apparently allergic to fluorine. GGWP.`,
      `${message.author.username} fell in love with ${Hit} then broke his heart literally.`,
      `${message.author.username} fires a supersonic frozen turkey at ${Hit}, killing them instantly.`,
      `${message.author.username} forgot to leave the car door window open and ${Hit} dies from overheating`,
      `${message.author.username} forgot to zombie-proof ${Hit} lawn... Looks like zombies had a feast last night.`,
      `${message.author.username} gets ${Hit} to watch anime with them. ${Hit} couldn't handle it.`,
      `${message.author.username} grabs ${Hit} and shoves them into an auto-freeze machine with some juice and sets the temperature to 100 Kelvin, creating human ice pops.`,
      `${message.author.username} hired me to kill you, but I don't want to! ${Hit}`,
      `${message.author.username} hugs ${Hit} too hard..`,
      `${message.author.username} hulk smashes ${Hit} into a pulp.`,
      `${message.author.username} killed ${Hit} by ripping the skin off of their face and making a mask out of it.`,
      `${message.author.username} kills ${Hit} after hours of torture.`,
      `${message.author.username} kills ${Hit} with a candlestick in the study`,
      `${message.author.username} kills ${Hit} with kindness`,
      `${message.author.username} kills ${Hit} with their own foot.`,
      `${message.author.username} murders ${Hit} with an axe.`,
      `${message.author.username} pressed delete. It deleted ${Hit}`,
      `${message.author.username} pushes ${Hit} into the cold vacuum of space.`,
      `${message.author.username} runs ${Hit} over with a PT Cruiser.`,
      `${message.author.username} shoots ${Hit} in the head.`,
      `${message.author.username} shoots in ${Hit} mouth with rainbow laser, causing ${Hit} head to explode with rainbows and ${Hit} is reborn as unicorn. :unicorn:`,
      `${message.author.username} shot ${Hit} using the Starkiller Base!`,
      `${message.author.username} slips bleach into ${Hit}'s lemonade.`,
      `${message.author.username} strangles ${Hit}.`,
      `${message.author.username} straps ${Hit} to an ICBM and sends them to North Korea along with it.`,
      `${message.author.username} strikes ${Hit} with the killing curse... *Avada Kedavra!*`,
      `${message.author.username} tears off ${Hit}s lips after a kiss.`,
      `${message.author.username} thicc and collapses ${Hit}'s rib cage`,
      `${message.author.username} tries to shoot the broad side of a barn, misses and hits ${Hit} instead.`,
      `${message.author.username} turns on Goosebumps(2015 film) on the TV. ${Hit} being a scaredy-cat, dies of an heart attack.`,
      `${message.author.username} was so swag that ${Hit} died due to it. #Swag`,
      `${message.author.username}, are you sure you want to kill ${Hit}? They seem nice to me.`,
      `${Hit} accidentally clicked on a popup ad that reads \`Doctors hate us, see the one best trick for dying today!\``,
      `${Hit} accidentally tripped and died while getting up to write their suicide note.`,
      `${Hit} ate a piece of exotic butter. It was so amazing that it killed them.`,
      `${Hit} ate an apple and turned out it was made out of wax. Someone died from wax poisoning later that day.`,
      `${Hit} ate too many laxatives and drowned in their own shit. Ew.`,
      `${Hit} bleeds out after trying to get on \`Dumbest hillbilly moments\`.`,
      `${Hit} bought a fidget spinner and drowned in pussy.`,
      `${Hit} can't be killed, as they are a ghost.`,
      `${Hit} chokes in a trash can.`,
      `${Hit} chokes on a chicken bone.`,
      `${Hit} chokes on cheerios and dies. What an idiot...`,
      `${Hit} cranks up the music system only to realize the volume was at max and the song playing was Baby by Justin Beiber...`,
      `${Hit} cums in eye, goes blind, runs for help but ran straight onto train tracks and gets plowed by a train.`,
      `${Hit} decided it was a good idea to fight a tiger while smelling like meat. It did not end well.`,
      `${Hit} did not make a meme dank enough and was stoned.`,
      `${Hit} died after fapping 50 times in a row with no break.`,
      `${Hit} died after gaming for 90 hours straight without moving or eating.`,
      `${Hit} died after playing with an edgy razor blade fidget spinner.`,
      `${Hit} died after realizing how shitty their grammar was`,
      `${Hit} died after trying to out-meme Dank Memer.`,
      `${Hit} died an honorable death. Death by snoo snoo.`,
      `${Hit} died because RemindMeBot forgot to remind them to breathe`,
      `${Hit} died because they started playing with a fidget spinner but they realise its 2016 so you start fapping to the old witch in snow white and obama starts mowing their lawn and they jump out of the window and get ripped to pieces by Obama's lawn mower`,
      `${Hit} died due to ${message.author.username} being so stupid`,
      `${Hit} died due to eating WAY too many hotdogs in preparation for their date Friday night.`,
      `${Hit} died eating expired and infected raw fish with the filthiest rice in the world as sushi while being constantly stabbed in the scrotum with a 9inch nail sharp enough to stab through kevlar. The soy sauce was cat piss.`,
      `${Hit} died from a high salt intake`,
      `${Hit} died from a swift kick to the brain.`,
      `${Hit} died from a tragic amount of bad succ`,
      `${Hit} died from doing the ice bucket challenge.`,
      `${Hit} died from drinking too much water Huh, I guess it IS possible!.`,
      `${Hit} died from eating cactus needles.`,
      `${Hit} died from eating too much ass.`,
      `${Hit} died from eating too much bread :/`,
      `${Hit} died from ebola.`,
      `${Hit} died from meme underdose :/`,
      `${Hit} died from not eating enough ass.`,
      `${Hit} died from not whacking it enough. (There's a healthy balance, boys)`,
      `${Hit} died from reposting in the wrong neighborhood`,
      `${Hit} died from shitting for 36 hours straight.`,
      `${Hit} died from swallowing rocks too fast`,
      `${Hit} died from too many sunburns.`,
      `${Hit} died from whacking it too much. (There's a healthy balance, boys)`,
      `${Hit} died of oversucc`,
      `${Hit} died when testing a hydrogen bomb. There is nothing left to bury.`,
      `${Hit} died while listening to 'It's every day bro'`,
      `${Hit} died while playing hopscotch on *seemingly* deactivated land mines.`,
      `${Hit} died while trying to find the city of England`,
      `${Hit} died. OOF`,
      `${Hit} dies after swallowing a toothpick.`,
      `${Hit} dies at the hands of ${message.author.username}.`,
      `${Hit} dies because they used a bobby pin to lift their eyelashes`,
      `${Hit} dies because they were just too angry.`,
      `${Hit} dies by swearing on a Christian Minecraft server`,
      `${Hit} dies due to lack of friends.`,
      `${Hit} dies from bad succ.`,
      `${Hit} dies from dabbing too hard.`,
      `${Hit} dies from dabbing too hard`,
      `${Hit} dies from disrespecting wahmen.`,
      `${Hit} dies from just being a bad, un-likeable dude.`,
      `${Hit} dies from posting normie memes.`,
      `${Hit} dies from severe dislike of sand. It's coarse and rough and irritating it gets everywhere`,
      `${Hit} dies from watching the emoji movie and enjoying it.`,
      `${Hit} dies in a horrible accident, and it was engineered by ${message.author.username}.`,
      `${Hit} dies north of the wall and transforms into a white walker`,
      `${Hit} dies of AIDS.`,
      `${Hit} dies of dysentery.`,
      `${Hit} dies of natural causes.`,
      `${Hit} dies of starvation.`,
      `${Hit} dies on death row via lethal injection after murdering ${message.author.username} and their family.`,
      `${Hit} dies, but don't let this distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer’s table`,
      `${Hit} dies.`,
      `After a struggle, ${Hit} kills ${message.author.username}`,
      `${Hit} disappeared from the universe.`,
      `${Hit} drank some toxic soda before it was recalled.`,
      `${Hit} dropped a Nokia phone on their face and split their skull.`,
      `${Hit} drowned in their own tears.`,
      `${Hit} eats too much copypasta and explodes`,
      `${Hit} fell down a cliff while playing Pokemon Go. Good job on keeping your nose in that puny phone. :iphone:`,
      `${Hit} fell into a pit of angry feminists.`,
      `${Hit} gets hit by a car.`,
      `${Hit} gets stabbed by ${message.author.username}`,
      `${Hit} gets struck by lightning.`,
      `${Hit} goes genocide and Sans totally dunks ${Hit}!`,
      `${Hit} got into a knife fight with the pope. One of them is in hell now.`,
      `${Hit} got stepped on by an elephant.`,
      `${Hit} died from eating too much ass.`,
      `${Hit} has a stroke after a sad miserable existence. They are then devoured by their ample cats.`,
      `${Hit} has been found guilty, time for their execution!`,
      `${Hit} has some bad chinese food, and pays the ultimate price.`,
      `${Hit} is abducted by aliens, and the government kills them to cover it up.`,
      `${Hit} is dead at the hands of ${message.author.username}.`,
      `${Hit} is injected with chocolate syrup, which mutates them into a person made out of chocolate. While doing a part-time job at the Daycare, they are devoured by the hungry babies. :chocolate_bar:`,
      `${Hit} is killed by a rabbit with a vicious streak a mile wide`,
      `${Hit} is killed by their own stupidity.`,
      `${Hit} is killed in a robbery gone wrong.`,
      `${Hit} is not able to be killed. Oh, wait, no, ${message.author.username} kills them anyway.`,
      `${Hit} is so dumb that they choked on oxygen.`,
      `${Hit} is stuffed into a suit by Freddy on their night guard duty. Oh, not those animatronics again!`,
      `${Hit} is sucked into Minecraft. ${Hit}, being a noob at the so called Real-Life Minecraft faces the Game Over screen.`,
      `${Hit} killed themselves after seeing the normie memes that ${message.author.username} posts.`,
      `${Hit} kills themselves after realizing how dumb ${message.author.username} is.`,
      `${Hit} lives, despite ${message.author.username}'s murder attempt.`,
      `${Hit} loses the will to live`,
      `${Hit} presses a random button and is teleported to the height of 100m, allowing them to fall to their inevitable death. Moral of the story: Don't go around pressing random buttons.`,
      `${Hit} reads memes till they die.`,
      `${Hit} ripped his heart out..`,
      `${Hit} ripped their own heart out to show their love for ${message.author.username}.`,
      `${Hit} screams in terror as they accidentally spawn in the cthulhu while uttering random latin words. Cthulhu grabs ${Hit} by the right leg and takes them to his dimension yelling, \`Honey, Dinner's ready!\``,
      `${Hit} slipped in the bathroom and choked on the shower curtain.`,
      `${Hit} slips on a banana peel and falls down the stairs.`,
      `${Hit} spins a fidget spinner and when it stops he dies...`,
      `${Hit} steps on a george foreman and dies of waffle foot.`,
      `${Hit} takes an arrow to the knee. And everywhere else.`,
      `${Hit} talked back to mods and got destroyed by the ban hammer.`,
      `${Hit} tips his fedora too far and falls onto the tracks of an oncoming subway.`,
      `${Hit} tried to get crafty, but they accidentally cut themselves with the scissors.:scissors:`,
      `${Hit} tried to get famous on YouTube by live-streaming something dumb. Skydiving while chained to a fridge.`,
      `${Hit} tried to outrun a train, the train won.`,
      `${Hit} tried to pick out the holy grail. He chose... poorly.`,
      `${Hit} tried to play in the street...`,
      `${Hit} trips over his own shoe laces and dies.`,
      `${Hit} vocally opposed the Clintons and then suddenly disappeared.`,
      `${Hit} was a resident of Alderaan before Darth Vader destroyed the planet...`,
      `${Hit} was accused of stealing Neptune's crown...`,
      `${Hit} was charging their Samsung Galaxy Note 7...`,
      `${Hit} was eaten alive by ants`,
      `${Hit} was given a chance to synthesize element 119 (Ununennium) and have it named after them, but they messed up. R.I.P.`,
      `${Hit} was killed by ${message.author.username} with baby wipes.`,
      `${Hit} was murdered by ${message.author.username} and everyone knows it, but there is no proof.`,
      `${Hit} was scooped by ${message.author.username} and their innards are now Ennard.`,
      `${Hit} was teleported to the timeline where Jurassic World was real and they were eaten alive by the Indominus Rex.`,
      `${Hit} was thrown in the crusher of a trash truck by ${message.author.username}.`,
      `${Hit} was walking normally when out of the corner of their eye they saw someone do a bottle flip and dab causing ${Hit} to have a stroke.`,
      `${Hit} watched the Emoji Movie and died of sheer cringe.`,
      `${Hit} went on a ride with a lead balloon.`,
      `After getting pushed into the ocean by ${message.author.username}, ${Hit} is eaten by a shark.`,
      `After raid of roblox kids entered the server, ${Hit} died of cancer.`,
      `Aids, ${Hit} died from aids.`,
      `Calling upon the divine powers, ${message.author.username} smites ${Hit} and their heathen ways`,
      `In a sudden turn of events, I **don't** kill ${Hit}.`,
      `no u`,
      `Our lord and savior Gaben strikes ${Hit} with a lighting bolt.`,
      `Sorry, ${message.author.username}, I don't like killing people.`,
      `The bullet missed Harambe and hit ${Hit} instead. Yay for Harambe!`,
      `While performing colonoscopy on an elephant, ${Hit} gets their head stuck in the elephants rectum and chokes.`,
    ];
    message.reply({
      embeds: [
        new Discord.MessageEmbed()
        .setColor("#c3a14a")
        .setDescription(
          `**${kills[Math.floor(Math.random() * kills.length)]}**`
        ),
      ],
    });
    const XɛTrσηAnime = new Anime({
      message: message,
      embedTitle: `**\`${Hit.displayName} AKA ⚰️💀\`**`,
      embedFooter: `Reqstd by ${message.author.username}`,
      embedColor: process.env.XeTrons || "#FFBF00",
    });
    XɛTrσηAnime.kill();
  },
};
("🐙");
("🐙");
("🐙============================================================================================================================<⚡>");
("⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!");
("🐙============================================================================================================================<⚡>");