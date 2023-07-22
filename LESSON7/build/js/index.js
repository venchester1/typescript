"use strict";
// Index Signature
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
// withoud a loot
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40
console.log(todaysTransactions["Ven"]);
///////////////////////////////////////////////
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
//////////////////////////////////////////
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
//function
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
/////////////////////////////////
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
