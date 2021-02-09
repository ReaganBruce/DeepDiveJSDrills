name = "Reagan";
var name; //global scope
console.log(name);
setName();

function setName() {
  var name = "Reagan"; //local scope
  console.log(name);
}

console.log("Find average");
var avg = findAverage(10, 5);
console.log(`This is the average!: ${avg}`);

function findAverage(num1, num2) {
  console.log("Function Body");
  var answer = (num1 + num2) / 2;
  return answer;
}

let fruitArray = ["Banana", "Mango", "Kiwi"];
let favFruit; //favfruit is an undefined global variable, and can be accessed from within a function scope.

function fruitFunction() {
  let leastFav = fruitArray[2];
  favFruit = fruitArray[1];
  console.log(fruitArray[0]);

  function printfavFruit() {
    console.log(favFruit);
  }
  printfavFruit();
  console.log(leastFav);
}

fruitFunction();


sayHello();
function sayHello(){
  let myName = 'Reagan Bruce'
  console.log(`Hello ${myName}!`)
}

//alertFunction();

let alertFunction = function(){
  alert('This is an alert, using a function expression!');
}
alertFunction()
