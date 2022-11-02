const bcrypt = require("bcrypt");
const myPassword = "123";

console.time("Time to generate salt");
const salt = bcrypt.genSaltSync(11);
console.log("This is your: " + salt);
console.timeEnd("Time to generate salt");

console.time("Time to generate hash");
const heshedPassword = bcrypt.hashSync(myPassword, salt);
console.log(
    myPassword +
    " is your password & this is your password after hashing it: " +
    heshedPassword
);
console.timeEnd("Time to generate hash");
