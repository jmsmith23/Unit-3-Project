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
			name: 'Bounty Hunter Gun from Critters',
			description:
				'Have you always dreamed of being a bounty hunter? Do you look like 80s era Bon Jovi? This is the gun used by Ug (Terrance Mann) in the 1986 film Critters, make it yours today. For use on "critters" only.',
			category: categories[0],
			price: 1299.95,
			imageUrl: '/img/critter-gun.png'
		},
		{
			name: 'Bucket of broken glass from Kickboxer',
			description:
				'Trying to fight the ancient way but find yourself missing something? Take home this bucket of broken glass from the 1989 film Kickboxer starring Jean-Claude van Damme and be a real kickboxing champion, Nok Su Kow.',
			category: categories[0],
			price: 75,
			imageUrl: '/img/kickboxer.png'
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
			name: 'Binoculars from Fright Night',
			description:
				'Score yourself a pair of binoculars used by Charley Brewster in the 1985 film Fright Night. We are not responsible if spying on your neighbors results in you realizing they are vampires.',
			category: categories[0],
			price: 85,
			imageUrl: '/img/binoculars.png'
		},
		{
			name: 'Ouija board from Witchboard',
			description:
				'If speaking to the dead is the type of thing you are into, get yourself the Ouija board from the 1986 film Witchboard. Evil spirits might make things difficult for a bit but who knows, you may get lucky and end up in the next Whitesnake video.',
			category: categories[0],
			price: 99.99,
			imageUrl: '/img/ouija.png'
		},
		{
			name: 'Box of (rice?) from The Lost Boys',
			description: 'Eat at your own risk. From the 1987 film The Lost Boys',
			category: categories[0],
			price: 15.99,
			imageUrl: '/img/rice.png'
		},
		{
			name: 'Missile from Weird Science',
			description:
				'Now you too can have a missile in your house. From the 1985 film Weird Science',
			category: categories[0],
			price: 1499.95,
			imageUrl: '/img/missle.png'
		},
		{
			name: 'Frozen Dinner from Better Off Dead',
			description:
				'Swansons Fried Chicken, chocolate nut brownie, and corn in seasoned sauce. From the 1985 movie Better Off Dead. Makes a great Christmas gift.',
			category: categories[0],
			price: 10.99,
			imageUrl: '/img/dinner.png'
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
			name: 'Gem from Psycho Goreman',
			description:
				'Need to control a demon who is bent on destroying the universe? We got you covered with this powerful gem from the 2020 film Psycho Goreman.',
			category: categories[0],
			price: 279.99,
			imageUrl: '/img/gem.png'
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
			name: 'Rex Kwon Do Pants from Napoleon Dynamite',
			description:
				'Merica, am I right?! These loose fitting Zubaz pants worn by the character Rex in the 2004 film Napoleon Dynamite are sure to deliver a mighty roundhouse kick to anyones face. Size Large',
			category: categories[1],
			price: 49.99,
			imageUrl: '/img/rex-pants.png'
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
			price: 1000
		},
		{
			name: 'Ninja Outfit from American Ninja 4',
			description:
				'This is the yellow ninja outfit worn by 0 time award nominated actor Michael Dudikoff in the 1990 classic American Ninja 4. Size Medium',
			category: categories[2],
			price: 700
		},
		{
			name: 'Nat Nerd Costume from The Garbage Pail Kids Movie',
			description:
				'If the struggles of life are too much to handle, grab this Nat Nerd costume from the 1987 film The Garbage Pail Kids Movie and watch everything change',
			category: categories[2],
			price: 800
		},
		{
			name: 'Allan Quatermain Outfit',
			description:
				'Whats worse, an Indiana Jones ripoff or the last two Indiana Jones movies? Thats what I thought! Get the outfit that ripped off the original before the original ripped off the original. From the 1986 film Allan Quartermain and the Lost City of Gold.',
			category: categories[2],
			price: 300
		},
		{
			name: 'Tuxedo from Action Jackson',
			description:
				'The tuxedo worn by Carl Weathers in the 1988 film Action Jackson. Get a piece of the Action today. Size Large',
			category: categories[2],
			price: 400
		},
		{
			name: 'Cop Uniform from Maniac Cop',
			description:
				'Get away with murder without the headache of the police academy with this cop uniform worn by the legend Robert Zdar in the 1988 film Maniac Cop. Size X-Large',
			category: categories[2],
			price: 300
		},
		{
			name: 'Kuato costume From Total Recall',
			description:
				'Hide your beer belly and open your mind with this Kuato costume from the 1990 film Total Recall. Says 10 different phrases, batteries not included.',
			category: categories[2],
			price: 900
		},
		{
			name: 'Kids Costume from Halloween III: Season of the Witch',
			description:
				'Straight from Silver Shamrock, this is the Pumpkin costume from the 1982 film Halloween III: Season of the Witch. Comes with a complimentary 6 month subscription to a local pest control company of your choice. Size Small',
			category: categories[2],
			price: 600
		},
		{
			name: 'Demonicus Costume from Demonicus',
			description:
				'If you have ever hoped of living the life of a gladiator and your friends are all kind of lame anyway, score this Demonicus costume from the 2001 film Demonicus',
			category: categories[2],
			price: 150
		},
		{
			name: 'Belial Costume from Basketcase',
			description:
				'Come out of the basket confidently with this Belial costume from the 1982 film Basketcase. Size X-Small.',
			category: categories[2],
			price: 2000
		}
	]);
	console.log(items);

	process.exit();
})();
