const gcd = (m, n) => {
    let min_ = m
    if (m > n) {
        min_ = n
    }
    for (let i = min_; i >= 1; i--) {
        if (m % i == 0 & n % i == 0) {
            return i
        }
    }
}

console.log(gcd(81,93));