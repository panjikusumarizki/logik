const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (typeof(nilaiAwal) !== 'number'){
        return 'tipe data nilaiAwal harus angka !';
    } else if (typeof(nilaiAkhir) !== 'number'){
        return 'tipe data nilaiAkhir harus angka !';
    } else if (typeof(dataArray) !== 'object'){
        return 'Tipe data dataArray harus array angka !';
    }else {
        if (nilaiAwal < nilaiAkhir){
            if (dataArray.length < 5){
                return 'Jumlah data dalam dataArray harus lebih dari 5 !';
            } else {
                let filterAngka = dataArray.filter(angka => angka >= nilaiAwal && angka <= nilaiAkhir);
                if (filterAngka.length != 0){
                    let sorting = filterAngka.sort((a,b) => a-b);
                    return sorting;
                } else {
                    return 'Angka dalam dataArray tidak ada !';
                }
            }
        } else {
             return 'Nilai akhir harus lebih besar dari nilai awal !';
        }
    }
};

console.log(seleksiNilai(21, 40, [3,5,10,9,14,25,18]));
