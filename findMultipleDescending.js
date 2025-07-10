function findMultiplesDescending(number, limit) {
  const multiples = [];
  
  for (let i = limit; i >= 1; i--) {
      if (i % number === 0) {
          multiples.push(i);
      }
  }
  
  return multiples;
}

const harga = 35; // Ganti dengan harga yang Anda inginkan
const batas = 100; // Ganti dengan batas yang Anda inginkan

const kelipatan = findMultiplesDescending(harga, batas);
console.log(`Kelipatan dari ${harga} dalam rentang 1 sampai ${batas} secara descending:`, kelipatan);
