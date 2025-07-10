function hitungJumlahMinggu(tanggalMulai, tanggalAkhir) {
  // Hitung selisih dalam milidetik antara kedua tanggal
  var selisih = tanggalAkhir.getTime() - tanggalMulai.getTime();
  
  // Hitung jumlah minggu
  var jumlahMinggu = selisih / (1000 * 3600 * 24 * 7);
  
  return Math.floor(jumlahMinggu); // Mengembalikan jumlah minggu tanpa desimal
}

// Contoh penggunaan
var tanggalMulai = new Date('2024-03-01');
console.log(tanggalMulai);
var tanggalAkhir = new Date('2024-04-30');
var jumlahMinggu = hitungJumlahMinggu(tanggalMulai, tanggalAkhir);
console.log("Jumlah minggu antara tanggal", tanggalMulai.toLocaleDateString(), "dan", tanggalAkhir.toLocaleDateString(), "adalah", jumlahMinggu, "minggu.");
