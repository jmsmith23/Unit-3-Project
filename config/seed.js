require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Movie Props', sortOrder: 10 },
		{ name: 'Clothing and Accessories', sortOrder: 20 },
		{ name: 'Costumes', sortOrder: 30 },
		{ name: 'Miscellaneous', sortOrder: 40 }
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		{
			name: 'Boombox from Return of the Living Dead',
			description:
				'This is the boombox used by the group of punks in the classic 1985 film Return of the Living Dead. Includes generic punk rock casette.',
			category: categories[0],
			price: 1000,
			imageUrl: '/img/boombox.png'
		},
		{
			name: 'Mop from Toxic Avenger',
			description:
				'This is the mop used by Melvin Ferd Junko III to clean the health club in the 1984 film The Toxic Avenger. Also doubles as your main weapon if you happen to turn into a mutant superhero',
			category: categories[0],
			price: 85.99,
			imageUrl: '/img/toxic-mop.png'
		},
		{
			name: 'Sacrifyx Record from The Gate',
			description:
				'Need to close up that whole in your backyard that is allowing demons to come to earth to try to kill you? Look no further. This record from the 1987 film The Gate, titled The Dark Book by Sacrifyx, will guide you all the way. Condition is NM+',
			category: categories[0],
			price: 200,
			imageUrl: '/img/the-gate.png'
		},
		{
			name: 'Brain in Jar from Blood Diner',
			description:
				'Want to perform a blood buffet and resurrect Sheetar but have no clue where to start? Namtut Anwars preserved brain will walk you through every step of the way.',
			category: categories[0],
			price: 1249.99,
			imageUrl: '/img/blood-diner.png'
		},
		{
			name: 'Popcorn from Troll 2',
			description:
				'A sealed bag of popcorn from the 1990 film Troll 2. Do you like popcorn? Well you just have to...heat it up.',
			category: categories[0],
			price: 19.99,
			imageUrl: '/img/troll2.png'
		},
		{
			name: 'Jar of toxic moonshine from Redneck Zombies',
			description:
				'Is White Claw out of your budget and kind of lame anyway? Get yourself some of Jed Clemsons finely crafted moonshine and have a night you will never forget. From the set of the 1989 film Redneck Zombies.',
			category: categories[0],
			price: 42.99,
			imageUrl: '/img/moonshine.png'
		},
		{
			name: 'Mac puppet from Mac and Me',
			description:
				'Mac and Me? More like Mac and You! This prop from the 1988 film Mac and Me can now be yours for a price thats out of this world.',
			category: categories[0],
			price: 999.99,
			imageUrl: '/img/mac.png'
		},
		{
			name: 'Samurai Sword from Samurai Cop',
			description:
				'Are you ready to take down the Katana gang? You wont get too far without this sword from the 1991 film Samurai Cop.',
			category: categories[0],
			price: 599.99,
			imageUrl: '/img/samurai.png'
		},
		{
			name: 'Football from The Room',
			description:
				'If you only own one piece of sports memorabilia, this is the one to own. Show it off on your mantle or just toss it around with some friends on a roof somewhere. From the 2003 film The Room.',
			category: categories[0],
			price: 299,
			imageUrl: '/img/football.png'
		},
		{
			name: '101 Series Protector Robot from Chopping Mall',
			description:
				'Protect your family with this security robot from the 1986 film Chopping Mall. Not responsible for the results of any malfunctions.',
			category: categories[0],
			price: 1800,
			imageUrl: '/img/robot.png'
		},
		{
			name: 'Baseball Cap from Over The Top',
			description:
				'Need a quick $100k for a semi-truck and want to impress your son at the same time? This baseball cap from the 1987 film Over The Top has got you covered. Simply turn it backwards and you too can be an unbeatable arm wrestling champion. One size fits most',
			category: categories[1],
			price: 65.99,
			imageUrl: '/img/over-the-top.png'
		},
		{
			name: 'Who Farted? T-shirt from Revenge of the Nerds',
			description:
				'Be the life of the party with this shirt worn by Booger in the 1984 film Revenge of the Nerds. Looks gross, smells grosser. Size Medium',
			category: categories[1],
			price: 135,
			imageUrl: '/img/tshirt.png'
		},
		{
			name: 'Lord Humungus Mask From The Road Warrior',
			description:
				'Show your reasonable side and give Jason a run for his money with this mask used in the 1981 film The Road Warrior.',
			category: categories[1],
			price: 49.99,
			imageUrl: '/img/humungus.png'
		},
		{
			name: 'Spandex One Piece Suit from Breakin 2: Electric Bugaloo',
			description:
				'This one piece spandex suit worn by Jean-Claude Van Damme in the 1984 film Breakin 2: Electric Bugaloo is sure to land you your first cameo in a break dancing movie. Get it today. Size Medium',
			category: categories[1],
			price: 79.95,
			imageUrl: '/img/breakin.png'
		},
		{
			name: 'Fu Manchu Tank Top from Big Trouble In Little China',
			description:
				'The only thing keeping you from being as legendary as Jack Burton is this Fu Manchu tank top from the 1986 film Big Trouble In Little China. Have you paid your dues Jack... yessir the check is in the mail. Size Large',
			category: categories[1],
			price: 45.99,
			imageUrl: '/img/fu-manchu.png'
		},
		{
			name: 'Earring from Stone Cold',
			description:
				'This earring worn by Brian Bosworth in the 1991 film Stone Cold hangs at just the right length to accentuate the true length (and power) of your mullet. Made with 50% sterling silver and 100% pure attitude.',
			category: categories[1],
			price: 89.99,
			imageUrl: '/img/earring.png'
		},
		{
			name: 'Sunglasses from They Live',
			description:
				'Ready to see the truth? These stylish sunglasses from the 1988 film They Live allow you to see who is human and who is an alien plotting to subdue the human race. Save the world today.',
			category: categories[1],
			price: 125.95,
			imageUrl: '/img/sunglasses.png'
		},
		{
			name: 'Army Jacket from Day of the Dead',
			description:
				'If brute force is your way of life and scientists are just a bunch of hippies, you need this army coat worn by Captain Rhodes in the 1985 film Day of the Dead. Take control of the monkey farm today. Size Large',
			category: categories[1],
			price: 75.95,
			imageUrl: '/img/rhodes.png'
		},
		{
			name: 'Suit from Dead Heat',
			description:
				'You are in for a real "treat" with this suit worn by Treat Williams in the 1988 film Dead Heat. In a world full of Arthur P Loudermilks, be a Roger Mortis. Size Large',
			category: categories[1],
			price: 400,
			imageUrl: '/img/mortis.png'
		},
		{
			name: 'Hitchhiker Raincoat from Creepshow 2',
			description:
				'Thanks for the ride, lady. From the 1987 film Creepshow 2. Size Medium',
			category: categories[1],
			price: 123,
			imageUrl: '/img/creepshow.png'
		},
		{
			name: 'Skeletor Costume from Masters of the Universe',
			description:
				'The actual costume worn by Frank Langella for his moving performance as Skeletor in the 1987 film Masters of the Universe. Size Large',
			category: categories[2],
			price: 1000,
			imageUrl: '/img/skeletor.png'
		},
		{
			name: 'Ninja Outfit from American Ninja 4',
			description:
				'This is the yellow ninja outfit worn by 0 time award nominated actor Michael Dudikoff in the 1990 classic American Ninja 4. Size Medium',
			category: categories[2],
			price: 700,
			imageUrl: '/img/american-ninja.png'
		},
		{
			name: 'Nat Nerd Costume from The Garbage Pail Kids Movie',
			description:
				'If the struggles of life are too much to handle, grab this Nat Nerd costume from the 1987 film The Garbage Pail Kids Movie and watch everything change',
			category: categories[2],
			price: 800,
			imageUrl: '/img/nat-nerd.png'
		},
		{
			name: 'Allan Quatermain Outfit',
			description:
				'Whats worse, an Indiana Jones ripoff or the last two Indiana Jones movies? Thats what I thought! Get the outfit that ripped off the original before the original ripped off the original. From the 1986 film Allan Quartermain and the Lost City of Gold.',
			category: categories[2],
			price: 300,
			imageUrl: '/img/allan-q.png'
		},
		{
			name: 'Wolfman from Monster Squad',
			description:
				'You know you want this Wolfman costume from the 1987 film The Monster Squad. Comes with a free sports cup. Size X-Large',
			category: categories[2],
			price: 1400,
			imageUrl: '/img/wolfman.png'
		},
		{
			name: 'Cop Uniform from Maniac Cop',
			description:
				'Get away with murder without the headache of the police academy with this cop uniform worn by the legend Robert Zdar in the 1988 film Maniac Cop. Size X-Large',
			category: categories[2],
			price: 300,
			imageUrl: '/img/zdar.png'
		},
		{
			name: 'Kuato costume From Total Recall',
			description:
				'Hide your beer belly and open your mind with this Kuato costume from the 1990 film Total Recall. Says 10 different phrases, batteries not included.',
			category: categories[2],
			price: 900,
			imageUrl: '/img/kuato.png'
		},
		{
			name: 'Kids Costume from Halloween III: Season of the Witch',
			description:
				'Straight from Silver Shamrock, this is the Pumpkin costume from the 1982 film Halloween III: Season of the Witch. Comes with a complimentary 6 month subscription to a local pest control company of your choice. Size Small',
			category: categories[2],
			price: 600,
			imageUrl: '/img/halloween3.png'
		},
		{
			name: 'Demonicus Costume from Demonicus',
			description:
				'If you have ever hoped of living the life of a gladiator and your friends are all kind of lame anyway, score this Demonicus costume from the 2001 film Demonicus',
			category: categories[2],
			price: 150,
			imageUrl: '/img/demonicus.png'
		},
		{
			name: 'Greener Costume from Hell Comes To Frogtown',
			description:
				'If being a mutant frog in a post apocalyptic world sounds awesome to you, get this frog costume from the 1988 film Hell Comes To Frogtown. Size Large',
			category: categories[2],
			price: 2000,
			imageUrl: '/img/greener.png'
		},
		{
			name: 'Guitar from Miami Connection',
			description:
				'Ready to take down a drug cartel and a group of ninjas while being in the hottest band in town? Now you can with this guitar from the 1987 film Miami Connection. Comes with tabs for the hit song Against The Ninja.',
			category: categories[3],
			price: 1700,
			imageUrl: '/img/miami.png'
		},
		{
			name: 'Subway Poster for Death Spa',
			description:
				'Remember when you could not go anywhere without passing one of these beauties? Me neither but thats no reason not to take up a wall in your house with this 40 x 60 poster from the 1989 film Death Spa.',
			category: categories[3],
			price: 80,
			imageUrl: '/img/deathspa.png'
		},
		{
			name: 'Chop Top Coat Hanger from Texas Chainsaw Massacre 2',
			description:
				'Need a device to scratch the area around that metal plate in your scalp? Get yourself this coat hanger from the 1986 classic Texas Chainsaw Massacre 2. Lighter included.',
			category: categories[3],
			price: 500,
			imageUrl: '/img/choptop.png'
		},
		{
			name: 'Action Jackson Soundtrack (LP)',
			description:
				'For the last time ever, get your hands on this rare copy of the soundtrack from the 1988 film Action Jackson. Condition is NM and contains an autograph of Jackie Krost, the movies music supervisor.',
			category: categories[3],
			price: 80,
			imageUrl: '/img/actionjackson.png'
		},
		{
			name: 'Hand Written Score from Attack Force',
			description:
				'Tap into your musical genius and impress your friends with this handwritten score from composer Barry Taylor from the 2006 film Attack Force.',
			category: categories[3],
			price: 2000,
			imageUrl: '/img/music.png'
		},
		{
			name: 'Panaflex Camera Used To Film The Skateboard Kid',
			description:
				'We have all seen the 1993 film The Skateboard Kid more times than we can recall, now see it through the eyes of director Larry Swerdlove with the actual camera used to film the movie.',
			category: categories[3],
			price: 50000,
			imageUrl: '/img/camera.png'
		},
		{
			name: 'Cloth Backdrop from Carnosaur',
			description:
				'Take your kids next class photo in front of this backdrop used to make the VHS version cover of the 1993 film Carnosaur.',
			category: categories[3],
			price: 100,
			imageUrl: '/img/carnosaur.png'
		},
		{
			name: 'Mall Map from Sorority Babes in the Slimeball Bowl-A-Rama',
			description:
				'Never get lost running away from demons again with this mall directory from the 1988 film Sorority Babes in the Slimeball Bowl-A-Rama.',
			category: categories[3],
			price: 1255.95,
			imageUrl: '/img/mallmap.png'
		},
		{
			name: 'Signed Photo of Frank Henelotter',
			description:
				'Your collection isnt complete without this signed photo of Frank Henelotter, director of the Basket Case movies and many others.',
			category: categories[3],
			price: 500,
			imageUrl: '/img/frank.png'
		},
		{
			name: 'Animation Cel from Stay Tuned',
			description:
				'Grab this animation cel from the 1992 film Stay Tuned and put yourself in the middle of the action. Signed by cel cleaner Donna Narhuminti herself.',
			category: categories[3],
			price: 1000,
			imageUrl: '/img/tooned.png'
		}
	]);
	console.log(items);

	process.exit();
})();
