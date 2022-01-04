// ES6 from method
// arugments 배열과 유사, 유사 배열
// arguments 권장되지는 않음

function addMark() {
  let newData = [];
  for (let i = 0 ; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }

  // console.log(newData);
};

addMark(1, 2, 3, 4, 5);


// Array.prototype.slice ? 
function addMark2() {
  let newArr = Array.from(arguments); //  arguments로 부터 배열을 만든다
  let newData = newArr.map(function (value) {
    return value + "!";
  })
  console.log(newData);
}
addMark2(1, 2, 3, 4, 5);