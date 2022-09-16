// Exercise 1 Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
//and for..of
const greeter = "Hello ";
myArray = ["Randy Savage", "Ric Flair", "Hulk Hogan"];
myArray.forEach(counter => {
    console.log(greeter + counter);
});
console.log("")

// Exercise 2 Using destructuring assignment syntax and the spread operator, write a function will capitalize the
//first letter of a string.
const capital = ([first, ...last], lowerCase = false) =>
    first.toLowerCase() + (lowerCase ? last.join("").toUpperCase() : last.join(""));

console.log(capital("fooBar"))
console.log(capital("nodeJs"))
console.log("")

// Exercise 3 Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
//the first character of each Color in the following array..
const colors = ["red", "green", "blue"];
const capitalizedColors = colors.map(firstLetter => firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1));

console.log(capitalizedColors);
console.log("")

// Exercise 4 Using array.proto.filter create a function that will filter out all the values of the array that are less
//than twenty.
const values = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = values.filter(function(lessThan){
    return lessThan < 20
});

console.log(filterLessThan20)
console.log("")

// Exercise 5 Using array.proto.reduce create calculate the sum and product of a given array.
const array = [1, 2, 3, 4]
const calculateSum = array.reduce(function(accummulatedValue, currentValue){
    return accummulatedValue + currentValue
}, 0);

const calculateProduct = array.reduce(function(accummulatedValue, currentValue){
    return accummulatedValue * currentValue
});

console.log(calculateSum);
console.log(calculateProduct);
console.log("")

// Exercise 6 Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
//from Car Class. The parameters for the Car class is the model and year. The parameters for the
//subclass is the model, year and balance.
// Use the super key word in the Sedan subclass to set the model and name in base Car
//constructor.
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
}

class Sedan extends Car{
    constructor(model, year, price){
        super(price);
        this.balance = price;
        this.model = model;
        this.year = year;
    }
}

function getDetails(content){
    console.log(content);
}

const car1 = new Car("Pontiac Firebird", 1976);
getDetails(car1);

const sedan1 = new Sedan("Volvo SD", 2018, 30000);
getDetails(sedan1);