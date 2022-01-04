// Spread operator, 펼침연산자

let pre = ["apple", "orrange", 100];

// 참조본을 끊고 새로운 메모리 공간에 복사를 한 개념
let newData = [...pre]; // 펼쳐준다
// array prototype과 똑같다..?

console.log (newData);


let arr = [100, 200, 'hello', null];
let newArr = [1, 4, 5, ...arr , 4];

console.log(newArr);
// 개별 파라미터로 활용가능하다..?

let arr2 = [100, 200 , 300];

function sum(a, b, c ) {
  return a + b + c;
}

let result = sum.apply(null, arr2) // spread operator 이전에 쓰이던 방식
let result2 = sum(...arr2); // spread operator의 활용

console.log(result, result2)