//your JS code here. If required.
// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]

// Additional tests
console.log(getKeys({ name: "John", age: 25, city: "New York" })); // Output: ["name", "age", "city"]
console.log(getKeys({})); // Output: []
console.log(getKeys({ course: "Math", grade: "A" })); // Output: ["course", "grade"]
