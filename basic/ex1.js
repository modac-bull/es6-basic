var data = [1,2, undefined, NaN, null, ""];

Array. prototype.getIndex = function() {};
// for in 은 array에서 사용 지양할 것 

for (let idx in data) {
  // console.log(data[idx])
}

for (let value of data) {
  console.log(value);
}

var str = "Hello World!!"
for (let item of str) {
  console.log(item);
}