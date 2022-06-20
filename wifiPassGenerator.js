let generatePassword = '';
let password = '';
const characters =
  `abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?`;

for (let i = 0; i < 10; i++) {
  generatePassword += characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
}
password = generatePassword;
console.log(password);