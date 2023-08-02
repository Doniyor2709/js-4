const n = 10;
const a = 2.5;

let sum = 1;
for (let i = 1; i <= n; i++) {
  sum += a ** i;
}
console.log(sum);