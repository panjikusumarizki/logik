// No.1
// const fibonacciSatu = (n) => {
//     let n1 = 1
//     let n2 = 1
//     let next = 0

//     for (let i = 1; i <= n; i++) {
//         console.log(n1)
//         next = n1 + n2
//         n1 = n2
//         n2 = next
//     }
// }

// fibonacciSatu(7)
// console.log()

// No.2
// Cara 1
const fibonacciDua = (n) => {
    let n1 = 1, n2 = 1, next, arr = [], last

    for (let i = 0; i < n; i++) {
        // arr.push(n1)
        console.log(n1)
        next = n1 + n2
        n1 = n2
        n2 = next
    }
    // last = arr[arr.length-1]
    // return last
}

console.log(fibonacciDua(7))

// Cara 2 menggunakan spread operator
// const fibonacciDua = (n) => {
//     let n1 = 1, n2 = 1, next = 0, arr = []

//     for (let i = 1; i <= n; i++) {
//         arr.push(n1)
//         next = n1 + n2
//         n1 = n2
//         n2 = next
//     }

//     const last = [...arr]
//     console.log(last[last.length-1])
// }

// fibonacciDua(7)

// No. 3
// const fibonacciTiga = (n) => {
//     let n1 = 1
//     let n2 = 1
//     let next = 0

//     for (let i = 1; i < n; i++) {
        
//         while (n1 < n) {
//             console.log(n1)
//             next = n1 + n2
//             n1 = n2
//             n2 = next
//         }
//     }
// }

// fibonacciTiga(2)