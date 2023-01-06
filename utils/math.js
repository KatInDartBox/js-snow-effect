export const rnd = {
  //0-1
  random() {
    return Math.random();
  },
  //float n1 n2
  float(n1, n2) {
    return n1 + (n2 - n1) * Math.random();
  },
  //int n1 n2
  int(n1, n2) {
    return Math.round(rnd.float(n1, n2));
  },
};
