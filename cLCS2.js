// cLCS / LCS for Algobash
// Input:
//   2 baris  -> A, B -> LCS standar
//   3 baris  -> A, B, P -> constrained LCS (harus mengandung P sebagai subsequence)
// Output:
//   baris 1: panjang
//   baris 2: salah satu subsequence

const fs = require('fs');

function lcsStandard(a, b) {
  const n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Rekonstruksi salah satu subsequence
  let i = n, j = m;
  const out = [];
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      out.push(a[i - 1]);
      i--; j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  out.reverse();
  return { length: dp[n][m], seq: out.join('') };
}

function buildKMP(p) {
  const k = p.length;
  const lps = Array(k).fill(0);
  for (let i = 1, len = 0; i < k;) {
    if (p[i] === p[len]) {
      lps[i++] = ++len;
    } else if (len) {
      len = lps[len - 1];
    } else {
      lps[i++] = 0;
    }
  }
  const go = (s, ch) => {
    while (s > 0 && p[s] !== ch) s = lps[s - 1];
    if (p[s] === ch) s++;
    return s;
  };
  return { go };
}

function clcs(a, b, p) {
  const n = a.length, m = b.length, k = p.length;
  const { go } = buildKMP(p);
  const NEG = -1e9;

  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Array(k + 1).fill(NEG))
  );
  const parent = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => Array(k + 1).fill(null))
  );

  dp[0][0][0] = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      for (let s = 0; s <= k; s++) {
        const cur = dp[i][j][s];
        if (cur === NEG) continue;

        if (i < n && dp[i + 1][j][s] < cur) {
          dp[i + 1][j][s] = cur;
          parent[i + 1][j][s] = [i, j, s, 'skipA'];
        }
        if (j < m && dp[i][j + 1][s] < cur) {
          dp[i][j + 1][s] = cur;
          parent[i][j + 1][s] = [i, j, s, 'skipB'];
        }

        if (i < n && j < m && a[i] === b[j]) {
          const ns = s < k ? go(s, a[i]) : k;
          const cand = cur + 1;
          if (dp[i + 1][j + 1][ns] < cand) {
            dp[i + 1][j + 1][ns] = cand;
            parent[i + 1][j + 1][ns] = [i, j, s, 'take', a[i]];
          }
        }
      }
    }
  }

  const bestLen = dp[n][m][k];
  if (bestLen < 0) return { length: 0, seq: '' };

  // Rekonstruksi subsequence
  const out = [];
  let i = n, j = m, s = k;
  while (i > 0 || j > 0) {
    const par = parent[i][j][s];
    if (!par) break;
    const [pi, pj, ps, act, ch] = par;
    if (act === 'take') out.push(ch);
    i = pi; j = pj; s = ps;
  }
  out.reverse();
  return { length: bestLen, seq: out.join('') };
}

(function main() {
  const raw = fs.readFileSync(0, 'utf8').trim().split(/\r?\n/);
  if (raw.length < 2) {
    console.log(0);
    console.log('');
    return;
  }
  const a = raw[0].trim();
  const b = raw[1].trim();

  if (raw.length >= 3) {
    const p = raw[2].trim();
    const ans = clcs(a, b, p);
    console.log(ans.length);
    console.log(ans.seq);
  } else {
    const ans = lcsStandard(a, b);
    console.log(ans.length);
    console.log(ans.seq);
  }
})();
