let str = "7 Tips Belajar Bahasa Inggris untuk Pemula";
let spl = str.split(" ").join("-");
let sls = spl.replace(/[/:]/gi, '-');
let spc = sls.replace(/[,.()|!?]/gi, '');
let low = spc.toLowerCase();
let sub = low.substring(0,100);
console.log(sub);
console.log(sub.length);