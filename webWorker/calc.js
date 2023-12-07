export default function () {
  let total = 0;
  for (let i = 0; i < 9e9; i++) {
    total += i;
  }
  return total;
}
