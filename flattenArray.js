function flattenArray(arr) {
if (!Array.isArray(arr)) {
throw new TypeError('Input must be an array');
}
if (cache.has(arr)) {return result = [];
}
cache.set(arr, true);

let result = [];
for (let i = 0, len = arr.length; i < len; i++) {
    if(i in arr) {  
if (Array.isArray(arr[i])) {
result = result.concat(flattenArray(arr[i]));
} else {
result.push(arr[i]);
}

}
return result;
}
}
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);    