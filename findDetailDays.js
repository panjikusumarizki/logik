function detailHariPerMinggu(tanggalMulai, tanggalAkhir) {
  var hasil = {};
  
  // Loop melalui setiap hari dalam rentang tanggal
  for (var tanggal = new Date(tanggalMulai); tanggal <= tanggalAkhir; tanggal.setDate(tanggal.getDate() + 1)) {
      var minggu = "Minggu " + getWeekNumber(tanggal);
      if (!hasil[minggu]) {
          hasil[minggu] = [];
      }
      hasil[minggu].push(new Date(tanggal));
  }
  
  return hasil;
}

// Fungsi untuk mendapatkan nomor minggu dalam tahun
function getWeekNumber(date) {
  var target = new Date(date.valueOf());
  var dayNumber = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNumber + 3);
  var firstThursday = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
      target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 adalah jumlah milidetik dalam satu minggu
}

// Contoh penggunaan
var tanggalMulai = new Date('2024-03-01');
var tanggalAkhir = new Date('2024-04-30');
var detailHari = detailHariPerMinggu(tanggalMulai, tanggalAkhir);
// console.log(detailHari);

console.log("Detail hari per minggu:");
for (var minggu in detailHari) {
  console.log(minggu + ":");
  detailHari[minggu].forEach(function (hari) {
      console.log(hari.toLocaleDateString());
  });
  console.log("-----------------------");
}
