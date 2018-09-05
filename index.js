import {generateRandomNumber} from './utils';

export default (guess) => {
  var actual = generateRandomNumber(0, 9);
  return guess === actual;
}