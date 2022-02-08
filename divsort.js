const divideAndSort = (angka) => {
    if (typeof(angka) === 'number'){
        let ubah = angka.toString().split('0')
        let proses = ubah.map(item => item.split('').sort().join(''))
        let hasil = parseInt(proses.join(''))
        
        return hasil
    } else {
        return 'Parameter harus number !'
    }
}

console.log(divideAndSort(59565));