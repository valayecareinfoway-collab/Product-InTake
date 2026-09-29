
let demo = document.getElementById("demo");
let main = document.getElementById("main");

// //////1st question !!!/////// Get a new array where every number is multiplied by 5.

// let numbers = [2, 4, 6, 8];

// main.innerText = numbers;

// let newarray = numbers.map(function(i){
//     return i*5;
// });

// demo.innerText = newarray;



//// 2nd question !!!!////  Get all numbers greater than 10.

// let numbers = [5, 12, 8, 20, 3, 15];

// main.innerText = numbers;

// let newarray = numbers.filter(function(i){
//     return i>10;
// });

// demo.innerHTML = newarray;



//// 3rd question !!!!//// Get the first number that is less than 0.

// let numbers = [4, 8, -3, 10, -7];

// main.innerText = numbers;

// let newarray = numbers.find(function(i) {
//     return i<0;
// });

// demo.innerText = newarray;



//// 4th question !!!!////  Create a new array containing only the numbers that are greater than 10, then increase each of those numbers by 5.

// let numbers = [4, 7, 10, 13, 16, 19];

// main.innerText = numbers;

// let newarray = numbers.filter(function(i){
//     return i>10;    
// })
// .map(function(i){
//     return i+5;
// })

// demo.innerText = newarray;



//// 5th question !!!!//// Create a new array containing names with 4 or more characters, and make all of them uppercase.

// let names = ["rahul", "aman", "rohit", "alex", "sam"];

// main.innerText = names;

// let newarray = names.filter(function(i){
//     return i.length>=4;
// })
// .map(function(i){
//     return i.toUpperCase();
// })

// demo.innerText = newarray;



////6th question !!!!////  Get the first number greater than 10, then multiply that number by 2.

// let numbers = [3, 8, 12, 5, 20, 7];

// main.innerText = numbers;

// let newarray = numbers.find(function (i) {
//     return i > 10;
// })

// demo.innerText = newarray * 2 ;



////7th question !!!!//// Create a new array containing fruits whose names have more than 5 characters, with "!" added to the end of each one.

// let fruits = ["apple", "banana", "mango", "kiwi", "orange"];

// main.innerText = fruits;

//  let newarray = fruits.filter(function(i){
//     return i.length>5;
//  })
// .map(function(i){
//     return i+"!";
// });

// demo.innerText = newarray;



//// 8th question !!!!//// Create a new array containing only users who are 18 or older, but the new array should contain only their names.

// let users = [
//     { name: "Rahul", age: 17 },
//     { name: "Aman", age: 22 },
//     { name: "Rohit", age: 19 },
//     { name: "Alex", age: 16 }
// ];

// for (let a = 0; a < users.length; a++) {
//     main.innerHTML += users[a].name + "-" + users[a].age + "<br>";
// }

// let newarray = users.filter(function(i){
//     return i.age>=18;
// })
// .map(function(i){
//     return i.name;
// })

// for (let b = 0; b < newarray.length; b++) {
//     demo.innerHTML += newarray[b] + "<br>";
// }



//// 9th question !!!!////Create a new array containing only products costing more than 2000, and increase the price of each remaining product by 1000. Don't modify the original products array.


let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

for (let a = 0; a < products.length; a++) {
    main.innerHTML += products[a].name + "-" + products[a].price + "<br>";
}

let newarray = products.filter(function (i) {
    return i.price > 2000;
})
    .map(function (i) {
        return i.price + 1000;
    });

for (let b = 0; b < newarray.length; b++) {
    demo.innerHTML += products[b].name + "-" + newarray[b] + "<br>";
}