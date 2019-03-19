export const generateRandomNumber = (min, max) => console.log(min, max) ||
  Math.floor(Math.random() * (max - min + 1)) + min;
