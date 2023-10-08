let prompt = require('prompt-sync')();

let basicSalaryInput = prompt('Enter basic salary: ');
let benefitsInput = prompt ("Enter benefits:");

let benefits = parseFloat(benefitsInput);
let basicSalary = parseFloat(basicSalaryInput);


// Constants based on the provided links
const TAX_RATES = [
    { range: [0, 24000], rate: 10 },
    { range: [24001, 32333], rate: 15 },
    { range: [32334, 38667], rate: 20 },
    { range: [38668, 44334], rate: 25 },
    { range: [44335, Infinity], rate: 30 },
];

const NHIF_RATES = [
    { range: [0, 5999], rate: 150 },
    { range: [6000, 7999], rate: 300 },
    { range: [8000, 11999], rate: 400 },
    { range: [12000, 14999], rate: 500 },
    { range: [15000, 19999], rate: 600 },
    { range: [20000, 24999], rate: 750 },
    { range: [25000, 29999], rate: 850 },
    { range: [30000, 34999], rate: 900 },
    { range: [35000, 39999], rate: 950 },
    { range: [40000, 44999], rate: 1000 },
    { range: [45000, 49999], rate: 1100 },
    { range: [50000, 59999], rate: 1200 },
    { range: [60000, 69999], rate: 1300 },
    { range: [70000, 79999], rate: 1400 },
    { range: [80000, 89999], rate: 1500 },
    { range: [90000, 99999], rate: 1600 },
    { range: [100000, Infinity], rate: 1700 },
];

const NSSF_RATE = 0.06;


// Validate input
if (isNaN(basicSalary) || isNaN(benefits)) {
    return "Invalid input. Please enter valid numeric values for basic salary and benefits.";
}


// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {

 
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    let tax = 0;
    for (const rate of TAX_RATES) {
        if (grossSalary >= rate.range[0]) {
            const taxableAmount = Math.min(grossSalary - rate.range[0], rate.range[1] - rate.range[0]);
            tax += (taxableAmount * rate.rate) / 100;
        }
    }

    // Calculate NHIF Deductions
    let nhifDeduction = 0;
    for (const rate of NHIF_RATES) {
        if (grossSalary >= rate.range[0]) {
            nhifDeduction = rate.rate;
            break;
        }
    }

    // Calculate NSSF Deductions
    const nssfDeduction = grossSalary * NSSF_RATE;

    // Calculate Net Salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    // Display the results to the user
    console.log("Gross Salary:", grossSalary);
    console.log("Tax:", tax);
    console.log("NHIF Deduction:", nhifDeduction);
    console.log("NSSF Deduction:", nssfDeduction);
    console.log("Net Salary:", netSalary);
}
    calculateNetSalary(basicSalary,benefits);




