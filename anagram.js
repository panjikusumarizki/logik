function sherlockAndAnagrams(s) {
    // Fungsi ini mencari jumlah pasangan substring yang merupakan anagram

    // Langkah 1: Dapatkan semua substring yang mungkin
    const substrings = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            // Ambil potongan string dari indeks i sampai j
            substrings.push(s.slice(i, j));
        }
    }

    // Langkah 2: Hitung pasangan anagram
    let count = 0;
    for (let i = 0; i < substrings.length; i++) {
        for (let j = i + 1; j < substrings.length; j++) {
          // Periksa apakah dua substring adalah anagram
          if (substrings[i].length === substrings[j].length) {
            if (substrings[i].split('').sort().join('') === substrings[j].split('').sort().join('')) count++;
          }
        }
      }
    return count;
}

// Contoh penggunaan
const s = 'ifailuhkqq';
const t = 'kkkk';
// const s = 'cdcd';
// Output akan menampilkan jumlah pasangan anagram yang ditemukan
console.log(sherlockAndAnagrams(s));
console.log(sherlockAndAnagrams(t));

// Untuk string 'cdcd', hasil yang diharapkan adalah 5
// Pasangan anagram yang ditemukan:
// 'c' & 'c'
// 'd' & 'd'
// 'cd' & 'cd'
// 'dc' & 'cd'
// 'cdc' & 'cdc'
