function steadyGene(gene) {
    // Menghitung panjang gen
    const n = gene.length;

    // Target jumlah yang seimbang untuk setiap karakter (A,C,G,T)
    const targetCount = n / 4;

    // Menghitung frekuensi awal setiap karakter
    const count = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };
    for (let i = 0; i < n; i++) {
        count[gene[i]]++;
    }

    // Jika sudah seimbang, tidak perlu perubahan
    if (count['A'] === targetCount && count['C'] === targetCount &&
        count['G'] === targetCount && count['T'] === targetCount) {
        return 0;
    }

    // Inisialisasi pointer dan variabel untuk sliding window
    let left = 0;
    let right = 0;
    let minLength = n; // Panjang minimum substring yang perlu diubah
    let currentCount = { ...count };

    // Menggunakan teknik sliding window
    while (right < n) {
        // Geser right pointer sampai mencapai keseimbangan
        while (right < n && !isBalanced(currentCount, targetCount)) {
            currentCount[gene[right]]--;
            right++;
        }

        // Geser left pointer untuk mengoptimalkan panjang substring
        while (left < right && isBalanced(currentCount, targetCount)) {
            minLength = Math.min(minLength, right - left);
            currentCount[gene[left]]++;
            left++;
        }
    }

    return minLength;
}

// Fungsi untuk mengecek apakah frekuensi karakter sudah seimbang
function isBalanced(count, target) {
    return count['A'] <= target && count['C'] <= target &&
           count['G'] <= target && count['T'] <= target;
}

// Contoh penggunaan
console.log(steadyGene("GAAATAAA"));
