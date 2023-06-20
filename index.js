let firstName = 'Sulim'
let lastName = 'Baisugurov'
const myObj = {
	firstName,
	lastName,
	sayHello() {
		return 'Hello, world!'
	},
}

//console.log(myObj.sayHello())
myObj.firstName = 'Surkho'
console.log(firstName)
