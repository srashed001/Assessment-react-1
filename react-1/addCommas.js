function addCommas(num) {
  // if num is 0 return 0
  if (num === 0) return num;
// if number is neg => set is Neg to true and set number to absolute value of number 
// we need absolute value of number to properly run parseThosandsPlace function 
// if negative will add '-' to string at end before returning result
  let isNeg;
  if (num < 0) {
    num = Math.abs(num);
    isNeg = true;
  }
  //if num is float, turn into string and save it to hasDecimal variable. If no decimal save undefined to hasDecimal
  const hasDecimal = String(num.toPrecision()).split(".")[1];

  /* function that return whole number for specific thousands place in a number 
    used in this function to break up a large number per 1000 to nth power 
    num = 123,456,789
    parseThousandsPlace(num, 1) => 789
    parseThousandsPlace(num, 2) => 456.789 => 456
    parseThousandsPlace(num, 3) => 123.456789 => 123
  */

  function parseThousandsPlace(num, pow) {
    return String(
      parseInt((num % Math.pow(1000, pow)) / (Math.pow(1000, pow) / 1000))
    );
  }
  //   use .toExponential to convert number to scientific notation which provides size of number
  //  using length function could provide inaccurate data if provided a decimal
  const strExp = num.toExponential().split("e+")[1];
  const numPow = Math.floor((Number(strExp) + 1) / 3) + 1;
  const numArr = [];

/*
  in a loop call parseThousandsPlace to create an array of values that represent values for ever 1000 ** n power 
  When calling function at highest power - do not pad numbers with 0, else padStart so number is three digits 45 => 045
*/
  for (let i = numPow; i > 0; i--) {
    const value = parseThousandsPlace(num, i);
    i === numPow ? numArr.push(value) : numArr.push(value.padStart(3, 0));
  }

//   remove first element of array if first element is 0, 
  if (numArr[0] === "0") numArr.shift();
// join array of values with ',' and add decimal values if exist
  const res = !hasDecimal
    ? numArr.join(",")
    : numArr.join(",") + "." + hasDecimal;

// if number is negative return result with a '-' in front

  return isNeg ? "-" + res : res;
}

module.exports = addCommas;
