function solution(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
      return "";
  } else if (s1.slice(-1) === s2.slice(-1)) {
      return solution(s1.slice(0, -1), s2.slice(0, -1)) + s1.slice(-1);
  } else {
      const sub1 = solution(s1.slice(0, -1), s2);
      const sub2 = solution(s1, s2.slice(0, -1));
      return sub1.length > sub2.length ? sub1 : sub2;
  }
} 

const result = solution('hendiarso','prahendi')
console.log(result)