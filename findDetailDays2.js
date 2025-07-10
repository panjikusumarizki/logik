function detailHariPerMinggu(tanggalMulai, tanggalAkhir) {
  let hasil = {};

  // Loop melalui setiap bulan dalam rentang tanggal
  while (tanggalMulai <= tanggalAkhir) {
    // Tentukan akhir bulan atau tanggal 28, mana yang lebih awal
    let akhirBulan = new Date(tanggalMulai.getFullYear(), tanggalMulai.getMonth(), 29);
    if (akhirBulan > tanggalAkhir) {
        akhirBulan = new Date(tanggalAkhir);

        // Loop melalui setiap hari dalam bulan yang tidak melampaui tanggal 28
      for (tanggal = new Date(tanggalMulai); tanggal <= akhirBulan; tanggal.setDate(tanggal.getDate() + 1)) {
        let bulan = tanggal.getFullYear() + "-" + ("0" + (tanggal.getMonth() + 1)).slice(-2);
        let minggu = "Minggu " + getWeekNumber(tanggal);
        if (!hasil[bulan]) {
            hasil[bulan] = {};
        }

        if (!hasil[bulan][minggu]) {
            hasil[bulan][minggu] = [];
        }
        hasil[bulan][minggu].push(new Date(tanggal));
      }
    } else {
      for (tanggal = new Date(tanggalMulai); tanggal < akhirBulan; tanggal.setDate(tanggal.getDate() + 1)) {
        let bulan = tanggal.getFullYear() + "-" + ("0" + (tanggal.getMonth() + 1)).slice(-2);
        let minggu = "Minggu " + getWeekNumber(tanggal);
        // if (!hasil[bulan]) {
        //   hasil[bulan] = {};
        // }
        // if (!hasil[bulan][minggu]) {
        //     hasil[bulan][minggu] = [];
        // }
        if (!hasil[minggu]) {
          hasil[minggu] = [];
        }
        // hasil[bulan][minggu].push(new Date(tanggal));
        hasil[minggu].push(new Date(tanggal));
      }
    }

    // Lanjutkan ke bulan berikutnya
    tanggalMulai = new Date(tanggalMulai.getFullYear(), tanggalMulai.getMonth() + 1, 1);
  }

  return hasil;
}

// Fungsi untuk mendapatkan nomor minggu dalam tahun
function getWeekNumber(date) {
  let target = new Date(date.valueOf());
  let dayNumber = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNumber + 3);
  let first = target.valueOf();
  target.setMonth(0, 1);
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
  }
  return 1 + Math.ceil((first - target) / 604800000); // 604800000 adalah jumlah milidetik dalam satu minggu
}

// Contoh penggunaan
let tanggalMulai = new Date('2024-03-01');
let tanggalAkhir = new Date('2024-04-30');
let detailHari = detailHariPerMinggu(tanggalMulai, tanggalAkhir);
console.log(detailHari);

let mingguKe = 1;
console.log("Detail hari per minggu dan bulan:");
// for (let bulan in detailHari) {
//   for (let minggu in detailHari[bulan]) {
//       console.log(`minggu: ${mingguKe++}`);
//       detailHari[bulan][minggu].forEach(function (hari) {
//           console.log(hari);
//       });
//   }
// }

let data = [];
// for (let minggu in detailHari) {
//   const result = {
//     minggu: mingguKe++,
//     tanggal_awal: detailHari[minggu][0].toLocaleDateString(),
//     tanggalAkhir: detailHari[minggu][detailHari[minggu].length - 1].toLocaleDateString()
    // tanggal_awal: detailHari[bulan][minggu][0],
    // tanggalAkhir: detailHari[bulan][minggu][detailHari[bulan][minggu].length - 1]
  // }

//   data.push(result);
// }

// console.log(data);