const cekGanjilGenap = (angka) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof(angka) === 'number'){
                if (angka % 2 === 0){
                    resolve('Genap')
                } else if (angka % 2 !== 0){
                    resolve('Ganjil')
                }
            } else {
                reject(new Error('Input bukan angka !'))
            }
        }, 2000)
    })
}

cekGanjilGenap(1).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error.message)
})