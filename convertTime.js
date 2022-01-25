const convertTime = str => {
    // tidak ada parameter
    // tipe data parameter salah
    // falsy vs truthy
    // str 0 undefined null
    if (!str || typeof str !== 'string' || str.length !== 10) {
        return 'Format salah!'
    }

    // membagi jam menit detik am/pm
    const amOrPm = str.slice(8, 10)
    let hour = str.slice(0, 2)
    const minute = str.slice(3, 5)
    const second = str.slice(6, 8)

    // format kurang sesuai
    if (!amOrPm || hour > 12 || minute > 60 || second > 60) {
        return 'Format salah!'
    }

    if (amOrPm === 'AM') {
        if (hour === '12') {
            hour = '00'
        }
    } else {
        if (hour !== '12') {
            hour = +hour + 12
        }
    }

    return `${hour}:${minute}:${second}`
}

console.log(convertTime('12:20:10AM'))