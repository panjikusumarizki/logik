function autocomplete(query, strings) {
  const matches = []
  for (let string of strings) {
    if (string.includes(query)) matches.push(string)
  }
  return matches
}

const query = ['test', 'cake', 'joke', 'best', 'hello', 'suffix', 'etc']
const str = 't'
console.log(autocomplete(str, query));
