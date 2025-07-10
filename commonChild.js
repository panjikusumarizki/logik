function commonChild(s1, s2) {
    // Fungsi untuk mencari panjang substring terpanjang yang muncul di kedua string

    // m dan n adalah panjang dari string s1 dan s2
    const m = s1.length;
    const n = s2.length;

    // Membuat array 2D untuk menyimpan hasil perhitungan dinamis
    // dp[i][j] akan menyimpan panjang common child terpanjang
    // untuk s1[0...i-1] dan s2[0...j-1]
    // Membuat array 2D berukuran (m+1) x (n+1) yang diisi dengan nilai 0
    // Array ini akan digunakan untuk menyimpan panjang common child pada setiap posisi
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Iterasi untuk mengisi tabel dp
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Jika karakter sama, tambahkan 1 ke hasil sebelumnya
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            // Jika berbeda, ambil nilai maksimum dari kemungkinan sebelumnya
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Nilai di dp[m][n] adalah panjang common child terpanjang
    return dp[m][n];
}

// Contoh penggunaan
const s1 = "ABCD";
const s2 = "ABDC";
console.log(commonChild(s1, s2)); // Output: 2 (karakter 'A' dan 'Y')
