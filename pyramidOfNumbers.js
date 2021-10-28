const pyramid = (n) => {
    let result = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i+j >= n-1) {
                result += (i+1) + " "
            } else {
                result += " "
            }
        }
        result += "\n"
    }
    return result
}

console.log(pyramid(5));