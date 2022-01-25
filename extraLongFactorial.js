const extraLongFactorial = n => {
    let number = n-1
    let result = BigInt(n)
    for (number; number > 1; number--) {
        result *= BigInt(number)
    }

    return result.toString()
}

console.log(extraLongFactorial(25));