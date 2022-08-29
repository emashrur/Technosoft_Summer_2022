/**
 * 
 * connect with server 
 * execute the api ()
 * store result in a variable
 * 
 * Promise : function will definitely get some response from server the
 *      response could either be from the data or any error.
 * 
 * await : we use on the lines where we want to wait for promise to be fulfilled.
 */

let num = 100;

if (num = 5) {
    fetch('api-endpoint'); // function used to get a response from api-server
}


// const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
/* 
you may get the data
you may not get the data
*/

// async function myFunction() {
    //code (because 'async', this function can use 'await' statments)
// }

async function myFunction() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
}

myFunction();