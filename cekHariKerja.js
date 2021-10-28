const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('sabtu').then((response) => {
    console.log(`Hari ${response} hari kerja`)
})
.catch((error) => {
    console.log(error.message)
})
/* then catch untuk menangani atau menghandle output dari promise diatas.
jika fulfilled atau terpenuhi maka outputnya yang berada di then,
jika rejected atau tidak terpenuhi maka outputnya yang berada di catch */

//try catch
// const kerja = async (hari) => {
//     try {
//         await cekHariKerja(hari)
//         console.log('Hari ini hari kerja')
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// kerja('minggu')
/* try catch untuk menangani proses asynchronous dari promise diatas.*/