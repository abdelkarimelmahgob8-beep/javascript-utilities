function asyncPipe(...fns){
    for(let i = 0, len = fns.length; i < len; i++){
        if(typeof fns[i] !== 'function'){
            throw new TypeError(`Argument at index ${i} is not a function`);
        }
    }
    return async function(initialValue){ 
    let result = await initialValue;
    for(let i = 0, len = fns.length; i < len; i++){
        
    try {
        result = await fns[i].call(this, result);
    } catch (error) {
        throw new Error(`Pipeline failed at function index ${i}: ${error.message}`);
    }
}
    return result;
}
}


// Example usage:
// const addOne = x => x + 1;
// const double = x => x * 2;
// const square = x => x * x;
// const pipedFunction = asyncPipe(addOne, double, square);
// console.log(pipedFunction(2)); // Output: 36    
const addOneAsync = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 1000));

// دالة Async بتضرب في 2 بعد ثانية
const doubleAsync = x => new Promise(resolve => setTimeout(() => resolve(x * 2), 1000));

// دالة عادية (Sync) بتربع الرقم (علشان نثبت إن الكود شغال مع الـ 2)
const squareSync = x => x * x;

const piped = asyncPipe(addOneAsync, doubleAsync, squareSync);

// بما إن الدالة الكبيرة بقت Async، بناديها بـ .then أو await
console.time('Execution Time');
piped(2).then(finalResult => {
    console.log(finalResult);
});
console.timeEnd('Execution Time'); // هيستنى ثانيتين ويطبع 36 بالملي!
