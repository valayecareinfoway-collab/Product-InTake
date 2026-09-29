
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


// let products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 800 },
//     { name: "Keyboard", price: 1500 },
//     { name: "Monitor", price: 12000 }
// ];

// for (let a = 0; a < products.length; a++) {
//     main.innerHTML += products[a].name + "-" + products[a].price + "<br>";
// }

// let newarray = products.filter(function (i) {
//     return i.price > 2000;
// })
//     .map(function (i) {
//         return i.price + 1000;
//     });

// for (let b = 0; b < newarray.length; b++) {
//     demo.innerHTML += products[b].name + "-" + newarray[b] + "<br>";
// }



//// 10th question !!!!//// Find the first student who scored more than 80. Then create a new object from that student and add: "passed: true." The original object should not be changed.

// let students = [
//     { name: "Aman", marks: 45 },
//     { name: "Rahul", marks: 82 },
//     { name: "Rohit", marks: 67 },
//     { name: "Sam", marks: 91 }
// ];

// for (let a = 0; a < students.length; a++) {
//     main.innerHTML += students[a].name + "-" + students[a].marks + "<br>"
// }

// let newarray = students.find(function (i) {
//     return i.marks > 80;
// })

// let copy = { ...newarray, passed: true };

// demo.innerHTML = copy.name + "-" + copy.marks + "-" + copy.passed;




//// 11th question !!!!//// Create a new array containing only employees from the "IT" department. For every employee that remains, increase their salary by 5000. The original employees array must stay unchanged.


// let employees = [
//     { name: "John", department: "IT", salary: 40000 },
//     { name: "Sara", department: "HR", salary: 35000 },
//     { name: "Mike", department: "IT", salary: 50000 },
//     { name: "Emma", department: "Sales", salary: 45000 }
// ];

// // for (let a = 0; a < employees.length; a++) {
// //     main.innerHTML += employees[a].name + "-" + employees[a].department + "-" + employees[a].salary + "<br>";
// // }

// employees.forEach(function (a) {
//     main.innerHTML += a.name + "-" + a.department + "-" + a.salary + "<br>";
// });

// let newarray = employees.filter(function (i) {
//     return i.department === "IT";
// });

// let newarray2 = newarray.map(function (i) {
//     return { ...i, salary: i.salary + 5000 }
// })

// // demo.innerHTML = newarray2.map(function (i) {
// //     return `<p>${i.name} - ${i.department} - ${i.salary}</p>`;
// // }).join("");

// newarray2.forEach(function (i) {
//     demo.innerHTML += i.name + "-" + i.department + "-" + i.salary + "<br>";
// });



//// 12th question !!!!//// Create a new array containing all numbers from both arrays, then add 70 to the end. Do not modify either original array


// let oldNumbers = [10, 20, 30];
// let newNumbers = [40, 50, 60];

// let newarray = [...oldNumbers, ...newNumbers];

// newarray.push(70);

// demo.innerText = newarray;



//// 13th question !!!!//// 10. Create a new object containing everything from user, but: change age to 22, change city to "Mumbai", add a new property called role with value "Developer". The original user must remain unchanged.

// let user = {
//     name: "Rahul",
//     age: 21,
//     city: "Delhi"
// };

// let copy = {...user , age: 22, city: "Mumbai"}

// let copy2 = {...copy, role: "Developer"}

// console.log(copy2);

// demo.innerHTML = copy2.name + "-" + copy2.age + "-" + copy2.city + "-" + copy2.role;



//// 14th question !!!!//// . Create a new array that: keeps only numbers greater than 10, doubles those numbers, adds 100 to the beginning of the final array.Don't modify numbers.


// let numbers = [5, 12, 8, 21, 30, 7, 18];

// main.innerText = numbers;

// let newarray = numbers.filter(function (i) {
//     return i > 10;
// })
//     .map(function (i) {
//         return i * 2;
//     })

// let finalarray = [100 , ...newarray];

// demo.innerText = finalarray;



///// 15th question !!!!///// Create a new array containing only electronics. For each electronics product: increase its price by 5000, add a new property: onSale: true. Do not modify the original objects.

// let products = [
//     { name: "Laptop", price: 70000, category: "electronics" },
//     { name: "Shirt", price: 1500, category: "clothing" },
//     { name: "Phone", price: 40000, category: "electronics" },
//     { name: "Shoes", price: 3000, category: "clothing" }
// ];

// products.forEach(function (i) {
//     main.innerHTML += i.name + "-" + i.price + "-" + i.category + "<br>";
// })

// let newarray = products.filter(function (i) {
//     return i.category == "electronics";
// })
//     .map(function (i) {
//         return { ...i, price: i.price + 5000 }
//     })

//     .map(function (i) {
//         return { ...i, onSale: true }
//     })

// newarray.forEach(function(i){
//     demo.innerHTML += i.name + "-" + i.price + "-" + i.category + "<br>";
// })



////