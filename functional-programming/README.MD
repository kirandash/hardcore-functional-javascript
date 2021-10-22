# Hardcore Functional Programming with JavaScript

## 1 Introduction
### 1.1 Intro
- [Slides](https://docs.google.com/presentation/d/1nj5xmsHeJh-6RdjLs1190Hwl8smclvFLePqPCTVsrYw/edit#slide=id.g338d117be_040)
- [Personal Copy](https://docs.google.com/presentation/d/1_WbSJ2ViglL1q9eO2RIeWgWMSSYu-GFBgWedJvk42Jc/edit#slide=id.g338d117be_040)

### 1.2 Mathematical, Pure functions
- Functions:
    - A fn is a **pure fn** if it matches the following criterias
        - **Total**: Always return something
        - **Deterministic**: Same output for same input
        - **No observable side effects**: No side effects ex: throwing error or changing something in db etc

### 1.3 Pure functions checklist

### 1.4 Pure functions advantages   
- Reliable
- Portable
- Reusable
- Testable
- Composable
- Properties/Contract

## 2 Currying
- Currying - A fn that remembers it's argument
- Takes  a fn of multiple arguments and perform tasks one arg at a time
- `const curry = f => x => y => f(x, y)` or use from ramda

### 2.1 Properties, arguments and currying
- Properties
    - associative
    - commutative
    - identity
    - distributive

### 2.2 Currying example & Argument Order
- Choose currying when you have multiple variation of a function
    - When you want to remember one argument and make the rest dynamic. Ex: remembering an obvious configuration
- Note: Arguments order is important.
    - First argument should be the fn we are trying to run and second argument should be the data we are operating it on
- We can use ramda - a functional library for JS
    - `npm install ramda`
    - `const {curry} = require("ramda");`
- [Docs](https://ramdajs.com/)

### 2.3 Ramda generalized curry - example of replace

### 2.4 Curry - problems and solutions
- use currying to simplify code
- Codepen: https://codepen.io/drboolean/pen/OJJOQMx

### 2.5 Partial application vs currying
- `partial` is used to call an uncurried function

## 3 Composition
### 3.1 Composition
- Helps us deal with **nested function** in a cleaner way by ordering them from right to left
- returns a fn
- Executes fn from **right to left**
- `const compose = (f, g) => x => f(g(x))` or use from ramda
- Ex: `const shoutFirstLetter = compose(first, compose(exclaim, toUpper))`
- Compose is associative
- use compose from ramda to handle multiple arguments
- Ex: `const shoutFirstLetter = compose(first, exclaim, toUpper)`

### 3.2 Creating programs with Curry and Compose
- We can pass curried fn as an argument to compose

### 3.3 Composition is dot chaining
- Compose is basically dot chaining functions
- With compose we will have to use utility functions from ramda

### 3.4 Logging in composition
- Console logging inside of composed function
- helpful for debugging
- `const log = R.curry((tag, x) => (console.log(tag, x), x))`

### 3.5 Compose - Practice
-  `_.prop` returns value for a specific key in object
- `_.prop('in_stock', reversed_cars) . ==> reversed_cars.in_stock ===> reversed_cars["in_stock"]`
- `compose(map(f), map(g)) == map(compose(f, g))`

## 4 Functors
- Things are not always chainable out of the box. We will create a **BOX**. We will use functors to make this better and save state for chaining.

### 4.1 Creating the identity Functor
- Box functor calls the functions
- In code, we just chain with .map which will call the Box functor
- Box:
    - map fn: run the function on the value and store it back in box (accumulating current state)
    - fold fn: run the function on the value and return it instead of keeping in box
    - toString: convert current value to string to log

### 4.2 Refactoring to Dot chaining
- Functor basically captures compose
- alternate to using compose:
    - `const compose = (f, g) => x => Box(x).map(g).fold(f);`
