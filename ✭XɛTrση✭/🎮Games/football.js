"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";
"๐";
"๐";
module.exports = {
	name: 'football',
	aliases: [],
	run: async (client, message, args) => {
		const positions = {
			left: '_ _                   ๐ฅ๐ฅ๐ฅ\n_ _                   ๐ด๏ธ\n      \n_ _                         โฝ',
			middle: '_ _                   ๐ฅ๐ฅ๐ฅ\n_ _                        ๐ด๏ธ\n      \n_ _                         โฝ',
			right: '_ _                   ๐ฅ๐ฅ๐ฅ\n_ _                              ๐ด๏ธ\n      \n_ _                         โฝ',
		};
		let randomized = Math.floor(Math.random() * Object.keys(positions).length);
		let gameEnded = false;
		let randomPos = positions[Object.keys(positions)[randomized]];

		const componentsArray = [{
			type: 1,
			components: [{
					type: 2,
					style: 'SECONDARY',
					custom_id: 'left',
					label: 'Left',
				},
				{
					type: 2,
					style: 'PRIMARY',
					custom_id: 'middle',
					label: 'Middle',
				},
				{
					type: 2,
					style: 'SECONDARY',
					custom_id: 'right',
					label: 'Right',
				},
			],
		}, ];

		const msg = await message.channel.send({
			content: randomPos,
			components: componentsArray,
		});

		function update() {
			randomized = Math.floor(Math.random() * Object.keys(positions).length);
			randomPos = positions[Object.keys(positions)[randomized]];

			msg.edit({
				content: randomPos,
				components: componentsArray,
			});
		}
		setInterval(() => {
			if (gameEnded == false) return update();
		}, 1000);

		const filter = button => {
			return button.user.id === message.author.id;
		};
		const button = await msg.awaitMessageComponent({
			filter: filter,
			componentType: 'BUTTON',
			max: 1
		});

		if (button.customId !== Object.keys(positions)[randomized]) {
			gameEnded = true;
			return button.reply({
				content: 'You won!'
			});
		} else {
			gameEnded = true;
			return button.reply({
				content: 'You lose...'
			});
		}
	},
};
"๐";
"๐";
"๐============================================================================================================================<โก>";
"โก๐๐๐๐ซ๐จ๐งโก ๐ข๐ฌ ๐ ๐๐ข๐ฌ๐๐จ๐ซ๐ ๐๐๐ซ๐ฏ๐๐ซ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!";
"๐============================================================================================================================<โก>";