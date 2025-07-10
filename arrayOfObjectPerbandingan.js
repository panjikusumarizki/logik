function removeDuplicates(arr) {
  const uniqueObjects = [];
  const uniqueStrings = new Set();
  
  arr.forEach(obj => {
      const stringified = JSON.stringify(obj);
      if (!uniqueStrings.has(stringified)) {
          uniqueStrings.add(stringified);
          uniqueObjects.push(obj);
      }
  });
  
  return uniqueObjects;
}

let arrayOfObjects = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "John", age: 25 }, // Duplicate based on name and age
  { name: "Doe", age: 35 }
];

let result = removeDuplicates(arrayOfObjects);
console.log(result);
