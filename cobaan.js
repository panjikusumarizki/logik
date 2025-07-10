function calculateEligiblePercentage(hargaTertinggi, hargaTerendah, hargaAsli) {
  const eligiblePercentages = [];
  
  for (let i = 1; i <= 100; i++) {
    const percentageValue = Math.floor(((hargaAsli * i) / 100) / 100) * 100;
    
    if (percentageValue >= hargaTerendah && percentageValue <= hargaTertinggi && Number.isInteger(percentageValue)) {
      eligiblePercentages.push(`${i}% = ${percentageValue}`);
    }
  }
  
  return eligiblePercentages;
}

const hargaTertinggi = 46550;
const hargaTerendah = 9005;
const hargaAsli = 49000;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const eligiblePercentages = calculateEligiblePercentage(hargaTertinggi, hargaTerendah, hargaAsli);

console.log(eligiblePercentages[getRandomInt(0, eligiblePercentages.length)])
console.log(eligiblePercentages[getRandomInt(0, eligiblePercentages.length)])
console.log(eligiblePercentages[getRandomInt(0, eligiblePercentages.length)])
console.log(eligiblePercentages[getRandomInt(0, eligiblePercentages.length)])
console.log(eligiblePercentages[getRandomInt(0, eligiblePercentages.length)])
