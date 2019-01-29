const http = new EasyHTTP;

//Get Users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.table(data))
  .catch(err => console.log(err));

// // POST Request 
// //user data 
const data = {
  name: 'Edge',
  username: 'edgeq',
  email: 'email@email.com'
}
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.table(data))
  .catch(err => console.log(err));

// //UPDATE 
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.table(data))
  .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/3')
  .then(data => console.log(data))
  .catch(err => console.log(err));