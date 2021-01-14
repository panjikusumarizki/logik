const sumArray = (num) => {
    let b = 0

    num.forEach(e => {
        b += e
    })
    console.log(b)
}

sumArray([1,2,3,4,10,11])