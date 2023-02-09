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
