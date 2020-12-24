interface Human {
	name: string,
	age: number,
	married: boolean,
}

const man = {
	name: 'jojo',
	age: 20,
	married: false,
}

const myNameIs = (person: Human): string => {
	const { name, age, married } = person;
	return `my name is ${name}. and I'm ${age} and ${married ? 'married' : 'single'}.`
}

const str = myNameIs(man)
console.log({ str })
