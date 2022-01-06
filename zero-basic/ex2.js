console.log(123);

const emptyValue = ['a','b'];

console.log(emptyValue.length)

const arr = ['a','b','c','d'];

// arr라는 배열이 있을 때 마지막에서 세 번째 요소를 찾아보세요
console.log( arr[arr.length - 3] )

// 배열에 요소 끝에 값 추가, 제거하기
arr[arr.length] = 3;
console.log(arr);

arr.push(2);
console.log(arr);

arr.pop();
console.log(arr);

// 배열 요소 앞에 값 추가, 제거
arr.unshift(2);
console.log(arr);
arr.shift(0);
console.log(arr);

// const 상수더라도 내부 요소를 바꾸는 것은 가능
// 엄밀히 상수는 아니지만 const에는 = 을 쓸 수 없다, 재할당이 되지 않음 그러나 내부 값은 (배열, 객체)일 때 바꿀 수 있음

// 배열의 메서드(수정, 조회)
// 배열의 중간 부분 수정, 조회
arr.splice(1, 2); // index1에서 2개 삭제
console.log(arr); 

arr.splice(1,0,'바');
console.log(arr);

arr.splice(2); // index2부터 끝까지 삭제
console.log(arr);

// includes
const result = arr.includes('a');
const result2 = arr.includes('b');

//indexOf , lastIndexOf
const arr2 = [1,2,3,4,5];
const r1 = arr2.lastIndexOf(5);
const r2 = arr2.indexOf(5);
console.log(r1, r2);

// for 문
for(let i = 0 ; i < arr2.length; i++) {
  console.log(arr2[i]);
}

// 다음 배열에서 '라'를 모두 제거하세요
// indexOf 와 splice 사용
const arr3 = ['가','라','다','라','마','라','아'];
for (let i = 0 ; i < arr3.length; i++) {
  if (arr3.indexOf('라') !== -1) {
    arr3.splice (arr3.indexOf('라'), 1);
  }
}
console.log(arr3);
// splice(-1) ??