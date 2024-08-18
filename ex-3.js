const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
let newHobbies = "Watching basketball";
employees[1].hobbies.push(newHobbies);
console.log(employees[1].hobbies);