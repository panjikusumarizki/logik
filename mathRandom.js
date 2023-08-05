const getNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

let result
let dataNumber = []
for (let i = 0; i < 4; i++) {
  dataNumber.push(Math.floor(Math.random() * (30000 - 25000) + 25000))
}
dataNumber.sort((a,b) => {return a - b})
console.log(dataNumber);