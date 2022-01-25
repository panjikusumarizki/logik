const a = 354.96586
const op = (Math.round(a * 100) / 100)
// const pars = a.replace(/\B(?=(\d{4})+(?!\d))/g, '.')
console.log(op);

// function circumference(r) {
//     return parseFloat(r) * 10;
//   }
  
//   console.log(circumference(4.567));
  // expected output: 28.695307297889173
  
//   console.log(circumference('4.567abcdefgh'));
  // expected output: 28.695307297889173
  
//   console.log(circumference('abcdefgh'));
  // expected output: NaN
