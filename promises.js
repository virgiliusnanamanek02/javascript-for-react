// Asynchronous: Promises

// https://jsonplaceholder.typicode.com/users

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json().then((data) => console.log(data))
  );
}

getUsers();
