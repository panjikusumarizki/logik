const tambah = (nama) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let buah = ['anggur','pisang','jeruk','mangga']
            if (typeof(nama) === 'string'){
                buah.push(nama)
                resolve(buah)
            } else {
                reject(new Error('Input harus string !'))
            }
        }, 2000)
    })
}

tambah('melon').then((response) => {
    console.log(response)
})
.catch((error) => {
    console.log(error.message)
})