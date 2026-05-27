class EventEmitter {
    events = {};

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    emit(eventName,data) {
        if (!this.events[eventName]) return; 

        for (let i = 0, len = this.events[eventName].length; i < len; i++) {
            this.events[eventName][i](data); 
        }
    }  
    off(eventName, callback) {
        if (!this.events[eventName]) return;
    for (let i = 0, len = this.events[eventName].length; i < len; i++) {
        if (this.events[eventName][i] === callback) {
            this.events[eventName].splice(i, 1);
            break;
        }   }
} 
}
function main(args) {
    console.log(args.salary);
}

let abdelkarim = {
    name: "John",
    age: 30,
    salary: 50000
};

const eventEmitter2 = new EventEmitter();
eventEmitter2.on("greet", main);
eventEmitter2.emit("greet", abdelkarim); 