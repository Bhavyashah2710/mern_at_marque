const fs = require('fs');

let data = fs.readFileSync('employees.json','utf-8');
let bData = JSON.parse(data);

console.log(bData);
console.log(typeof bData);