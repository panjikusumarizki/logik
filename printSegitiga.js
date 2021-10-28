const printSegitiga = 5;

if (typeof(printSegitiga) !== 'number'){
    console.log('Data harus number !');
} else {
    for(let i = printSegitiga; i >= 1; i--){
        let tambah = '';
        for (let j = 1; j <= i; j++){
            tambah += j + ' ';   
        }
        console.log(tambah);
    }
}