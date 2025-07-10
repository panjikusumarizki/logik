function bulatkanKeKelipatanSeratus(harga) {
  const hargaBulat = Math.floor(harga / 100) * 100;
  return hargaBulat;
}

const hargaAwal = 2378.56;
const hargaBulatSeratus = bulatkanKeKelipatanSeratus(hargaAwal);

console.log(`Harga awal: ${hargaAwal}`);
console.log(`Harga setelah dibulatkan ke kelipatan seratus: ${hargaBulatSeratus}`);
