function bonAppetit(bill, k, b) {
  if ((bill.reduce((x, y) => x + y, 0) - bill[k]) / 2 === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - (bill.reduce((x, y) => x + y, 0) - bill[k]) / 2);
  }
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12));

// should be Bon Appetit
console.log(bonAppetit([3, 10, 2, 9], 1, 7));
