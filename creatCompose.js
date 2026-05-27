function creatCompose(...fns) {
    if (fns.length === 0)  arg => arg;
    for (let i = 0; i < fns.length; i++) {
        if (typeof fns[i] !== 'function')  throw new TypeError('Expected all arguments to be functions');
 }
 return function(...args) {
    let length = fns.length;
    let result = fns[length - 1].apply(this, args);
    for (let i = length - 2; i >= 0; i--) {
        result = fns[i].call(this, result);
    }
    return result;
 }
}

const trimSpace = str => str.trim();
const capitalize = str => str.toUpperCase();
const addGreeting = str => `Welcome, Mr. ${str}!`;



const prepareUsername = creatCompose(addGreeting, capitalize, trimSpace);

const rawInput = "   ahmed mohamed   ";
const finalResult = prepareUsername(rawInput);

console.log(finalResult);