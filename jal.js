// function fetchUsername() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('JSUser');
//         }, 3000);
//     })
// }

// console.log("Fetching username...");
// fetchUsername().then((value) => {
//     console.log(`You are logged in as ${value}`);
// })
// .finally(() => {
//     console.log("Welcome!");
// })

let negara = ['Indonesia', 'Perancis', 'Austria', 'Swiss'];
let cek = negara.includes('Italia');
console.log('10. method includes()');
console.log(cek);