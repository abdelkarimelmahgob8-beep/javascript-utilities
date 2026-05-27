
Array.prototype.customFilter=function(callback) {
    let newArr = [];
    if (typeof callback !== 'function') {
        return [];
    }
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
           let conditionSatisfied = callback(this[i], i, this);
            if (conditionSatisfied === true ) {
                newArr.push(this[i]);
            }
        }
    }
    return newArr;
}
let arr = [1, 2, 3, 4, 5];
let newArr = arr.customFilter((item) => {
    return item === 2;
});
console.log(newArr); // [2]


