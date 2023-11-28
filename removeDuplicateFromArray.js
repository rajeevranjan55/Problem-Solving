const number2 = [1, 3, 5, 7, 8, 9, 8, 9, 0, 6, 4, 3, 3, 4, 5, 6, 6, 6];
const removeDuplicate = () => {
  const arr = [];

  for (let i = 0; i < number2.length; i++) {
    isDuplicate = false;
    for (let j = i + 1; j <= number2.length; j++) {
      if (number2[i] === number2[j]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      arr.push(number2[i]);
    }
  }
  console.log(arr);
};
removeDuplicate();
