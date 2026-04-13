
// Task 1: E-commerce Cart System

let cart1 = [
  {name: "Shirt", price: 500},
  {name: "Shoes", price: 1500}
];

let cart2 = [
  {name: "Watch", price: 2000}
];

let cart = [...cart1, ...cart2];

cart.push({name: "Cap", price: 300});

cart.pop();

let total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(cart);
console.log("Total:", total);

// Output:
// [
//   { name: 'Shirt', price: 500 },
//   { name: 'Shoes', price: 1500 },
//   { name: 'Watch', price: 2000 }
// ]
// Total: 4000


//Task 2: User Profile Management

let user = {
  name: "Naveen",
  role: "Trainee",
  salary: 20000
};

let update = {
  role: "Developer",
  salary: 50000
};

let updatedUser = {...user, ...update};

let {name, role, salary} = updatedUser;

console.log(`${name} is now a ${role} earning ${salary}`);

// Output:
// Naveen is now a Developer earning 50000  

// Task 3: Function with Rest Operator (Team Score System)

function teamScore(teamName, ...scores) {
  console.log("Team:", teamName);
  console.log("Scores:", scores);

  let total = scores.reduce((a, b) => a + b, 0);
  let highest = Math.max(...scores);

  console.log("Total:", total);
  console.log("Highest:", highest);
}

teamScore("Team A", 10, 20, 30, 40);

// Output:
// Team: Team A
// Scores: [ 10, 20, 30, 40 ]
// Total: 100
// Highest: 40

// Task 4: Nested Data Extraction (API Response Simulation)

let objData = {
  user: {
    name: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
};

// Destructure
let {
  user: {
    name: name1,
    address: { city, pincode }
  }
} = objData;

console.log(`${name1} lives in ${city} - ${pincode}`);

// Output:
// Naveen lives in Bangalore - 560001


//Task 5: Array Dashboard (Admin Panel)

let users = ["A", "B", "C", "D", "E"];

users.splice(2, 2, "X", "Y");

let firstThree = users.slice(0, 3);

let hasB = users.includes("B");

let indexE = users.indexOf("E");

console.log(users);
console.log(firstThree);
console.log("Has B:", hasB);
console.log("Index of E:", indexE);

// Output:
// [ 'A', 'B', 'X', 'Y', 'E' ]
// [ 'A', 'B', 'X' ]
// Has B: true
// Index of E: 4

// Task 6: Data Cleaning Tool

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

let flatData = messyData.flat(Infinity);

let cleanData = flatData.filter(item => item != null);

console.log(cleanData);

// Output:
// [ 1, 2, 3, 4, 5, 'hello' ]

// Task 7: Sorting Bug Fix(Real Industry Issue )

let prices = [1000, 200, 50, 5000];

    let sortedPrices = prices.sort((a, b) => a - b);

console.log(sortedPrices);

// Output:
// [ 50, 200, 1000, 5000 ]

// Task 8: Analytics Report Generator

let orders = [
  {id:1, amount:100},
  {id:2, amount:200},
  {id:3, amount:300}
];

let total1 = orders.reduce((sum, o) => sum + o.amount, 0);

let avg = total1 / orders.length;

console.log("Total:", total1);
console.log("Average:", avg);

// Output:
// Total: 600
// Average: 200

// Task 9: Inventory System (Advanced)

let inventory1 = ["Pen", "Book"];
let inventory2 = ["Bag", "Bottle"];

inventory1.push("Pencil");

console.log(inventory1);

inventory1.pop();

console.log(inventory1);

inventory1.splice(0, 1, "Notebook");

console.log(inventory1);

console.log(inventory1.includes("Book"));

let inventory = [...inventory1, ...inventory2];

console.log(inventory);

// Output:
// [ 'Pen', 'Book', 'Pencil' ]
// [ 'Pen', 'Book' ]
// [ 'Notebook', 'Book' ]
// true
// [ 'Notebook', 'Book', 'Bag', 'Bottle' ]

// Task 10: Interview Level Challenge 🔥

function processData(...data) {
  let flat = data.flat(Infinity);

  console.log("Flat Data:", flat);

  let unique = [...new Set(flat)];

  console.log("Unique Data:", unique);

  let sortUnique = unique.sort((a, b) => a - b);

  console.log("Sorted Unique Data:", sortUnique)

  return sortUnique;

  ;
}

processData(1,2,[3,4],[5,[6]]);

// Output:
// Flat Data: [ 1, 2, 3, 4, 5, 6 ]
// Unique Data: [ 1, 2, 3, 4, 5, 6 ]
// Sorted Unique Data: [ 1, 2, 3, 4, 5, 6 ]