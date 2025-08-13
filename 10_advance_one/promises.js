// const promiseOne = new Promise((resolve, reject) => {
//     // do anaynch task 
//     // db calls,cryptography,netwrok call ,
//     setTimeout(() => {
//         // console.log('async task donne ');
//         resolve()
//     }, 1000)
// });

// promiseOne.then(() => {
//     // console.log('promise consumed');

// }) //relation to  resolve


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('async task 2');
//         resolve()
//     }, 2000)
// }).then(() => {

//     console.log('async 2 resolved ')
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username: 'arun singh', email: "aruns5061@gmail.com" })
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user)
// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if (!error) {
//             resolve({ username: "arunn", password: 12 })
//         } else {
//             reject('ERROR:there is an error ')
//         }
//     }, 2000)
// })

// promiseFour.then((user) => {
//     console.log(user)
// }).catch((error) => {
//     console.log(error)
// })
// promiseFour.catch()
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username)
// }).catch((error) => {
//     console.log(error)
// }).finally(() => {
//     console.log('work is done ')
// })

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if (error === false) {
//             resolve({ data: "unknown" })
//         } else {
//             reject('ERROR: every thing is unknown ')
//         }
//     }, 2000)
// })

//another way 
// async function consumePromiseFive() {
//     try {

//         const resolve = await promiseFive
//         console.log(resolve)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()

// async function getDataFromApi() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data = await response.json()
//         console.log(data)
//     } catch (e) {
//         console.log(e)
//     }

// }
// getDataFromApi()

fetch('https://api.github.com/users/Arunoo12').then((Response) => {
    return Response.json();
}).then((data) => { console.log(dataata) }).catch((e) => {
    console.log(`error ${e}`)

}).finally(() => {
    console.log('finallly something is done ')
})