const R = require("ramda");

// log fn takes tag and current value and return current value to be used in  next call
const log = R.curry((tag, x) => (console.log(tag, x), x))

const  doStuff = R.compose(
    R.join(""),
    R.filter(x => x.length > 3),
    R.reverse,
    log("after map"),
    R.map(R.trim),
    R.split(" "),
    log("after lower"),
    R.toLower
)

console.log("Final log", doStuff("Hello this is final log!"));
