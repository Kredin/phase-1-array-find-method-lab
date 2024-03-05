// code your solution here

// function superbowlWin(array) {
//   if (array.find(isW) == "W") {
//     return array.find(isW).year;
//   } else {
//     return undefined;
//   }
// }

// function isW(score) {
//   return score.result === "W";
// }

// function superbowlWin(array) {
//   let isW = array.find((e) => e.result === "W");
//   if (isW === "year") {
//     return undefined;
//   } else {
//     return isW.year;
//   }
// }

superbowlWin = (record) => {
  const result = record.find((record) => record.result === "W");
  return !!result ? result.year : undefined;
};
