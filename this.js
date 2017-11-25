'use strict';

/*
let list = [1,2,3,4,5];
for (let i=1;i<list.length;i++){
  let item = list[i];
  console.log(`${i}: ${item}`);
}
*/
function forEach(list, callback) {
  for (let i=1;i<list.length;i++){
    let item = list[i];
    callback.call(item,i);
  }
}
forEach([1,2,3,4,5], function (index) {
  console.log(`${index}: ${this}`);
});


function list() {
  let args = Array.prototype.slice.call(arguments);
  return args;
}
console.log(list.call(null, 1,2,3,4,5));
console.log(list.apply(null, [1,2,3,4,5]));

function print() {
  console.log(this)
}
print.call(null);
print.apply(null);
