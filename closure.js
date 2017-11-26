function add(x,y) {
	return x+y;
}

function subtract(x,y) {
	return x-y;
}

function multiply(x,y) {
	return x*y;
}
console.log(add(3,4));
console.log(subtract(3,4));
console.log(multiply(3,4));

// my code
//1st
function value(arg) {
	return arg;
}
console.log(value(42));

//2nd
function value1(arg) {
	return function () {
		return arg;
	}
}
let three=value1(3);
console.log(three());

//3rd
/*function add(x) {
	return function (y) {
		return x+y;
	}
}
function multiply(x) {
	return function (y) {
		return x*y;
	}
}
function subtract(x) {
	return function (y) {
		return x-y;
	}
}
console.log(add(3)(4));
console.log(multiply(3)(4));
*/
//4th
function twice(fn) {
	return function (x) {
		return fn(x,x);
	};
}
const double=twice(add);
console.log(double(11));
const square=twice(multiply);
console.log(square(11));
//5th
function reverse(fn) {
	return function (...args) {
		return fn(...args.reverse());
	};
}
const subtractReversed = reverse(subtract);
subtract(3,4);
console.log(subtract(3,4));
subtractReversed(3,4);
console.log(subtractReversed(3,4));

//6th
/*function curry(fn) {
	return function (x) {
		return function (y) {
			return fn(x,y);
		};
	};
}*/
const curry = fn => x => y => fn(x,y);
const addCurry = curry(add);
console.log(addCurry(3)(4));

//1st HW
function limit(fn,i) {
  let count=0;
  return function (...args) {
    if (count<i){
      count++;
      return fn(...args);
    }
    else {
      return false;
    }
  };
}
function playGame() {
  console.log('Playing game =)');
}

let playGameLimited = limit(playGame, 3);

playGameLimited();
playGameLimited();
playGameLimited();
playGameLimited();

//2nd HW

function protect(value,password) {
  return function (string) {
    if(string===password){
      return value;
    }
  };
};
let getSecret = protect('1234-5678-9012-3456', 'qwerty');
getSecret('qwerty');
getSecret();

// 3rd HW
function createCounter(start = 0, step = 1) {
  return function () {
    return start += step;
  };
}

//4th
function createList(array=[]) {
	let items=array;
	function getLength() {
		return items.length;
  }
  function add(item) {
		return items.push(item);
  }
  function get(index) {
		return items[index];
  }
  function set(index,item) {
		items[index]=item;
  }
  function remove(item) {
		let index=items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
    }
  }
  function toString() {
		return items.toString();
  }
  return {
    items,
    getLength,
    add,
    get,
    set,
    remove,
    toString
  };
}