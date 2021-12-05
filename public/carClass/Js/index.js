class Car {
    constructor(brand, kilometers, year) {
        this.brand = brand;
        this.kilometers = kilometers;
        this.year = year;
    }

    // get brand() {
    //     return this._brand;
    // }
    // get kilometers() {
    //     return this._kilometers;
    // }

    // set brand(value) {
    //     if (value.length < 3) {
    //         console.log("Brand name is too short.");
    //         return;
    //     }
    //     this._brand = value;
    // }
    // set kilometers(value) {
    //     this._kilometers = value;
    // }

    maintenance(maintenanceNumber) {
        if (this.kilometers > maintenanceNumber) {
            let message = "You need to get maintenance on your car";
            return message
        }
        else {
            let message = "You are still fine for " + (maintenanceNumber - this.kilometers) + " kilometers";
            return message
        }
    }

    age() {
        let date = new Date();
        let age = date.getFullYear() - this.year;
        let message = "Your car is " + age + " year(s) old";
        return message
    }

}

let car = new Car("k", 12000);
car.brand = null;
let car1 = new Car("kia", 12000, 2019);
console.log(car);
console.log(car1);
console.log(car1.year);
car1.year = 15;
console.log(car1);
console.log(car1.age());
console.log(car1.maintenance(15000));
console.log(car1.maintenance(10000));

let numbers = [4, 9, 16, 25];
console.log(numbers);
numbers[4] = 4444;
numbers.push(75);
console.log(numbers);
numbers = 5;
console.log(numbers);