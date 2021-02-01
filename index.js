const fs = require("fs");

const _ = require("lodash");
const chalk = require("chalk");

const dishes = require("./data");

console.log(chalk.red("Hello world from Node :D!"));

// const file = fs.readFileSync("./example.txt", "utf8");

// console.log(file);

const sorted = _.sortBy(dishes, (dish) => dish.calories);

console.log(sorted);
