const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

 const countCats = (cats) => {
  if (cats === undefined || cats.length == 0) {
      return 0;
  }

  const stringForSearching = "^^";
  let countOfCats = 0;

  for (const cat of cats) {
    let countEars = 0;
    for (const element of cat) {
        if (element === stringForSearching) {
            countEars++;
        }

        if (countEars > 1) {
            break;
        }
    }

    if (countCats == 1) {
        countCats++;
    }
}

  return countOfCats;
}

module.exports = {
  countCats
};
