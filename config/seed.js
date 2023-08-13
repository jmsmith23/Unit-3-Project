require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function () {
	await Category.deleteMany({});
	const categories = await Category.create([
		{ name: 'Movie Props', sortOrder: 10 },
		{ name: 'Clothing', sortOrder: 20 },
		{ name: 'Jewelry', sortOrder: 30 },
		{ name: 'Miscellaneous', sortOrder: 40 }
	]);

	await Item.deleteMany({});
	const items = await Item.create([
		{
			name: 'Boombox from Return of the Living Dead',
			description:
				'This is the boombox used by the group of punks in the classic 1985 film Return of the Living Dead. Includes generic punk rock casette.',
			category: categories[0],
			price: 100
		},
		{
			name: 'Mop from Toxic Avenger',
			description:
				'This is the mop used by Melvin Ferd Junko III to clean the health club in the 1984 film The Toxic Avenger. Also doubles as your main weapon if you happen to turn into a mutant superhero',
			category: categories[0],
			price: 85.99
		},
		{
			name: 'Bounty Hunter Gun from Critters',
			description:
				'Have you always dreamed of being a bounty hunter? Do you look like 80s era Bon Jovi? This is the gun used by Ug (Terrance Mann) in the 1986 film Critters, make it yours today. For use on "critters" only.',
			category: categories[0],
			price: 299.95
		},
		{
			name: 'Bucket of broken glass from Kickboxer',
			description:
				'Trying to fight the ancient way but find yourself missing something? Take home this bucket of broken glass from the 1989 film Kickboxer starring Jean-Claude van Damme and be a real kickboxing champion, Nok Su Kow.',
			category: categories[0],
			price: 75
		},
		{
			name: 'Buddha statue from Big Trouble in Little China',
			description:
				'This is one of a long line of Buddha statues from the 1986 film Big Trouble in Little China. The first step to immortality is picking up where Lo Pan left off.',
			category: categories[0],
			price: 300
		},
		{
			name: 'Brain in Jar from Blood Diner',
			description:
				'Want to perform a blood buffet and resurrect Sheetar but have no clue where to start? Namtut Anwars preserved brain will walk you through every step of the way.',
			category: categories[0],
			price: 249.99
		},
		{
			name: 'Popcorn from Troll 2',
			description:
				'A sealed bag of popcorn from the 1990 film Troll 2. Do you like popcorn? Well you just have to...heat it up.',
			category: categories[0],
			price: 19.99
		},
		{
			name: 'Jar of toxic moonshine from Redneck Zombies',
			description:
				'Is White Claw out of your budget and kind of lame anyway? Get yourself some of Jed Clemsons finely crafted moonshine and have a night you will never forget. From the set of the 1989 film Redneck Zombies.',
			category: categories[0],
			price: 42.99
		},
		{
			name: 'Binoculars from Fright Night',
			description:
				'Score yourself a pair of binoculars used by Charley Brewster in the 1985 film Fright Night. We are not responsible if spying on your neighbors results in you realizing they are vampires.',
			category: categories[0],
			price: 85
		},
		{
			name: 'Ouija board from Witchboard',
			description:
				'If speaking to the dead is the type of thing you are into, get yourself the Ouija board from the 1986 film Witchboard. Evil spirits might make things difficult for a bit but who knows, you may get lucky and end up in the next Whitesnake video.',
			category: categories[0],
			price: 99.99
		},
		{
			name: 'Box of (rice?) from The Lost Boys',
			description: 'Eat at your own risk. From the 1987 film The Lost Boys',
			category: categories[0],
			price: 15.99
		},
		{
			name: 'Missile from Weird Science',
			description:
				'Now you too can have a missile in your house. From the 1985 film Weird Science',
			category: categories[0],
			price: 499.95
		},
		{
			name: 'Frozen Dinner from Better Off Dead',
			description:
				'Swansons Fried Chicken, chocolate nut brownie, and corn in seasoned sauce. From the 1985 movie Better Off Dead. Makes a great Christmas gift.',
			category: categories[0],
			price: 10.99
		},
		{
			name: 'Mac puppet from Mac and Me',
			description:
				'Mac and Me? More like Mac and You! This prop from the 1988 film Mac and Me can now be yours for a price thats out of this world.',
			category: categories[0],
			price: 999.99
		},
		{
			name: 'Samurai Sword from Samurai Cop',
			description:
				'Are you ready to take down the Katana gang? You wont get too far without this sword from the 1991 film Samurai Cop.',
			category: categories[0],
			price: 599.99
		},
		{
			name: 'Football from The Room',
			description:
				'If you only own one piece of sports memorabilia, this is the one to own. Show it off on your mantle or just toss it around with some friends on a roof somewhere. From the 2003 film The Room.',
			category: categories[0],
			price: 299
		},
		{
			name: '101 Series Protector Robot from Chopping Mall',
			description:
				'Protect your family with this security robot from the 1986 film Chopping Mall. Not responsible for the results of any malfunctions.',
			category: categories[0],
			price: 800
		},
		{
			name: 'Gem from Psycho Goreman',
			description:
				'Need to control a demon who is bent on destroying the universe? We got you covered with this powerful gem from the 2020 film Psycho Goreman',
			category: categories[0],
			price: 279.99
		}
	]);

	console.log(items);

	process.exit();
})();
