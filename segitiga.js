// const segitigaSatu = (angkaSatu) => {
//     for (let i = 1; i <= angkaSatu; i++) {
//         let bintangSatu = ''
//         for (let j = 1; j <= i; j++) {
//             bintangSatu += '*'
//         }
//         console.log(bintangSatu)
//     }
// }

// segitigaSatu(6)
// console.log()

// const segitigaDua = (angkaDua) => {
//     for (let i = 1; i <= angkaDua; i++) {
//         let bintangDua = ''
//         for (let j = i; j < angkaDua; j++) {
//             bintangDua += ' '
//         }
//         for (let k = 1; k <= i; k++) {
//             bintangDua += '*'
//         }
//         console.log(bintangDua)
//     }
// }

// segitigaDua(6)
// console.log()

// const segitigaTiga = (angkaTiga) => {
//     for (let i = 1; i <= angkaTiga; i++) {
//         let bintangTiga = ''
//         for (let j = angkaTiga; j >= i; j--) {
//             bintangTiga += '*'
//         }
//         console.log(bintangTiga)
//     }
// }

// segitigaTiga(6)
// console.log()

// const segitigaEmpat = (angkaEmpat) => {
//     for (let i = 1; i <= angkaEmpat; i++) {
//         let bintangEmpat = ''
//         for (let j = 1; j < i; j++) {
//             bintangEmpat += ' '
//         }
//         for (let k = i; k <= angkaEmpat; k++) {
//             bintangEmpat += '*'
//         }
//         console.log(bintangEmpat)
//     }
// }

// segitigaEmpat(6)
// console.log()

// const segitigaLima = (angkaLima) => {
//     for (let i = 1; i <= angkaLima; i++) {
//         let bintangLima = ''
//         for (let j = 1; j < i; j++) {
//             bintangLima += ' '
//         }
//         for (let k = i; k <= angkaLima; k++) {
//             bintangLima += '* '
//         }
//         console.log(bintangLima)
//     }
// }

// segitigaLima(5)
// console.log()

const segitigaEnam = (angkaEnam) => {
    for (let i = 1; i <= angkaEnam; i++) {
        let bintangEnam = ''
        for (let j = i; j < angkaEnam; j++) {
            bintangEnam += ' '
        }
        for (let k = 1; k <= i; k++) {
            bintangEnam += '* '
        }
        console.log(bintangEnam)
    }
}

segitigaEnam(5)