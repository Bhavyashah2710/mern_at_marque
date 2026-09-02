// function greet(name) {
//     console.log("Hello " + name);
// }

// module.exports = greet;

function reverse(b) {
    return b.split("").reverse().join("");
}

function firstup(b) {
    let first = b.charAt(0).toUpperCase();
    return first + b.slice(1);
}

module.exports = { reverse, firstup };