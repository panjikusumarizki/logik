function mingguKe(tanggal) {
  // Ubah string tanggal menjadi objek Date
  var tanggalObj = new Date(tanggal);
  
  // Ambil tanggal pertama bulan dari tanggalObj
  var tanggalPertamaBulan = new Date(tanggalObj.getFullYear(), tanggalObj.getMonth(), 1);
  
  // Hitung jumlah hari sejak tanggal pertama bulan
  var selisihHari = Math.floor((tanggalObj - tanggalPertamaBulan) / (1000 * 60 * 60 * 24));
  
  // Hitung minggu ke berapa
  var mingguKe = Math.ceil((selisihHari + tanggalPertamaBulan.getDay() + 1) / 7);
  
  return mingguKe;
}

// Contoh penggunaan
var tanggalInput = new Date();
console.log("Minggu ke:", mingguKe(tanggalInput));
