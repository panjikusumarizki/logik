const balik = (kalimat) => {
    if (typeof(kalimat) === 'string'){
        let proses = kalimat.split('').reverse().join(' ')
        return proses
    } else {
        return 'Parameter kalimat harus berupa string !'
    }
}
  
console.log(balik('riri nanatsumori'));