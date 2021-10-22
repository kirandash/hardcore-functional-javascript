const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x)
});

const first = xs => xs[0];

const halfTheFirstLargeNumber_ = xs => {
    const found = xs.filter(x => x >= 20)
    const answer = first(found) / 2
    return `The answer is ${answer}`
}

const halfTheFirstLargeNumber = xs => 
    Box(xs)
        .map(xs => xs.filter(x => x >= 20))
        .map(found => first(found) / 2)
        .fold(answer => `The answer is ${answer}`)

// Alternate approach with compose on Box instead of using funtors
const compose = (f, g) => x => Box(x).map(g).fold(f);

const res_ = halfTheFirstLargeNumber_([1, 4, 50])

const res = halfTheFirstLargeNumber([1, 4, 50])

console.log(res_)

console.log(res)


