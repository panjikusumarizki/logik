function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    const minSum = arr.slice(0,4).reduce((a, b) => a + b, 0);
    const maxSum = arr.slice(1,5).reduce((a, b) => a + b, 0)
    console.log(minSum, maxSum);
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);