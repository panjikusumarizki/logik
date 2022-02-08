// generateNumberFactorial = n => {
//     n = BigInt(n);

//     return n === 0n ? 1n : n * generateNumberFactorial(n - 1n);
// };
  
// let testMagicNumber = 25;

// const factorial = generateNumberFactorial(testMagicNumber).toString();

// console.log(factorial);

// const faktorial = (n) => {
//     let a = 1
//     let b = 1
//     while (a <= n) {
//         b = b * a
//         a++
//     }
//     return BigInt(b).toString()
// }

// console.log(faktorial(25));

const factorial = (n) => {
    let value = 1
    for (let i = 1; i <= n; i++) {
        value = value * i
    }

    return BigInt(value).toString()
}

console.log(factorial(5));

// Cara lain
// const factorial = (n) => {
//     let value = n-1
//     let result = BigInt(n)
//     for (value; value > 1; value--) {
//         result *= BigInt(value)
//     }

//     return result.toString()
// }

// console.log(factorial(5));