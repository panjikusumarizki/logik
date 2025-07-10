function birthdayCakeCandles(candles) {
    // Write your code here
    const hihgest = Math.max(...candles);
    let sumCandles = 0;
    for (const candle of candles) {
      if (candle === hihgest) {
          sumCandles += 1;
      }
    }
    console.log(sumCandles);
}

const candles = [3, 2, 1, 3];
birthdayCakeCandles(candles);