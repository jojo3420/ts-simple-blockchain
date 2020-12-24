// console.log('hello world')


// 1. 타입스크립트의 장점
// 자바스크립트 느슨함을 없애고 엄격하게 시그니처를 유지해줘 버그를 줄여준다.

const name = 'joy', age = 20, gender = 'male';

// 성별 매개변수는 옵션으로 설정
const printPerson = (name, age, gender?) => {
	console.log(`hello. ${name} age: ${age}. you are a ${gender}`)
}

// 매개변수 - gender 누락시 컴파일 실패.
// printPerson(name, age,)

printPerson(name, age)




// 2. 타입을 지정할 수 있어 망나니 js 를 java 처럼 엄격하게 사용 하여
// 버그를 줄이고 결과 예측이 예상된다.
const sayHi = (username: string, age: number, married: boolean): void => {
	console.log(`username: ${username}, age: ${age}, married: ${married}`)
}

sayHi('jihoon', 33, true)


// 3. 함수 리턴 타입 추가
const sum = (a:number, b:number,):number => a + b
console.log(sum(1, 2))


export {}
