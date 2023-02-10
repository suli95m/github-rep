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
