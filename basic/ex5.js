const name = 'crong';
const age = 12;

const obj1 = {
  name : name,
  age : age
}
console.log(obj);

// object literal = keyword value값이 같을 때 생략 가능

function getObj() {
  const name = 'crong';
  const getName = function() {
    return name;
  }
  const setName = function() {
    name = newname;
  }
  const printName = function() {
    console.log(name);
  }
  return {
    // getName : getName,
    // setName : setName
    // key 값과 value값이 같다면 생략이 es6부터는 가능
    getName,
    setName,
    name
  }
}

var obj = getObj();
console.log(obj);


const data = {
  name,
  getName() {

  },
  age
}
