const divideAndSort = (angka) => {
    if (typeof(angka) === 'number'){
        let ubah = angka.toString().split('0')
        let proses = ubah.map(item => item.split('').sort().join(''))
        let hasil = parseInt(proses.join(''))
        console.log(hasil)
    } else {
        console.log('Parameter angka harus number !')
    }
}

divideAndSort('59565')