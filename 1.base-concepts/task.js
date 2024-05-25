"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b * b) - (4 * a * c);
 if (d === 0) {
    arr.push((-b)/(2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}