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
let newEmployee = {
                  name: "Alicia",
                  age: 29,
                  hobbies: ["Shopping" , "Reading novels"]
};
employees.push(newEmployee);
newEmployee = {
                name: "Kody",
                age: 19,
                hobbies: ["Computer games" , "Wakeboard"]
};
employees.push(newEmployee);
console.log(employees);

