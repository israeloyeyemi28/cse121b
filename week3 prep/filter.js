const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];
// Using the array.filter() method, create an array named namesB with only those names from the name array that start with the character 'B'.
let namesB = names.filter((name) => name.charAt(0) === "B");
