### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  * Using callbacks, async & await, and promises

- What is a Promise?
  * A promise is one-time guarantee of future value 

- What are the differences between an async function and a regular function?
  * An `async` function will allways return a promise. Async functions also allow you to use the `await` code.

- What is the difference between Node.js and Express.js?
  * **Node.js** is a runtime environment for executing JS code, while **Express.js** is a web application framework that runs on top of **Node.js**.

- What is the error-first callback pattern?
  * The basic idea is that the first argument passed to the callback function is always reserved for an error object.

- What is middleware?
  * It is code that runs in the middle of the request / response cycle.

- What does the `next` function do?
  * It is used to pass on to the next middleware function in the stack.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  * It is making three seperate HTTP requests using await. It would be better to use `Promise.all()`.
  * There's no error handling.
  * The return has bad struture it should be in an object.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
