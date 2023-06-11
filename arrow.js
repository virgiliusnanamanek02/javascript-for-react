// Arrow function

const detailMembers = [
  {
    name: "Mango",
    age: 20,
  },
  {
    name: "Poly",
    age: 18,
  },
  {
    name: "Ajax",
    age: 30,
  },
  {
    name: "Lux",
    age: 25,
  },
  {
    name: "Jay",
    age: 23,
  },
];

const getMembers = (members) => {
  return members.map((member) => {
    return `${member.name} is ${member.age} years old`;
  });
};

console.log(getMembers(detailMembers));
