// const crypto = require('crypto');

// // Kunci enkripsi (harus memiliki panjang 128, 192, atau 256 bit)
// const secretKey = crypto.randomBytes(32); // 256-bit key

// // Data yang akan dienkripsi
// const data = 'Ini adalah data yang akan dienkripsi!';

// // Inisialisasi algoritma AES-256-CBC
// const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, crypto.randomBytes(16));

// // Enkripsi data
// let encryptedData = cipher.update(data, 'utf-8', 'hex');
// encryptedData += cipher.final('hex');

// console.log('Data terenkripsi:', encryptedData);

const crypto = require('crypto');

// Kunci enkripsi (harus memiliki panjang 128, 192, atau 256 bit)
const secretKey = crypto.randomBytes(32); // 256-bit key

// Data yang akan dienkripsi
const payload = {
  username: 'user123',
  email: 'user@example.com'
};

// Mengubah data payload menjadi JSON string
const payloadString = JSON.stringify(payload);

// Inisialisasi algoritma AES-256-CBC
const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, crypto.randomBytes(16));

// Enkripsi data payload
let encryptedPayload = cipher.update(payloadString, 'utf-8', 'hex');
encryptedPayload += cipher.final('hex');

console.log('Data payload terenkripsi:', encryptedPayload);

// Dekripsi data payload
const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, cipher.getIV());
let decryptedPayloadString = decipher.update(encryptedPayload, 'hex', 'utf-8');
decryptedPayloadString += decipher.final('utf-8');

// Ubah kembali JSON string ke objek
const decryptedPayload = JSON.parse(decryptedPayloadString);

console.log('Data payload terdekripsi:', decryptedPayload);
