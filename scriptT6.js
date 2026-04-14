// Task 1: E-commerce Cart Total

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];

let total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

let costly = cart.filter(item => item.price > 1000);

let names = cart.map(item => item.name.toUpperCase());

console.log("Total:", total);
console.log("Costly:", costly);
console.log("Names:", names);

// Output:
// Total: 3400
// Costly: [ { name: 'Shoes', price: 1500, qty: 1 } ]
// Names: [ 'SHIRT', 'SHOES', 'CAP' ]

// Task 2: Student Result System

let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

let failed = students.filter(s => s.marks < 50);

let distinction = students.some(s => s.marks > 80);

let allPassed = students.every(s => s.marks > 35);

let firstFail = students.find(s => s.marks < 50);

console.log("Failed:", failed);
console.log("Distinction:", distinction);
console.log("All Passed:", allPassed);
console.log("First Fail:", firstFail);

// Output:
// Failed: [ { name: 'Bala', marks: 45 }, { name: 'Divya', marks: 30 } ]
// Distinction: true
// All Passed: false
// First Fail: { name: 'Bala', marks: 45 }

// Task 3: Employee Salary Analysis

let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

let updated = employees.map(e => ({
  ...e,
  salary: e.salary * 1.1
}));

let high = employees.filter(e => e.salary > 30000);

let totalSal = employees.reduce((sum, e) => sum + e.salary, 0);

let sorted = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Updated Salaries:", updated);
console.log("High Earners:", high);
console.log("Total Salary:", totalSal);
console.log("Sorted by Salary:", sorted);

// Output:
// Updated Salaries: [
//   { name: 'A', salary: 27500 },
//   { name: 'B', salary: 44000 },
//   { name: 'C', salary: 16500 },
//   { name: 'D', salary: 55000 }
// ]
// High Earners: [
//   { name: 'B', salary: 40000 },
//   { name: 'D', salary: 50000 }
// ]
// Total Salary: 130000
// Sorted by Salary: [
//   { name: 'D', salary: 50000 },
//   { name: 'B', salary: 40000 },
//   { name: 'A', salary: 25000 },
//   { name: 'C', salary: 15000 }
// ]


// Task 4: String Real Use Case (Search System)

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

let hasMobile = products.includes("Mobile");

let lower = products.map(p => p.toLowerCase());

let index = products.indexOf("Tablet");

let joined = products.join("-");

console.log("Has Mobile:", hasMobile);
console.log("Lowercase:", lower);
console.log("Index of Tablet:", index);
console.log("Joined:", joined);

// Output:
// Has Mobile: true
// Lowercase: [ 'laptop', 'mobile', 'tablet', 'camera' ]
// Index of Tablet: 2
// Joined: Laptop-Mobile-Tablet-Camera

// Task 5: Date Real-Time Task(Age Calculator)

let dob = new Date("1993-05-23");
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();

console.log(`You are ${age} years old`);

// Output:
// You are 33 years old

// Task 6: Login Validation System

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let tests = [
  {username: "admin", password: "1234"}, 
  {username: "user", password: "1234"}   
];

tests.forEach(test => {
  let found = users.find(u => u.username === test.username);

  if (found && found.password === test.password) {
    console.log(`${test.username}: Login Success ✅`);
  } else {
    console.log(`${test.username}: Invalid Credentials ❌`);
  }
});

// Output:
// admin: Login Success ✅
// user: Invalid Credentials ❌

// Task 7: Even Number Analyzer

let numbers = [10, 15, 20, 25, 30];

let evens = numbers.filter(n => n % 2 === 0);

let hasOdd = numbers.some(n => n % 2 !== 0);

let allEven = numbers.every(n => n % 2 === 0);

let first = numbers.find(n => n > 20);

console.log("Evens:", evens);
console.log("Has Odd:", hasOdd);
console.log("All Even:", allEven);
console.log("First > 20:", first);

// output:
// Evens: [ 10, 20, 30 ]
// Has Odd: true
// All Even: false
// First > 20: 25

// Task 8 : Orders System 🔥

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((sum, o) => sum + o.amount, 0);

let pending = orders.filter(o => o.status === "pending");

let highOrder = orders.some(o => o.amount > 1000);

let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);

console.log("Revenue:", revenue);
console.log("Pending Orders:", pending);
console.log("High Order:", highOrder);
console.log("Sorted Orders:", sortedOrders);

// output:
// Revenue: 2500
// Pending Orders: [ { id: 2, amount: 1500, status: 'pending' } ]
// High Order: true
// Sorted Orders: [
//   { id: 1, amount: 500, status: 'delivered' },
//   { id: 2, amount: 1500, status: 'pending' },
//   { id: 3, amount: 2000, status: 'delivered' }
// ]    