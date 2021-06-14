const randInt = (from, to) => Math.floor(Math.random() * (to - from) + from);

const findGCD = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
};

const isPrime = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let d = 2; d * d <= n; d += 1) if (n % d === 0) return false;
  return true;
};

export { randInt, findGCD, isPrime };
