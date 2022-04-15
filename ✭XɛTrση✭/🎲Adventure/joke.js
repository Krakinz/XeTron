"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";
"🐙";
"🐙";
const Discord = require("discord.js");
module.exports = {
  cooldown: 5,
  name: "joke",
  description: "Sends a random joke",
  run: async (client, message, args) => {
    var jokes = [
      "Atom walks into a bar. The bartender tells him to split. Everyone dies.",
      'A red ball says to a blue ball, "I can bounce higher than you!" The blue ball just sits in silence because it’s an inanimate object with no mouth.',
      'git commit -m "fix typeo"',
      'git commit -m "once more with feeling"',
      'git commit -m "synergizing backward overflow for upward mobility"', // thanks to 30 Rock
      'Hammer walks into a bar. Bartender asks him how work went today. "Nailed it!"',
      "I wish I could love unicorns, but love isn’t real.",
      'A man walks into a bar and ask for a beer.\nThe bartender is a horse but pours one anyway.\nThe man says, "This isn’t a beer," and promptly wakes up in a cold sweat, staring into the loveless eyes of his partner, who has been watching him sleep with a knife raised over his head.\nThe man jolts awake a second time and finds himself back in the bar, holding the glass of liquid.\n"Well, I’ll drink it anyway."\nThe horse says nothing.\n ⇒ That isn’t a joke; it’s your fortune.',
      "The oil excavators attempted in vain to clean up the spill.\nIt was crude.",
      // found and overheard by https://github.com/atomantic
      // this is apparently the Dutch equivalent common-knowledge joke of "why did the chicken cross the road"
      // heard it in high-school from a Dutch exchange student and it blew my mind
      'A mouse and an elephant are walking across a bridge. The mouse turns to the elephant and says, "We make a lot of noise."',
      'Man, I spent a long time at the Gym this morning.\n ⇒ We’ve started calling the bathroom "the Gym".',
      'Got arrested at the airport. Apparently, security doesn’t appreciate it when you call "shotgun" before boarding a plane.',
      "You know what you get when you cross a rabbit with a rottweiler?\n ⇒ A rottweiler.",
      "You know what you get when you cross a cow with an octopus?\n ⇒ A visit from the ethics committee and immediate withdrawal of your funding.",
      "You know why baby ducks walk so softly?\n ⇒ Because they can’t walk, hardly.",
      "I farted on the elevator.\n ⇒ It was wrong on so many levels.",
      "I once made a belt out of wrist watches; `it was a complete waist of time.",
      'A doe walks out of the woods, "That’s the last time I do that for two bucks."',
      "You know why dinosours can’t talk?\n ⇒ because they’re dead.",
      "I’ve lost my thesaurus. I can’t find the words to describe how upsetting this is.",
      "A woman walked into a bar and asked the bartender for a double entendre. So the bartender gave it to her.",
      "Whoever put the letter ’b’ in the word ’subtle’ deserves a pat on the back.",
      "Whose cruel idea was it for the word ’lisp’ to have an ’s’ in it?",
      "Why is there no other word for thesaurus?",
      "Is there another word for synonym?",
      'A man falls from the rooftop of a 20 story building. People on the 10th floor hear him falling, "So faaaaar so gooooood!"',
      'A boy says to his mother, "Mom, why is it everyone in our family dies so young?"\n ⇒ \n"Mother?"\n\n\n"Mother?"',
      "A man goes into a confessional and says, \"Father, I've done something terrible. I've murdered a man. And I have these horrible thoughts. I want to kill so many more people. I don't know if I can stop myself. What should I do?\"\nThe priest says, \"My son, the punishment for killing one of Gods children is eternal damnation. You'd be a fool to stop now.\"",
      // https://www.reddit.com/r/dadjokes/comments/bw6qrb/before_my_surgery_the_anesthetist_offered_to/
      "Before surgery, my anesthesiologist offered to put me under with gas or a boat paddle.\n ⇒ It was an ether/oar situation.",
      // https://www.reddit.com/r/dadjokes/comments/bxt5u6/a_friend_of_mine_tries_to_impress_girls_by/
      "My friend likes to impress girls by drawing detailed pictures of a Ford F-150.\n ⇒ He's a pickup artist.",
      // https://www.reddit.com/r/dadjokes/comments/bxlrbz/my_friend_couldnt_afford_to_pay_his_water_bill/
      'My friend couldn\'t afford to pay his water bill.\n ⇒ I sent him a "Get Well Soon" card',
      // https://www.reddit.com/r/dadjokes/comments/b8cgvx/of_all_the_inventions_of_the_last_100_years_the/
      "Of all the inventions of the last 100 years, the dry erase board has to be the most remarkable.",
      // https://www.reddit.com/r/dadjokes/comments/bt8h2l/my_wife_screamed_you_havent_listened_to_a_single/
      "My wife screamed \"you haven't listened to a single word I've said, have you?!\"\n ⇒ What a weird way to start a conversation.",
      // https://www.reddit.com/r/dadjokes/comments/8gzvpm/my_wife_is_really_mad_at_the_fact_that_i_have_no/
      "My wife is really mad at the fact that I have no sense of direction.\n ⇒ So I packed up my stuff and right.",
      // https://www.reddit.com/r/dadjokes/comments/ak1x0e/two_drunk_guys_were_about_to_get_into_a_fight_one/
      "Two drunk guys were about to get into a fight. One draws a line in the dirt and says, “If you cross this line, I’ll hit you in the face.”\n ⇒ That was the punchline.",
      // https://www.reddit.com/r/dadjokes/comments/arizsp/asked_my_date_to_meet_me_at_the_gym_but_she_never/
      "Asked My Date To Meet Me At The Gym, But She Never Showed Up...\n ⇒ Guess the two of us aren’t going to work out",
      // from https://github.com/mycargus
      "“I’m sorry” and “I apologize” mean the same thing... except when you’re at a funeral.",
      'I used to think the brain was the most important organ.\n ⇒  Then I thought, "Look what’s telling me that!"',
      "If I’ve told you once, I’ve told you a million times: Don’t exaggerate!",
      "It’s hard to explain puns to kleptomaniacs because they always take things literally.",
      "Did you hear about the new corduroy pillows?\n ⇒  They’re making headlines everywhere!",
      "I wondered why the baseball was getting bigger. Then it hit me.",
      "I started a band called 999 Megabytes — we don’t have a gig yet.",
      "What is red and smells like blue paint?\n ⇒ Red paint.",
      "Why was six afraid of seven? It wasn’t. Numbers aren’t sentient and thus incapable of feeling fear.",
      "A horse walked into a bar. Several people got up and left as they spotted the potential danger in the situation.",
      "What’s green and has wheels? Grass. I lied about the wheels.",
    ];
    await message.reply(jokes[Math.floor(Math.random() * jokes.length)]);
  },
};
"🐙";
"🐙";
"🐙============================================================================================================================<⚡>";
"⚡𝐗𝐞𝐓𝐫𝐨𝐧⚡ 𝐢𝐬 𝐚 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐒𝐞𝐫𝐯𝐞𝐫 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!";
"🐙============================================================================================================================<⚡>";