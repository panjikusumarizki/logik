let str = "Artikel By QA Melalui aplikasi ini, siswa tidak akan ketinggalan informasi seputar PR/Tugas yang diberikan oleh gurunya. Siswa juga akan mendapatkan notifikasi Jadwal atau Pengumuman terbaru, sehingga semua informasi akan dengan mudah diakses oleh siswa.";
let spl = str.split(" ").join("-");
let sls = spl.replace(/[/]/gi, '-');
let spc = sls.replace(/[,.]/gi, '');
let low = spc.toLowerCase();
let sub = low.substring(0,100);
console.log(sub);