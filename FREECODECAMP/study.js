function cycle(first, second) {
	let res = first
	for (let i = first + 1; i <= second; i++) {
		res += ',' + i
	}
	return res
}
console.log(cycle(1, 100))
