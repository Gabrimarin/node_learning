const soma = (a, b) => a + b;

const ppower = (num, exp) => {
  if (exp === 1) return num;
  return ppower(num, exp - 1) * num;
};

const npower = (num, exp) => {
  if (exp === -1) return 1 / num;
  return npower(num, exp + 1) / num;
};

const power = (num, exp) => {
  if (exp === 0 && num === 0) return undefined;
  if (exp === 0) return 1;
  if (exp < 0) return npower(num, exp);
  return ppower(num, exp);
};

module.exports = { soma, ppower, npower, power };
