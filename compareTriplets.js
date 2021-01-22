const compareTriplets = (a,b) => {
    let c = 0
    let d = 0

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            c += 1
        } else if (a[i] < b[i]) {
            d += 1
        }
    }

    return [c,d]
}

console.log(compareTriplets([17,28,30], [99,16,8]))