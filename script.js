const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	'A crocodile cannot stick its tongue out.',
	'A shrimps heart is in its head.',
	'It is physically impossible for pigs to look up into the sky.',
	'There are 293 ways to make change for a dollar.',
	'If you sneeze too hard, you could fracture a rib.',
	'Some lipsticks contain fish scales.',
	'Cat urine glows under a black-light.',
	'Like fingerprints, everyones tongue print is different.',
	'Rubber bands last longer when refrigerated.',
]

const day = new Date()
currentDay.textContent = day.toLocaleString('default', { weekday: 'long' })

const showRandom = () => {
	const random = Math.floor(Math.random() * facts.length)
	funFact.textContent = facts[random]
}

showRandom()
