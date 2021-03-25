export default (items) => {
  let areTheSame = true;
  for (let i = 1; i < items.length && areTheSame; i += 1) {
    areTheSame = items[i] === items[i - 1];
  }
  return areTheSame;
};
