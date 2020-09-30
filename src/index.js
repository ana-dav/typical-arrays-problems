
exports.min = function min (array) {
  return (typeof array === 'undefined' || array === null
  || array.length === 0) ? 0 : array.reduce((min, v) => min < v ? min : v)
}

exports.max = function max (array) {
  return (typeof array === 'undefined' || array === null
  || array.length === 0) ? 0 : array.reduce((max, v) => max > v ? max : v)
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array === null
  || array.length === 0) return 0
  const sum = array.reduce((prev, cur) => prev + cur, 0)
  return sum / array.length;
}
