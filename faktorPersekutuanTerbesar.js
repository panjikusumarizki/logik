const gcd = (m, n) => {
    let min = m
    if (m > n) {
        min = n
    }
    for (let i = min; i >= 1; i--) {
        if (m % i == 0 & n % i == 0) {
            return i
        }
    }
}

console.log(gcd(81,93));