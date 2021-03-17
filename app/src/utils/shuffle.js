// Recuperado de https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
export default (list) => {
  let j;
  let x;
  let i;
  for (i = list.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    x = list[i];
    list[i] = list[j];
    list[j] = x;
  }
  return list;
};
