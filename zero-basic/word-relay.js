const number = parseInt(prompt('몇 몇이 참가하나요?'), 10);
console.log(number);
// alert(number);
// const yesOrNo = confirm('맞나요?');

// document.querySelectorAll('li'); 유사 배열, NodeList 

// 자식, 자손 차이가 있음
// 선택자 개념

// 이벤트 리스터 달기(콜백함수)
// input 태그 - 이벤트
// html 태그 자체에서 이벤트?

const inputElem = document.querySelector('#keywords');
const buttonElem = document.querySelector('.btnInput');
let word ; // 제시어
let newWord; // 새로 입력한 단어

// 이벤트리스너의 이벤트 함수, 글자를 입력할 때마다 콜백함수 호출

// function 키워드랑 arrow function 기능이 다를 경우 있음
const onClick = ( ) => {
  if(!word) { // 제시어가 비어 있는가?
    // 비어 있따.
    word = newWord;
  } else {
    // 비어 있지 않다.
  }
  console.log(word);
};

const onInput = (e) => {
  newWord = e.target.value;
}

buttonElem.addEventListener('click', onClick);
inputElem.addEventListener('input',onInput)

// 첫 단어를 입력한 사람인지 판단하기
// 어떻게 첫사람인지를 판단할까?
// 제시어가 없을 때 -> 판단 기준이 되겠다.