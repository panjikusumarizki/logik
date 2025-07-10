// function hitungJumlahHari(tanggalMulai, tanggalAkhir) {
//   // Hitung selisih dalam milidetik antara kedua tanggal
//   var selisih = tanggalAkhir.getTime() - tanggalMulai.getTime();
//   console.log(selisih);

//   // Hitung jumlah hari
//   var jumlahHari = selisih / (1000 * 3600 * 24);

//   return Math.floor(jumlahHari); // Mengembalikan jumlah hari tanpa desimal
// }

// // Contoh penggunaan
// var tanggalMulai = new Date('2024-03-01');
// var tanggalAkhir = new Date('2024-03-31');
// var jumlahHari = hitungJumlahHari(tanggalMulai, tanggalAkhir);
// console.log("Jumlah hari antara tanggal", tanggalMulai.toLocaleDateString(), "dan", tanggalAkhir.toLocaleDateString(), "adalah", jumlahHari, "hari.");

function hitungJumlahHari(tanggalMulai, tanggalAkhir) {
  // Satu hari dalam milidetik
  var satuHari = 24 * 60 * 60 * 1000; // Jam * Menit * Detik * Milidetik

  // Hitung selisih antara dua tanggal dalam hari
  var selisihHari = Math.round(Math.abs((tanggalMulai - tanggalAkhir) / satuHari));

  return selisihHari;
}

// Contoh penggunaan
var tanggalMulai = new Date('2024-04-01');
var tanggalAkhir = new Date('2024-05-31T23:59:59.000Z');
var jumlahHari = hitungJumlahHari(tanggalMulai, tanggalAkhir);
console.log("Jumlah hari antara tanggal", tanggalMulai.toLocaleDateString(), "dan", tanggalAkhir.toLocaleDateString(), "adalah", jumlahHari, "hari.");
