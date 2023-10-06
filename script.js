
const inner = document.querySelector('.inner')
const question = document.querySelector('form > .q > h2')
const q = document.querySelector('form > .q')
const checkAnsw = document.forms['quiz']['answ']
const answ = document.querySelectorAll('p')
const start = document.querySelector('#start')
const next = document.querySelector('#next')
const inputt = document.querySelectorAll('input')
const plPoints = document.querySelector('.points > p')

q.style.display = 'none'
next.style.display = 'none'

start.addEventListener('click', () => {
	start.style.display = 'none'
	q.style.display = 'inline'
	next.style.display = 'inline'

	startTheGame()
})

class Quiz {
	constructor(_questionn, _userAnsw1, _userAnsw2, _userAnsw3, _userAnsw4) {
		this.questionn = _questionn
		this.userAnsw1 = _userAnsw1
		this.userAnsw2 = _userAnsw2
		this.userAnsw3 = _userAnsw3
		this.userAnsw4 = _userAnsw4
	}
}
function startTheGame(params) {

	let arr = [
		new Quiz('what is capital of Russia', 'Moscow', 'Rastov-on-Don', 'St.Peterburg', 'Minvodi'),
		new Quiz('what is capital of Armenia', 'Yerevan', 'Goris', 'Kapan', 'Gyumri'),
		new Quiz('what is capital of GB', 'London', 'Manchester', 'Liverpool', 'Birmingham'),
		new Quiz('what is capital of Spain', 'Madrid', 'Granada', 'Barcelona', 'Sevillia'),
		new Quiz('what is capital of France', 'Pariz', 'Marcele', 'Lile', 'Monreal'),
		new Quiz('what is capital of Portugal', 'Lisbon', 'Porto', 'Braga', 'Amadora'),
		new Quiz('what is capital of Italy', 'Rom', 'Milano', 'Neapol', 'Venecoia'),
		new Quiz('what is capital of Germany', 'Berlin', 'Keln', 'Kassel', 'Dortmund'),
		new Quiz('what is capital of Ukraine', 'Kyiev', 'Odessa', 'Lvov', 'Xerson'),
		new Quiz('What is the most popular language in Front-End programming', 'HTML/CSS/JS', 'HTML/CSS/PYTON', 'RUBY', 'JAVA'),
		new Quiz('What is the most popular language in Back-End programming', 'PYTON', 'HTML/CSS/JS', 'PHP', 'OBJECTIV-C'),
		new Quiz('What is the title tag in HTML', 'h1-ից h6-ը', 'p', 'a', 'title'),
		new Quiz('What is a cyclist for the masses in JS', ' Depending on the situation can all use ', 'for(i of array)', 'for()', 'for(i in array)'),
		new Quiz('What is a cyclist for the obj in JS', 'for(i in array)', 'for(i of array)', 'for()', 'Depending on the situation can all use'),
		new Quiz('What are the cycles intended for in JS', ' all together ', 'performing the same action several times', 'Code flexible', 'Cut the code short'),
		new Quiz('What are the Event listener intended for in JS', 'To add an event on a given HTML tag from the situation', 'performing the same action several times', 'Database to send information', 'all together'),
		new Quiz('Which of these is the name of the car brand', 'BMW', 'Mersedes-Benz', 'Samsung', 'Apple'),
		new Quiz('Which of these is the name of the phone brand', 'Samsung ', 'Hicense', 'BMW', 'Reno'),
		new Quiz('What is responsible for Back-End programmer', 'all together', 'Servers work', 'Databases:', 'Website statistics:',),
		new Quiz('What is responsible for Front-End programmer', 'all together', 'The appearance of the site', 'Site Dynamism:', 'Maxim compact and less code writing',),
	];
	exFrstQ()
	function exFrstQ() {
		nextQuestion(arr[0])
	}
	function nextQuestion(obj) {
		inputt.forEach((item) => {
			question.innerHTML = `${obj.questionn}`
			answ[0].innerHTML = `${obj.userAnsw1}`
			answ[1].innerHTML = `${obj.userAnsw2}`
			answ[2].innerHTML = `${obj.userAnsw3}`
			answ[3].innerHTML = `${obj.userAnsw4}`
			item.checked = false;
		})
	}
	let points = 0
	function check() {
		if (checkAnsw.value === 'answ1') {
			points++
		}
		if (checkAnsw.value === '') {
			alert('You Must Checket the answer yout point dicrement 2')
			points += 0
		}
	}
	let questiomIndex = 0
	next.addEventListener('click', (event) => {
		event.preventDefault()
		check()
		nextQuestion(arr[questiomIndex++])
		if (questiomIndex === 20) {
			inner.innerHTML = `game end you have ${points} of 20`
		}
	})
}
