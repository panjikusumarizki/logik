// function generateRandomDiscountPrice(hargaA, hargaB, hargaAsli) {
//   if (hargaB <= hargaA) {
//     return "Tidak dapat menghasilkan harga diskon acak karena hargaB kurang dari atau sama dengan hargaA.";
//   }

//   var hargaDiskonAcak = Math.floor(Math.random() * (hargaB - hargaA) + hargaA);
//   var hargaDisk = Math.floor(hargaDiskonAcak / 100) * 100;
//   var persentaseDiskon = (hargaDiskonAcak / hargaAsli) * 100;
//   var persenan = parseInt((hargaDisk / hargaAsli) * 100);

//   return {
//     hargaDiskonAcak,
//     hargaDisk,
//     persentaseDiskon,
//     persenan
//   };
// }

// var hargaAsli = 49000;
// var hargaA = 9005;
// var hargaB = 46990;

// var hasilDiskon = generateRandomDiscountPrice(hargaA, hargaB, hargaAsli);
// console.log("Harga diskon acak:", hasilDiskon.hargaDiskonAcak);
// console.log("Harga diskon acak 2:", hasilDiskon.hargaDisk);
// console.log("Persentase diskon:", hasilDiskon.persentaseDiskon, "%");
// console.log("Persentase diskon 2:", hasilDiskon.persenan, "%");


function generateRoundedDiscountPriceAndPercentage(hargaA, hargaB, hargaAsli) {
  if (hargaB <= hargaA) {
    return "Tidak dapat menghasilkan harga diskon acak karena hargaB kurang dari atau sama dengan hargaA.";
  }

  var rangeLength = Math.floor((hargaB - hargaA) / 100) + 1;
  var randomRangeIndex = Math.floor(Math.random() * rangeLength);
  var hargaDiskonAcak = hargaA + randomRangeIndex * 100;
  
  var persentaseDiskon = Math.round(((hargaAsli - hargaDiskonAcak) / hargaAsli) * 100);

  return {
    hargaDiskon: hargaDiskonAcak,
    persentaseDiskon: persentaseDiskon
  };
}

var hargaAsli = 49000;
var hargaA = 9005;
var hargaB = 46500;

var hasilDiskon = generateRoundedDiscountPriceAndPercentage(hargaA, hargaB, hargaAsli);
console.log("Harga diskon acak:", hasilDiskon.hargaDiskon);
console.log("Persentase diskon:", hasilDiskon.persentaseDiskon, "%");
