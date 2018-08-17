module.exports = function (guess) {
  var actual = Math.floor(Math.random() * Math.floor(10))
  return guess === actual;
}