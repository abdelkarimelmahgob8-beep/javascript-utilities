
function deepClone(entry, cache = new WeakMap()) {
    if (entry === null || typeof entry !== 'object') {
        return entry; 
    }
        if (cache.has(entry)) {
        return cache.get(entry);
    }

    if (entry instanceof Date) return new Date(entry.getTime());
    if (entry instanceof RegExp) return new RegExp(entry.source, entry.flags);

    if (Array.isArray(entry)) {
        let newArr = [];
        cache.set(entry, newArr);
        
        for (let i = 0, len = entry.length; i < len; i++) {
            newArr.push(deepClone(entry[i], cache)); 
        }
        return newArr;
    } else {
        let newObj = Object.create(Object.getPrototypeOf(entry));
        cache.set(entry, newObj);
        
        for (let key in entry) {
            if (Object.prototype.hasOwnProperty.call(entry, key)) {
                newObj[key] = deepClone(entry[key], cache);
            }
        }
        return newObj;
    }
}

let obj = [
    {
        name: 'Alice',
        age: 25,    
        hobbies: ['reading', 'traveling'],
        address: {
            city: 'New York',
            zip: '10001'
        }
    }
];  
let clonedObj = deepClone(obj);
console.log(clonedObj); 
console.log(clonedObj === obj); 


