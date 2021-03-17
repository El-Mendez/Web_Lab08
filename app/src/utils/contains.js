export default (list, item) => {
  let found = false;
  for (let i = 0; i < list.length && !found; i += 1) {
    found = list[i] === item;
  }
  return found;
};
