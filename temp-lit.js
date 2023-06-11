// Template literals

const identity = {
  name: "Mango",
  age: 20,
  greet: function() {
    return "Hello!";
  },
};

const { name: firstName, age, greet } = identity;

console.log(`${greet()}!, my name is ${firstName} and I am ${age}`);
