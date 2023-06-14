// Array methods

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
  {
    name: "Lux",
    active: false,
  },
  {
    name: "Jay",
    active: false,
  },
];

// 1. ForEach

console.log("ForEach: -------");

const usersForEach = users.forEach((user) => {
  return user.active;
});

console.log(usersForEach);

// 2. Filter

console.log("Filter: -------");

users
  .filter((user) => user.active)
  .forEach((user) => {
    console.log(user.name);
  });

/* console.log(usersFilter); */

// 3. Map

console.log("Map: -------");

users
  .map((user) => user.active)
  .forEach((user) => {
    console.log(user);
  });

// console.log(usersMap);

// 4. Reduce

console.log("Reduce: -------");

users.reduce((accumulator, user) => {
  return user.active ? accumulator + 1 : accumulator;
});

// 5. Sort

console.log("Sort: -------");

const usersSort = users.sort((a, b) => a.name.localeCompare(b.name));
console.log(usersSort);
