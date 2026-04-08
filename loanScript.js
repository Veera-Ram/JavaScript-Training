
// 1. USER INPUT


let name = prompt("Enter Name:");
let ageInput = prompt("Enter Age:");
let salaryInput = prompt("Enter Monthly Salary:");
let loanInput = prompt("Enter Loan Amount:");

// 7. TYPE CONVERSION CHECK

console.log("Before Conversion:");
console.log(typeof(ageInput));  //  string
console.log(typeof(salaryInput)); // string
console.log(typeof(loanInput));// string

//Output:
// Before Conversion:
// string
// string
// string

// Convert to number
let age = Number(ageInput); //  
let salary = Number(salaryInput);
let loan = Number(loanInput);

console.log("After Conversion:");
console.log(typeof(age));
console.log(typeof(salary));
console.log(typeof(loan));

//Output:
// After Conversion:
// number
// number
// number

console.log("Name:", name);
console.log("Age:", age);
console.log("Salary:", salary);     
console.log("Loan:", loan);

// Output:
// Name: Veera
// Age: 33
// Salary: 40000
// Loan: 300000

// 2. ELIGIBILITY CHECK

let status;

if(age >= 21 && age <= 60 && salary >= 25000){
    status = "Eligible ✅";     
} else {
    status = "Not Eligible ❌";
}
 console.log(status);

 // Output:
// Eligible ✅

// 3. EMI CALCULATION


let emi = loan/12;


console.log("EMI:", emi);

// Output:
// EMI: 25000

// 4. LOAN CATEGORY

let category;

if(loan > 500000){
    category = "High Loan";
}
else if(loan > 200000){
    category = "Medium Loan";
}
else{
    category = "Low Loan";
}

console.log("Loan Category: " + category);

// Output:
// Loan Category: Medium Loan

// 5. RISK LEVEL (TERNARY)


let risk = (salary > 50000) ? "Low Risk" : "High Risk";

console.log("Risk Level:", risk);

// Output:
// Risk Level: High Risk

// 6. CUSTOMER TYPE (SWITCH)

let customerType;

switch(true){

    case (emi > 40000):
        customerType=(" Premium Customer");
        break;

    case (emi > 20000):
        customerType = "Standard Customer";
        break;

    default:
        customerType = "Basic Customer";
}

console.log("Customer Type: ", customerType);
// Output:
// Customer Type:  Standard Customer    

document.writeln("<h2>Loan Result</h2>");
document.writeln("Name: " + name + "<br>");
document.writeln("Age: " + age + "<br>");
document.writeln("Monthly Salary: " + salary + "<br>");
document.writeln("Loan Amount: " + loan + "<br>");

document.writeln("Status: " + status + "<br>");
document.writeln("EMI: " + emi + "<br>");

document.writeln("Loan Category: " + category + "<br>");
document.writeln("Risk Level: " + risk + "<br>");
document.writeln("Customer Type: " + customerType + "<br>");