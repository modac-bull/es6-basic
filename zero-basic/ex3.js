// 함수

function a() {} // 함수 선언문
const b = function() {}; // 함수 표현식
const c = () => {}; // 화살표 함수
// function() {} // 익명함수 : 한번만 호출할때

a() ; // 호출, 실행

function d() {
  return 'hello'; // 종료, 반환
  console.log('hi'); // return 시에는 함수가 종료됨
}
// 함수는 다른 값을 반환해 줄 수 있다
// return undefined; 가 기본값



// 매개변수와 인수
// parameter 와 argument
// 함수 선언시에는 매개변수
// 함수 호출시에는 인수


// arguments라는 인수 유사배열 확인 할 수 있다
// 화살표함수에서는 사용 X
function e(w, x, y, z ) {
  console.log(arguments);
};
e();

// 매개별수로 x,y,z를 받아 곱한 값을 반환하는 multiply함수를 만들어보세요

const multiply = (x, y, z) => ( x * y * z );
console.log(multiply(4,5,6));


// 객체 리터럴
const obj = {
  name: '이지훈',
  year: 1991,
  month: 2,
  date: 11,
  gender: 'M',
  '2a' : 'b',
  'a b c' : 'abc',
}
obj.name;
obj['2a']
console.log(obj['a b c'])
console.log(obj);

delete obj.gender;
console.log(obj);

// 배열과 함수가 객체인 이유?
// 객체 안에 있는 함수는 메서드라 부름


// 객체 간의 비교 ** 중요
console.log(
  Boolean({ } === { })
)

// { } : 새로운 객체를 만드는 셈
// 틀 자체가 다르면 False 

const AA = { name : 'jihoon'};
const BB = AA; 


// '이'에 접근하는 방법
const quizArr = {
  name: {
    first : '지훈',
    last : '이',
  },
  gender: 'm',
}

console.log( quizArr.name.last )

