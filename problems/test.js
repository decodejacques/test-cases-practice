function m(x) {
  return x * 2;
}

function k(f, i, j) {
  return f(i + 2) + j * 2;
}

function f(g, h) {
  return g(h, 1, 4);
}

console.log(f(k, m));