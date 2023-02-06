function initials(firstname, lastname, surname) {
	// тут твой код
	return (
		firstname +
		' ' +
		lastname[0].toUpperCase() +
		'.' +
		surname[0].toUpperCase() +
		'.'
	)
}
console.log(initials('Интукод', 'Джаваскриптов', 'Объектович'))
// должен вывести "Джаваскриптов И.О."

function sum(numbers) {
	// тут твой код
	let sum = 0
	for (let i of numbers) {
		if (i % 2 !== 0) {
			sum += i
		}
	}
	return sum
}
console.log(sum([1, 3, 6, 11, 98, 7, 1]))
// должен вернуть 23, т.к. 1 + 3 + 11 + 7 + 1 = 23

function hasEqualSums(first, second) {
	// тут твой код
	let sum1 = 0
	let sum2 = 0
	for (let i of first) {
		sum1 += i
	}
	for (let j of second) {
		sum2 += j
	}
	return sum1 === sum2
}
console.log(hasEqualSums([11, 22], [1, 20, 10, 1, 1]))
// должен вернуть true, т.к. 11+22=33 и 1+20+10+1+1=33
console.log(hasEqualSums([4, 4], [3, 6]))
// должен вернуть false, т.к. 4+4=8, а 3+6=9

function repeatsXTimes(numbers, needle, count) {
	// тут твой код
	let sum = 0
	for (let i of numbers) {
		if (i === needle) {
			sum += 1
		}
	}
	return count === sum
}
console.log(repeatsXTimes([1, 5, 1, 3, 1], 1, 3))
// должен вернуть true, потому что число 1 встречается в массиве 3 раза
console.log(repeatsXTimes([4, 1, 3, 3, 8], 3, 4))
// должен вернуть false, потому что число 3 НЕ встречается в массиве 4 раза
console.log(repeatsXTimes([1, 2, 1, 2, 4], 2, 2))
// должен вернуть true, потому что число 2 встречается в массиве 2 раза

function a() {
	let sum = '100'
	for (let i = 97; i > 0; i -= 3) {
		sum = `${sum},${i}`
	}
	return sum
}
console.log(a())

function filterNames(array, length) {
	// тут твой код
	let result = []
	for (let i of array) {
		if (i.length === length) {
			result.push(i)
		}
	}
	return result
}
console.log(filterNames(['into', 'code', 'js', 'html', 'git'], 4))
// должен вернуть массив ['into', 'code', 'html']

function searchWord(words, text) {
	for (let i of words) {
		if (text.includes(i)) {
			return true
		}
	}
	return false
}
console.log(searchWord(['js', 'css', 'php'], 'я изучаю css')) // true
console.log(searchWord(['js', 'css', 'php'], 'intocode изменил мою жизнь')) // false
console.log(searchWord(['js', 'css', 'php'], 'я изучаю css и js')) // true

function opposition(numbers) {
	// твой код
	let max = numbers[0]
	let min = numbers[0]
	for (let i of numbers) {
		if (i > max) {
			max = i
		}
		if (i < min) {
			min = i
		}
	}
	return [max, min]
}
console.log(opposition([1, -4, 6, -144, 5])) // [-144, 6]

function cutText(text, words) {
	// твой код
	let res = ''
	const array = text.split(' ')
	if (words >= array.length) {
		return text
	}
	for (let i = 0; i < words; i++) {
		res = `${res} ${array[i]}`
	}
	return res + '...'
}
console.log(cutText('Всё в мире подорожало', 5))
// должен вернуть "Всё в мире подорожало", т.к. количество слов в тексте не больше 5
console.log(cutText('Программа работает не так, как надо', 2))
// должен вернуть "Программа работает..."
