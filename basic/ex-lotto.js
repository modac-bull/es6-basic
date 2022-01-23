/* 
## 실습. Destructuring and Set 활용

### lotto 번호 만들기.

1. 유일한값을 추출하는 과정에서 Set을 사용
2. getRandomNumber 함수에 변수를 전달하는 과정에서 destructuring을 사용

*/


/* ######################### 직접 구현 ####################### */
// const SETTING  = {
//   name : "LUCKY LOTTO!",
//   count : 6,
//   maxNumber : 45
// }

// const {maxNumber, count} = SETTING; // Destructuring

// function getRandomNumber (maxNumber) {
//   // 랜덤한 유일한 숫자값을 추출
//   const lottoNumbArr = new Set(); // Set 자료구조 활용
//   let i = lottoNumbArr.size; // 초기 크기
//   // 1. 1~45사이의 숫자를 추출
//   // Math.random()*maxNumber -> 반올림
//   while (i < count) {
//     const numb = Math.random()*maxNumber;
//     lottoNumbArr.add(Math.floor(numb) + 1)
//     i = lottoNumbArr.size;
//   }
//   return lottoNumbArr
// }

// getRandomNumber(maxNumber);

/* ############ 실습 ############# */

const SETTING  = {
  name : "LUCKY LOTTO!",
  count : 6,
  maxNumber : 45
}

const {maxNumber, count} = SETTING; // Destructuring

function getRandomNumber (maxNumber) {
  // 랜덤한 유일한 숫자값을 추출
  
}

getRandomNumber(maxNumber);