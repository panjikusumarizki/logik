const nama = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'];

const searchName = (a, b, c) => {
    let filterNama = nama.filter(nama => nama.toLowerCase().includes(a.toLowerCase()));
    b = filterNama.length;
    return c(filterNama);
}

const callback = (key) => {
    return key;
}

console.log(searchName('Ca', 3, callback));