function test(str1, str2) {
  const text = `${str1} ${str2}`;
  const result = text.toUpperCase();
  return result;
}

console.log(test('fried', 'rice'));