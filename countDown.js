function countDown(n) {
  if (typeof n !== "number" || n < 1) {
    throw new Error("Invalid input: n must be a positive number");
  }

  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

module.exports = countDown;
