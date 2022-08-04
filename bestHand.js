/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
  let obj = {};

  const flush = suits.every(suit => {
    if (suit === suits[0]) {
      return true
    }
  })

  if (flush) {
    return "Flush"
  } else {
    ranks.forEach(rank => {
      obj[rank] = (obj[rank] || 0) + 1;
    })

    const duplicates = Object.values(obj);
    const highestDuplicates = Math.max(...duplicates)

    if (highestDuplicates === 2) {
      return 'Pair'
    } else if (highestDuplicates >= 3) {
      return 'Three of a Kind'
    } else {
      return 'High Card'
    }
  }
};

console.log(bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"]));
console.log(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]));
console.log(bestHand([10, 10, 2, 12, 9], ["a", "b", "c", "a", "d"]));
console.log(bestHand([13, 12, 3, 4, 7], ["a", "d", "c", "b", "c"]));