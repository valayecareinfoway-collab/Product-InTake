let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementById("btn");
let add = document.getElementById("add");
let remove = document.getElementById("remove");

// let numbers = []; //  data will be now store in array
// datastr.innerHTML = numbers.join("<br>");

// button.addEventListener("click", function() {

//     numbers.push(input.value); // numbers.push(1.value)  1. value is store in array
//     console.log(numbers);  // [1]

//     output.innerHTML = numbers.join("<br>");  // 1

//     input.value = "";  
// });

// let numbers = [10,20,30,40,50];  //[10,20,30,40,50]
// datastr.innerHTML = numbers.join("<br>");
// output.innerHTML = numbers.join("<br>")  // 10 20 30 40 50

// button.addEventListener("click", function() {
//     numbers.pop();  // 10 20 30 40 (in data only)
//     output.innerHTML = numbers.join("<br>")  // 10 20 30 40 (in html output)
// });



// let names = ["Rahul", "Aman", "Rohit"];
// datastr.innerHTML = names.join("<br>");

// button.addEventListener("click", function() {
//     if(names.includes(input.value)) {
//         output.innerHTML = "Name exist";
//     }else {
//         output.innerHTML = "Name not found";
//     }
// });



// let names = ["Rahul", "Aman", "Rohit"];
// datastr.innerHTML = names.join("<br>");

// button.addEventListener("click", function() {
//     output.innerHTML = "total names: " + names.length;
// });


let names = ["Rahul", "Aman", "Rohit"];
datastr.innerHTML = names.join("<br>");
output.innerHTML = names.join("<br>");

input_add.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
        if(input_add.value != "" ) {
            names.unshift(input_add.value);
            output.innerHTML = names.join("<br>");
            input_add.value = "";
        } else {
            names.unshift("no name found, remove this and add a name");
            output.innerHTML = names.join("<br>");
        }
    }
    
    if (event.code === "Delete") {
        names.shift();
        output.innerHTML = names.join("<br>");
    }
});

// remove.addEventListener("click", function () {
//     names.shift();
//     output.innerHTML = names.join("<br>");
// });