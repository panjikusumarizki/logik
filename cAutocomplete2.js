class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
    this.word = null; // simpan kata asli saat node adalah akhir
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let c of word.toLowerCase()) {
      if (!node.children.has(c)) {
        node.children.set(c, new TrieNode());
      }
      node = node.children.get(c);
    }
    node.isEnd = true;
    node.word = word;
  }

  traversePrefix(prefix) {
    let node = this.root;
    for (let c of prefix.toLowerCase()) {
      if (!node.children.has(c)) return null;
      node = node.children.get(c);
    }
    return node;
  }

  collect(node, results) {
    if (!node) return;
    if (node.isEnd) results.push(node.word);
    // traverse children in lexicographic order
    const keys = Array.from(node.children.keys()).sort();
    for (let k of keys) {
      this.collect(node.children.get(k), results);
    }
  }

  autocomplete(prefix) {
    const node = this.traversePrefix(prefix);
    if (!node) return [];
    const results = [];
    this.collect(node, results);
    return results;
  }
}

// ---------------------
// Input/Output handling
// ---------------------
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let idx = 0;
const n = parseInt(input[idx++]);
const words = [];
for (let i = 0; i < n; i++) {
  words.push(input[idx++].trim());
}
const q = parseInt(input[idx++]);

const trie = new Trie();
for (let w of words) trie.insert(w);

for (let i = 0; i < q; i++) {
  const prefix = input[idx++].trim();
  const matches = trie.autocomplete(prefix);
  if (matches.length === 0) {
    console.log("No match.");
  } else {
    for (let m of matches) console.log(m);
  }
}
