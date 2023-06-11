// Ternary Operator

const identity = {
  name: "Mango",
  age: 20,
  greet: function() {
    return "Hello!";
  },
};

const { name: firstName, age, greet } = identity;

// Ternary

const isAdult = age >= 18 ? true : false;

console.log(isAdult);
