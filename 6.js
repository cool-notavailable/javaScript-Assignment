let name = "Gaurav";
let email = "Gaurav@gmail.com";
let age = "99";
if (typeof name !== "string") {
  console.log("Name should be a string");
} else if (typeof email !== "string") {
  console.loga("Email should be a string");
} else if (typeof age !== "number") {
  console.log("Age should be a number");
} else {
  console.log("Form is valid");
}
