function smallestString(substrings) {
    let newSubstrings = []
    for (let i = 0; i < substrings.length; i++) {
        for (let j = i + 1; j < substrings.length; j++) {
            if (substrings[i] + substrings[j] > (substrings[j] + substrings[i])) {
                let s = substrings[i]
                substrings[i] = substrings[j]
                substrings[j] = s
            }
        }
        newSubstrings.push(substrings[i])
    }
    
    let result = ''
    for (let k = 0; k < newSubstrings.length; k++) result += newSubstrings[k]
    
    return result
}

let a = ["a", "bc", "ad"]
console.log(smallestString(a))