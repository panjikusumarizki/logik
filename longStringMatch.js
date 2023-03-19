const inputan = ['hendiro', 'abuhendi']

const match = (str) => {
  let strA = str[0].split('');
  let strB = str[1].split('');

  let strC = [];
  for (let i of strA) {
    for (let j of strB) {
      if (i === j) {
        strC.push(i)
      }
    }
  }
  const strD = strC.join('')
  return strD;
}

console.log(match(inputan));