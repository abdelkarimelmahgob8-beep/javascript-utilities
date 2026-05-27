function customGroupBy(array, fn) {
    if (!Array.isArray(array) || typeof fn !== "function") return undefined;
    const result = Object.create(null);
    for (let i = 0, len = array.length; i < len; i++) {
        if (i in array) {
            const key = fn(array[i], i, array);
            // if (key === '__proto__') continue;
            if (result[key] === undefined) {
                result[key] = [];
            }
            result[key].push(array[i]);
        }
    }
    return result;
}

let arr = [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }, { name: 'Charlie', age: 25 }];
let grouped = customGroupBy(arr, (item) => item.name);
console.log(grouped);

//--------------------------------------------------------------------------------------
// function customGroupBy(array, fn) {
//     // 1. حماية ضد المدخلات الخاطئة
//     if (!Array.isArray(array) || typeof fn !== "function") return undefined;
    
//     // 2. إنشاء كائن نقي تماماً بدون prototype لحل مشكلة الـ Edge cases والوراثة
//     const result = Object.create(null); 
    
//     for (let i = 0, len = array.length; i < len; i++) {
//         // 3. تخطي الأماكن الفاضية في المصفوفة بأمان
//         if (i in array) {
//             const key = fn(array[i], i, array);
            
//             // 4. حماية إضافية ضد الـ Prototype Pollution
//             if (key === '__proto__') continue; 
            
//             // 5. بما إن الكائن نقي، بنشيك ببساطة لو الـ key لسه مجاش قبل كده
//             if (result[key] === undefined) {
//                 result[key] = [];
//             }
            
//             result[key].push(array[i]);
//         }
//     }
//     return result;

//     let arr = [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }, { name: 'Charlie', age: 25 }];
// let grouped = customGroupBy(arr, (item) => item.name);
// console.log(grouped);
// }
// function customGroupBy(array, fn) {
//     // 1. حماية ضد المدخلات الخاطئة
//     if (!Array.isArray(array) || typeof fn !== "function") return undefined;
    
//     // 2. إنشاء كائن نقي تماماً بدون prototype لحل مشكلة الـ Edge cases والوراثة
//     const result = Object.create(null); 
    
//     for (let i = 0, len = array.length; i < len; i++) {
//         // 3. تخطي الأماكن الفاضية في المصفوفة بأمان
//         if (i in array) {
//             const key = fn(array[i], i, array);
            
//             // 4. حماية إضافية ضد الـ Prototype Pollution
//             if (key === '__proto__') continue; 
            
//             // 5. بما إن الكائن نقي، بنشيك ببساطة لو الـ key لسه مجاش قبل كده
//             if (result[key] === undefined) {
//                 result[key] = [];
//             }
            
//             result[key].push(array[i]);
//         }
//     }
//     return result;
// }

// let arr = [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }, { name: 'Charlie', age: 25 }];
// let grouped = customGroupBy(arr, (item) => item.name);
// console.log(grouped);