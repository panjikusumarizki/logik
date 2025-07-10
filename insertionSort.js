function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let j = i - 1;

    // Geser elemen yang lebih besar dari current ke kanan
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Tempatkan current pada posisi yang sesuai
    arr[j + 1] = current;
  }
}

const numbers = [12, 11, 13, 5, 6];
insertionSort(numbers);

console.log("Sorted array:", numbers);
