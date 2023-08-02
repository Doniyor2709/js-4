const a = 1;
const b = 10;

let count = 0;
for (let i = b; i > a; i--) {
  if (i !== a && i !== b) {
    count++;
    console.log(i);
  }
}
console.log(count);