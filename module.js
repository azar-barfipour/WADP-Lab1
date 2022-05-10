exports.mySum = (...number) => {
  return number.reduce((prev, cur) => {
    return prev + cur;
  });
};
