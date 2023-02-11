// function learnJavaScript() {
// 	const divisibleBy = (numbers, divisor) => {
// 		return ''
// 	}
// 	return divisibleBy([1, 2, 3, 4, 5, 6], 2)
// }

// function learnJavaScript() {
// 	const twiceAsOld = (dadYearsOld, sonYearsOld) => {
// 		return ''
// 	}
// 	return twiceAsOld(36, 7)
// }

// function learnJavaScript() {
// 	const oddCount = n => {
// 		return ''
// 	}
// 	return oddCount(15023)
// }

// function learnJavaScript() {
// 	const stringToNumber = str => {
// 		return str
// 	}
// 	return stringToNumber('999')
// }
function toCamelCase(str) {
	let res = str[1].toUpperCase()
	for (let i = 1; i < str.length; i++) {
		if (str[i] === '-' || str[i] === '_' || str[i] === ' ') {
			res += str[++i].toUpperCase()
		} else {
			res += str[i]
		}
	}
	return res
}
console.log(toCamelCase('the_stealth_warrior'))
