// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((item) => {
//     return item * 2;
// });
// console.log(newArr); // [2, 4, 6, 8, 10]

Array.prototype.customMap=function(callback) {
    let  newArr = [];
    if (typeof callback !== 'function') {
        return [];
    }
    for (let i = 0, len = this.length; i < len; i++) {
        if (i in this) {
            let result = callback(this[i], i, this);
            newArr.push(result);
        }else {
            newArr.length++;    
        }
        }
        return newArr;
    }

console.time('customMap');
let arr = [1, 2, 3, 4, 5];
let newArr = arr.customMap((item) => {
    return item * 2;
});
console.log(newArr); 
console.timeEnd('customMap');


let arr2 = [1, 2, , 4, 5];
let newArr2 = arr2.customMap((item) => {
    return item * 2;
});
console.log(newArr2); // [2, 4, <1 empty item>, 8, 10]