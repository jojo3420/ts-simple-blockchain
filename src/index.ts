
// interface 는 타입스크립트 전용으로 컴파일되어도 자바스크립에 없음
// interface Human {
// 	name: string,
// 	age: number,
// 	married: boolean,
// }

// 자바스크립트에 모델이 코드할 경우 => class

class Human {
	public name: string;
	public age: number;

	// married 는 private 이므로 외부에서 접근 불가
	// private married: boolean;
	public married: boolean;

	constructor(name: string, age: number, married: boolean) {
		this.name = name;
		this.age = age;
		this.married = married;
	}
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
