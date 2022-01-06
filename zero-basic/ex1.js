// 구구단 실습, 구구단을 출력하되 결과에 짝수가 하나도 나오지 않게
// 3X1, 3X3, 3X5 ... 9X9

// for (i = 0; i < 10 ; i ++ ) {
//   if ((i+1) % 2 === 0) continue; // 짝수는 예외
//   for (j= 0 ; j < 9 ; j ++) {
//     if ((j+1) % 2 === 0) continue;
//     console.log( (i+1) * (j+1));
//     // return ((i+1) * (j+1))
//   }
// }

// 별 찍기

for (let i = 0 ; i < 5; i++) {
  // console.log('*'.repeat(i+1))
}

for (let i =5 ; i > 0 ; i--) {
  // console.log('*'.repeat(i))
}

// 별 1 3 5 7 9 <-> 역
for (let i = 0 ; i < 10 ; i ++) {
  if(i % 2 === 0) continue;
  console.log('*'.repeat(i));
}
for (let i = 0 ; i < 10 ; i ++) {
  if(i % 2 === 0) continue;
  console.log('*'.repeat(10-i));
}
/* 
*
**
***
****
***** 
*/
let space = 10;
for (let i = 0 ; i < space ; i ++) {
  if(i % 2 === 0) continue;
  console.log(' '.repeat(i) + '*'.repeat(space-i));
}
for (let i = 0 ; i < space ; i ++) {
  if(i % 2 === 0) continue;
  console.log(' '.repeat(space-i) + '*'.repeat(i));
}