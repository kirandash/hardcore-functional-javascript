const add = (x,  y) => x + y;

// Arguments
const result = add(1, 2)

console.log("add",  result)

/*
To Pair: Function conversion for changing arguments of function
*/
const toPair = f => ([x, y])  => f(x,y)

// Array argument
const result1 = toPair(add)([1,2])

console.log("TO PAIR", result1)

/*
From Pair: Function conversion for changing arguments of function
*/
const fromPair = f => (x, y)  =>  f([x, y])

const result2 = fromPair(toPair((add)))(1,2)

console.log("FROM PAIR", result2)

/*
Flip
*/
const flip = f => (x, y) =>  f(y, x);

const result3 = flip(add)(2,1)

console.log("Flip", result3)

/*
Currying - A fn that remembers it's argument
- Takes  a fn of multiple arguments and perform tasks one arg at a time
*/
const curry = f => x => y => f(x, y)

const curriedAdd = curry(add);

const increment = curriedAdd(1) // remembers argument

const result4 =  increment(4); // calls add on the remembered argument

console.log("Curried Add", result4)

// uncurry
const uncurry = f => (x, y) =>  f(x)(y)

/**
 * Usage of Currying - Example
 */
const modulo = curry((x, y) => y % x);

const isOdd = modulo(2);  // y % 2

const result5 = isOdd(3) !== 0
const result6 = isOdd(4) !== 0

console.log("3 Is odd", result5)
console.log("4 Is odd", result6)