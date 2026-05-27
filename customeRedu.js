function customReduce(arr, callback, initialValue) {
    if (!Array.isArray(arr) || typeof callback !== "function") return undefined;
    if (arr.length === 1) return arr[0];
    let accumulator;
    let startIndex;
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    }else {
        if (arr.length === 0) throw new TypeError("Reduce of empty array with no initial value");
        let i = 0;
        while (i < arr.length && !(i in arr)) {
            i++;
        }
        accumulator = arr[i];
        startIndex = i + 1;
    }
    for (let i = startIndex, len = arr.length; i < len; i++) {
        if (i in arr) {
            accumulator = callback(accumulator, arr[i], i, arr);
        }
    }
    return accumulator;
}