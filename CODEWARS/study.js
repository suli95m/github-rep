function disemvowel(str) {
	const letters = 'eyuioa'
	const array = str.toLowerCase().split('')
	let res = ''
	for (let i = 0; i < array.length; i++) {
		if (!letters.includes(array[i])) {
			res += str[i]
		}
	}
	return res
}

console.log(disemvowel('This website is for losers LOL!'))
console.log(disemvowel('What are you, a communist?'))

const vowels = 'aeiou'
function disemvowel2(str) {
	return str
		.split('')
		.filter(letter => !vowels.includes(letter.toLowerCase()))
		.join('')
}

function squareDigits(num) {
	let res = ''
	const string = num + ''
	for (let i = 0; i <= String(num + 1).length; i++) {
		res += Math.pow(string[i], 2)
	}
	return parseInt(res, 10)
}

function even_or_odd(number) {
	return number % 2 ? 'Odd' : 'Even'
}

function accum(s) {
	let res = s[0].toUpperCase()
	for (let i = 1; i < s.length; i++) {
		res += '-' + s[i].toUpperCase() + s[i].repeat(i).toLowerCase()
	}
	return res
}

const binaryArrayToNumber = arr => {
	let res = 0
	let j = 0
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === 1) {
			res += Math.pow(2, j)
		}
		j += 1
	}
	return res
}

console.log(binaryArrayToNumber([1, 0, 1, 0]))

function toCamelCase(str) {
	let regExp = /[-_]\w/gi

	return str.replace(regExp, function (match) {
		return match.charAt(1).toUpperCase()
	})
}

function alphabetPosition(text) {
	let res = ''
	const q = text.toLowerCase()
	const arr = 'abcdefghijklmnopqrstuvwxyz'
	for (let i = 0; i < text.length; i++) {
		for (let k = 0; k < arr.length; k++) {
			if (arr[k].includes(q[i])) {
				res += k + 1 + ' '
			}
		}
	}
	return res.slice(0, res.length - 1)
}

function solution(start, finish) {
	//exercises about cat
	let res = 0
	let fin = finish - start
	while (fin > 0) {
		if (fin >= 3) {
			res += 1
			fin -= 3
		} else {
			res += 1
			fin -= 1
		}
	}
	return res
}

function order(words) {
	if (words === '') {
		return ''
	}
	const arr = words.split(' ')
	const res = []
	for (let i = 1; i <= arr.length; i++) {
		for (let k = 0; k < arr.length; k++) {
			if (arr[k].includes(i)) {
				res.push(arr[k])
			}
		}
	}
	return res.join(' ')
}
//need to learn
function findShort(s) {
	return Math.min.apply(
		null,
		s.split(' ').map(w => w.length)
	)
}
//my solution
function findShort(s) {
	let res = s.length
	const arr = s.split(' ')
	for (let i = 0; i < arr.length; i++) {
		if (res > arr[i].length) {
			res = arr[i].length
		}
	}
	return res
}

function validParentheses(parens) {
	var n = 0
	for (var i = 0; i < parens.length; i++) {
		if (parens[i] == '(') n++
		if (parens[i] == ')') n--
		if (n < 0) return false
	}

	return n == 0
}

function narcissistic(value) {
	// Code me to return true or false
	let res = 0
	const str = value + ''
	for (let i = 0; i < str.length; i++) {
		res += Math.pow(parseInt(str[i]), str.length)
	}
	return res === value
}

function solve(s) {
	const arr = [
		'QWERTYUIOPASDFGHJKLZXCVBNM',
		'qwertyuiopasdfghjklzxcvbnm',
		'1234567890',
	]
	if (s === '') {
		return [0, 0, 0, 0]
	}
	let upperCase = 0
	let lowerCase = 0
	let num = 0
	let special = 0
	for (let i = 0; i < s.length; i++) {
		if (arr[0].includes(s[i])) {
			upperCase += 1
		} else if (arr[1].includes(s[i])) {
			lowerCase += 1
		} else if (arr[2].includes(s[i])) {
			num += 1
		} else {
			special += 1
		}
	}
	return [upperCase, lowerCase, num, special]
}

function timeCorrect(timestring) {
	if (timestring === '') {
		return ''
	}
	if (timestring === null) {
		return null
	}
	if (timestring[2] !== ':') {
		return null
	}
	for (let i = 0; i < timestring.length; i++) {
		if (!'1234567890:'.includes(timestring[i])) {
			return null
		}
	}
	const arr = timestring.split(':')
	let hours = 0
	let minutes = 0
	let seconds = arr[2]
	if (arr[2] > 59) {
		seconds += arr[2] % 60
		minutes += (arr[2] - seconds) / 60
	} else {
		seconds = arr[2]
	}
	if (arr[1] > 59) {
		minutes += arr[1] % 60
		hours += Math.ceil((arr[1] - minutes) / 60)
	} else {
		minutes = arr[1]
	}
	if (arr[0] > 23) {
		hours += arr[0] % 24
	} else {
		hours = arr[0]
	}
	return [hours, minutes, seconds].join(':')
}
