//Task 1: E-Commerce Discount System

function calculateDiscount(product, price){

let discount;

if(price > 1000){
discount = price * 0.20;
}else{
discount = price * 0.10;
}

let finalPrice = price - discount;

console.log("Product:", product);
console.log("Final Price:", finalPrice);

return finalPrice;

}

calculateDiscount("Shoes",2000);

//output:
// Product: Shoes
// Final Price: 1600

// Task 2: Order Processing using Callback

function payment(amount){
console.log("Payment of " + amount + " successful");
}

function orderSuccess(){
console.log("Order delivered");
}

function placeOrder(callback){
console.log("Order placed");
callback(500);
orderSuccess();
}

placeOrder(payment);

// Output:
// Order placed
// Payment of 500 successful
// Order delivered

// Task 3: Employee Data Loop System

let employees = [
{name:"Veera", salary:50000},
{name:"Pandiyan", salary:70000}
];

for(let emp of employees){

if(emp.salary > 60000){
console.log(emp.name,"High Salary");
}else{
console.log(emp.name,"Normal Salary");
}

}

// Output:
// Veera Normal Salary
// Pandiyan High Salary

// Task 4: Login Attempts (While Loop)

let password = "admin";
let attempt = 1;
let input;

while(attempt <= 3){

input = prompt("Enter Password");

if(input === password){
console.log("Login success");
break;
}else{
console.log("Attempt", attempt);
}

attempt++;

}

// Output (if correct password entered on 2nd attempt):
// Attempt 1
// Login success    


// Task 5: Coupon Generator (Generator Function )

function* offers(){

yield "10% OFF";
yield "20% OFF";
yield "Free Delivery";
yield "Cashback";

}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

// Output:
// 10% OFF
// 20% OFF
// Free Delivery
// Cashback     

// Task 6: Shopping Cart Total (for...of)

let cart = [100,200,300,400];

let total = 0;

for(let item of cart){
total += item;
}

console.log("Total Bill:", total);

// Output:
// Total Bill: 1000

// Task 7: User Profile System (for...in)

let user = {
name:"Veera",
role:"Developer",
location:"India"
};

for(let key in user){
console.log(key + " : " + user[key]);
}

// Output:
// name : Veera
// role : Developer
// location : India

// Task 8: Factory Pattern (function Reuse)

function createPhone(){
return "Phone";
}

function createBattery(){
return "Battery";
}

function createCharger(){
return "Charger";
}

console.log("Your Order:",createPhone(),createBattery(),createCharger());

// Output:
// Your Order: Phone Battery Charger    

// Task 9: College Form Default Values

function collegeForm(name, department = "Not Assigned"){

console.log("Name:", name);
console.log("Department:", department);

}

collegeForm("Veera");

// Output:
// Name: Veera
// Department: Not Assigned

// Task 10: Currying - EMI Calculator

function emi(p){
return function(r){
return function(t){

let EMI = (p * r * t) / 100;
console.log("EMI:", EMI);

}
}
}

emi(10000)(2)(12);

// Output:
// EMI: 2400    

// Task 11: Even/Odd Analyzer

for(let i=1;i<=10;i++){

if(i % 2 == 0){
console.log(i,"Even");
}else{
console.log(i,"Odd");
}

}

// Output:
// 1 Odd
// 2 Even
// 3 Odd
// 4 Even
// 5 Odd
// 6 Even
// 7 Odd
// 8 Even
// 9 Odd
// 10 Even


// Task 12: Function Scope Debugging

if(true){

var a = 10;
let b = 20;
const c = 30;

}

console.log(a); // Works
console.log(b); // Error
console.log(c); // Error

// Output:
// 10
// ReferenceError: b is not defined
// ReferenceError: c is not defined

//Task 13: Real-time Alert System (IIFE)

(function(){

console.log("🔥 Flash Sale: 50% OFF on Shirts");

})();

// Output:
// 🔥 Flash Sale: 50% OFF on Shirts

// Task 14: Marks Calculator with Return 

function marks(a,b,c){

let total = a + b + c;
let avg = total / 3;

console.log("Total:", total);
console.log("Average:", avg);

return total;

}

marks(80,90,70);

// Output:
// Total: 240
// Average: 80

//Task 15: Retry Offer System(Generator+Condition)

function* retryOffer(){

yield "10% OFF";
yield "20% OFF";
yield "Free Delivery";

}

let retry = retryOffer();

let result;

while(!(result = retry.next()).done){

console.log(result.value);

}

console.log("All offers expired");

// Output:
// 10% OFF
// 20% OFF
// Free Delivery
// All offers expired

