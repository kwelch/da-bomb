import {generateRandomNumber} from './utils';

export default (guess) => {
  var actual = generateRandomNumber(0, 1);
  // + will cast it as a number
  return +guess === +actual;
}