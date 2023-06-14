// Asynchronous: Async/await

// https://jsonplaceholder.typicode.com/users

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

getUsers();
