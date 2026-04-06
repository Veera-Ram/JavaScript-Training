

//SECTION 1: Printing & User Interaction
 

console.log("Name: Veerapandiyan.R");
console.log("Designation: Senior Software Engineer");

alert("Welcome to JavaScript Session");

let likesCoding = confirm("Do you like coding?");
console.log("Likes Coding:", likesCoding);

let favFood = prompt("Enter your favorite food:");
console.log("Favorite Food:", favFood);

document.writeln("Good Evening Team");


// SECTION 2: Console Methods

console.log(100);
console.warn("This is a warning");
console.error("Something went wrong!");
console.clear();


//  SECTION 3: Data Types


let myName = "Veera";
console.log(typeof(myName));

let age = 33;
console.log(typeof(age));

let n = true;
console.log(n);

let v;
console.log(v);

let s = null;
console.log(s);



// SECTION 4: Arrays

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

console.log("First:", fruits[0]);
console.log("Last:", fruits[fruits.length - 1]);

fruits.push("Pineapple");
console.log("After Add:", fruits);

fruits.pop();
console.log("After Remove:", fruits);

console.log("Length:", fruits.length);



// SECTION 5: Objects


let student = {
    name: "Veera",
    age: 33,
    course: "Full Stack",
    fruits: ["Apple", "Mango", "Banana"]
};

console.log(student.name);

student.college = "ABC College";
console.log(student);

console.log(student.fruits[1]);

student.age = 34;
console.log(student);



//SECTION 6: Operators

let x = 10;
let y = 5;

console.log("Add:", x + y);
console.log("Subtract:", x - y);
console.log("Multiply:", x * y);
console.log("Divide:", x / y);
console.log("Remainder:", x % y);
console.log("Power:", x ** y);



//SECTION 7: Increment & Decrement

let num1 = 5;
console.log("Post Increment:", num1++);
console.log("After:", num1);

let num2 = 5;
console.log("Pre Increment:", ++num2);

let num3 = 10;
console.log(num3++);
console.log(++num3);

let num4 = 8;
console.log("Decrement:", num4--);
console.log("After:", num4);


// Predict Output 

let a = 5;
let b = a++;
let c = ++a;

console.log(a);
console.log(b);
console.log(c);



//SECTION 8: Real-Time Logic Tasks

// Voting eligibility
let userAge = prompt("Enter your age:");
if(userAge >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}

// Greeting
let userName = prompt("Enter your name:");
console.log("Hello " + userName);

// Highest marks
let marks = [85, 92, 78, 96, 88];
let highest = Math.max(...marks);
console.log("Highest Marks:", highest);

// Fruits object
let fruitCategory = {
    tropical: ["Mango", "Banana"],
    berries: ["Strawberry", "Blueberry"]
};

console.log(fruitCategory.tropical[0]);

// Prompt + Array
let fav1 = prompt("Enter fruit 1");
let fav2 = prompt("Enter fruit 2");
let fav3 = prompt("Enter fruit 3");

let userFruits = [fav1, fav2, fav3];

console.log("User Fruits:", userFruits);

