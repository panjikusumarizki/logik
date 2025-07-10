function hitungJumlahHariKerja(tanggalMulai, tanggalAkhir) {
  var jumlahHariKerja = 0;
  var satuHari = 24 * 60 * 60 * 1000; // Satu hari dalam milidetik

  // Loop melalui setiap hari dalam rentang tanggal
  for (var tanggal = new Date(tanggalMulai); tanggal <= tanggalAkhir; tanggal.setDate(tanggal.getDate() + 1)) {
      // Periksa apakah hari ini bukan Sabtu (6) dan bukan Minggu (0)
      if (tanggal.getDay() !== 6 && tanggal.getDay() !== 0) {
          jumlahHariKerja++;
      }
  }

  return jumlahHariKerja;
}

// Contoh penggunaan
var tanggalMulai = new Date('2024-03-01');
var tanggalAkhir = new Date('2024-03-31T16:59:59.000Z');
var jumlahHariKerja = hitungJumlahHariKerja(tanggalMulai, tanggalAkhir);
console.log("Jumlah hari kerja antara tanggal", tanggalMulai.toLocaleDateString(), "dan", tanggalAkhir.toLocaleDateString(), "adalah", jumlahHariKerja, "hari.");
