const ARR = ['1', '2', '3', '4', '5', '6', '7', '3'];
const RES = ARR
  .map( (el) => parseInt(el) )
  .filter( (number) => number%2 )
  .reduce( (max, val) => Math.max( max, val), 0);

console.log(RES);