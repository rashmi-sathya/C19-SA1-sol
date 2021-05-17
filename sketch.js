var fruits = ["Banana", "Orange", "Apple", "Mango"];


function setup() {
  createCanvas(480, 240);
}

function draw() {
  background(0,191,255);
  

}

function mousePressed() {
 
fruits.push("grape");
console.log(fruits);
}

function keyPressed() {
 fruits.pop();
 console.log(fruits)
}

