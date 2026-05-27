function creatOnce(fn) {
    // Edge Case 3: تأمين المدخلات
    if (typeof fn !== 'function') {
        throw new TypeError('Expected a function');
    }

    let called = false;
    let result; 

    return function(...args) {
        if (!called) {
            // Edge Case 1: حماية الدالة بـ try...catch ضد الـ Errors
            try {
                result = fn.apply(this, args);
                called = true; // مش بنحولها لـ true غير لو السطر اللي فوق نجح تماماً!
            } catch (error) {
                // لو ضربت Error، بنرمي الـ Error للمستخدم بس بنسيب called بـ false 
                // علشان لو حاول يناديها تاني تاخد فرصة تشتغل صح
                throw error; 
            }
        }
        return result;
    }
}

// let initialize = creatOnce(function() {
//     console.log('Initialization logic executed');
//     return 'Initialized';
// });     
// console.log(initialize());
// console.log(initialize());


let cloneAdd = creatOnce(function(a, b) {
    return a + b;
});
console.log(cloneAdd(2, 3));
console.log(cloneAdd(5, 3));
