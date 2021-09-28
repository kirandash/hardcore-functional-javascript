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
