
// 1st question !!!

let demo = document.getElementById("demo");
let main = document.getElementById("main");

let numbers = [2, 4, 6, 8];

main.innerText = numbers;

let newarray = numbers.map(function(i){
    return i*5;
});

demo.innerText = newarray;