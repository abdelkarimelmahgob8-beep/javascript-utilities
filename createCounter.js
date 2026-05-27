function createCounter(initialValue) {
   if (typeof initialValue !== 'number' || isNaN(initialValue)) {
        throw new TypeError('Initial value must be a number');
    }

    let count = initialValue;

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => {
            count = initialValue;
            return count;
        }
    };

}

const counter = createCounter(10); 
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset()); 