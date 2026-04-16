// Task 1: Order System (setTimeout)

console.log("Order placed");

setTimeout(() => {
  console.log("Preparing food");
}, 2000);

setTimeout(() => {
  console.log("Food ready");
}, 4000);

setTimeout(() => {
  console.log("Delivered");
}, 5000);

// Output:
// Order placed
// Preparing food (after 2 seconds)
// Food ready (after 4 seconds)
// Delivered (after 5 seconds)

// Task 2: Digital Clock (setInterval)

let count = 0;

let clock = setInterval(() => {
  let now = new Date();
  console.log(now.toLocaleTimeString());

  count++;

  if (count === 10) {
    clearInterval(clock);
    console.log("Clock stopped");
  }
}, 1000);

// Output:
// Current time (every second for 10 seconds)
// Clock stopped (after 10 seconds)

//  LEVEL 2 — Intermediate (Callbacks + Async Thinking)
// Task 3: Callback Hell Simulation

function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Fetched");
    callback();
  }, 1000);
}

function getUserPosts(callback) {
  setTimeout(() => {
    console.log("User Posts Fetched");
  }, 1000);
}

loginUser(() => {
  getUserData(() => {
    getUserPosts();
  });
});

// Output:
// User Logged In (after 1 second)
// User Data Fetched (after 2 seconds)
// User Posts Fetched (after 3 seconds)

//  LEVEL 3 — Promises (Real API Logic)
// Task 4: Fake API Promise

function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // change to false to test error

      if (success) {
        resolve([
          {name: "Laptop", price: 50000},
          {name: "Mobile", price: 20000}
        ]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

getProducts()
  .then(data => {
    console.log("Products:", data);
  })
  .catch(err => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("API Call Completed");
  });

  // Output :
  // Products: [ { name: 'Laptop', price: 50000 }, { name: 'Mobile', price: 20000 } ]
  // API Call Completed     