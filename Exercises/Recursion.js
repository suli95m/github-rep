function factorial(number) {
	if (number <= 0) {
		return 1
	} else {
		return factorial(number - 1) * number
	}
}
console.log(factorial(5))

function pow(number, degree) {
	return degree <= 0 ? 1 : pow(number, degree - 1) * number
}

console.log(pow(2, 4))

function range(start_num, end_num) {
	if (end_num < start_num + 1) {
		return []
	} else {
		let list = range(start_num, end_num - 1)
		list.push(end_num - 1)
		return list
	}
}
console.log(range(2, 8))

function numbers(first, second) {
	return first < second - 1
		? `${first},${numbers(first + 1, second)}`
		: second - 1
}
console.log(numbers(2, 10))

function nod(first, second) {
	let n = first
	if (first % n !== 0 && second % n !== 0) {
	} else {
		n -= 1
		return nod(first - 1, second - 1) * n
	}
}

function gcd(a, b) {
	if (!b) {
		return a
	}

	return gcd(b, a % b)
}
console.log(gcd(56, 24))

const contacts = [
	{
		firstName: 'Akira',
		lastName: 'Laine',
		number: '0543236543',
		likes: ['Pizza', 'Coding', 'Brownie Points'],
	},
	{
		firstName: 'Harry',
		lastName: 'Potter',
		number: '0994372684',
		likes: ['Hogwarts', 'Magic', 'Hagrid'],
	},
	{
		firstName: 'Sherlock',
		lastName: 'Holmes',
		number: '0487345643',
		likes: ['Intriguing Cases', 'Violin'],
	},
	{
		firstName: 'Kristian',
		lastName: 'Vos',
		number: 'unknown',
		likes: ['JavaScript', 'Gaming', 'Foxes'],
	},
]

function convertToInteger(str) {
	return parseInt(str, 2)
}
console.log(parseInt(1010, 2))

function reck(n) {
	if (n <= 0) {
		return []
	} else {
		let res = reck(n - 1)
		res.push(n)
		return res
	}
}
function rangeOfNumbers(startNum, endNum) {
	if (startNum === endNum) {
		return [endNum]
	} else {
		const res = rangeOfNumbers(startNum, endNum - 1)
		res.push(endNum)
		return res
	}
}
