function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Mencari elemen minimum dari sisa daftar
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Menukar elemen minimum dengan elemen di posisi i
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

const numbers = [64, 25, 12, 22, 11];
selectionSort(numbers);

console.log("Sorted array:", numbers);
