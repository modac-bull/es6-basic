// Handler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  
  // 실습 예제1
  /* 
  filter, includes, from을 사용해서 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환하기
  */
 
 
 function print() {
   const li = document.querySelectorAll('li');
   let newData = Array.from(li);
   console.log(newData.filter(data => data.innerHTML.includes('e')))
   return newData.filter(data => data.innerHTML.includes('e'));

  }

  print();

  function answer() {
    let list = document.querySelectorAll('li');
    console.log(toString.call(list)); // object 리스트

    let listArr = Array.from(list); // li 노드로 구성된 배열
    console.log(typeof listArr);

    let resultArr = listArr.filter(v => v.innerText.includes('s'));
    console.log(resultArr);
    return resultArr;
  }
  answer();

  console.log(123);
});

