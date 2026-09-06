const fs = require('fs');
const path = require('path');
const http = require('http');
const server = http.createServer((req , res) => {
    res.end("response bhej diya gya hai ...... ");

});
server.listen(5000 , () => {
    console.log("server is running on port 5000");
});

// let data = fs.readFileSync('employees.json', 'utf-8');
// let employees = JSON.parse(data);
// let newEmployee = {
//     employee_id: "EMP112",
//     name: "bhavya",
//     salary: 25000,
//     age: 22,
//     country: "india",
//     department: 58
// };
// employees.push(newEmployee);
// // using append
// let anotherEmployee = {
//     employee_id: "EMP113",
//     name: "rahul",
//     salary: 30000,
//     age: 25,
//     country: "india",
//     department: 44
// };
// employees.push(anotherEmployee);
// let finalData = JSON.stringify(employees, null, 2);
// fs.writeFileSync('employees.json', finalData);
// console.log(employees);

// const result = path.join(__dirname, '2nd_sep.js');
// console.log(result);
// console.log(typeof result);

// path.nayafunction = function(str) {
//     let arr= str.split(".")
//     console.log('.'+arr[arr.length-1]);
//     return arr[arr.length-1];
// }
// path.nayafunction('movie.mp4');


// path.resolve()

// path.basename()

//path.extname()



