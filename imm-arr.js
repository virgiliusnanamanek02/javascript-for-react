// Immutable Array

const users = [
  {
    name: "Mango",
    active: true,
  },
  {
    name: "Poly",
    active: false,
  },
  {
    name: "Ajax",
    active: true,
  },
];

console.log(users);

// 1. Push

const pushUsers = [...users, { name: "Jay", active: false }];
console.log(pushUsers);

// 2. Pop

const popUsers = users.slice(0, users.length - 1);
console.log(popUsers);

//
