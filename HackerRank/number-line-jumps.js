// This solution is extrememly inneficient. Just tried to brute force my way through it to make something work. After looking at the discussion board I saw that the modulo solution:

// function kangaroo(x1, v1, x2, v2) {
//   if (x1 < x2 && v1 < v2) return "NO";
//   else {
//     if (v1 != v2 && (x2 - x1) % (v1 - v2) == 0) return "YES";
//     else return "NO";
//   }
// }

function kangaroo(x1, v1, x2, v2) {
  if (x1 > x2 && v1 > v2) {
    return "NO";
  } else if (x2 > x1 && v2 > v1) {
    return "NO";
  } else {
    var firstArray = [];
    var secondArray = [];
    for (let index = 1; index < 10000; index++) {
      firstArray.push(x1 + v1 * index);
    }
    for (let index = 1; index < 10000; index++) {
      secondArray.push(x2 + v2 * index);
    }
    for (let index = 0; index < firstArray.length || index < secondArray.length; index++) {
      if (firstArray.includes(secondArray[index])) {
        if (firstArray.indexOf(secondArray[index]) === index) {
          return "YES";
        }
      }
    }
  }
  return "NO";
}
console.log("YES", kangaroo(0, 3, 4, 2));
console.log("YES", kangaroo(14, 4, 98, 2));
console.log("NO", kangaroo(21, 6, 47, 3));
console.log("NO", kangaroo(28, 8, 96, 2));
console.log("YES", kangaroo(4523, 8092, 9419, 8076));
