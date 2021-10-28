const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ['January','February','March','April','May','June','July',
                    'Agustus','September','October','November','December']
        if(!error){
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 1000)
}

getMonth((error, hasil) => {
    if (error){
        console.log(error.message)
    } else {
        hasil.map(item => console.log(item))
    }
})