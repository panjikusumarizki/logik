function plusMinus(arr) {
    // Write your code here
    let positiveNum = 0;
    let negativeNum = 0;
    let zeroNum = 0;
    const n = arr.length;
    
    let sumPositiveNum = 0;
    let sumNegativeNum = 0;
    let sumZeroNum = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] > 0) {
          positiveNum += 1;
          sumPositiveNum = positiveNum / n;
      };
      if (arr[i] < 0) {
          negativeNum += 1;
          sumNegativeNum = negativeNum / n;
      };
      if (arr[i] === 0) {
          zeroNum += 1;
          sumZeroNum = zeroNum / n;
      };
    }
    
    // console.log(positiveNum);
    // console.log(negativeNum);
    // console.log(zeroNum);
    
    const result = [
        sumPositiveNum.toFixed(6),
        sumNegativeNum.toFixed(6),
        sumZeroNum.toFixed(6)
    ]
    return result;
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))