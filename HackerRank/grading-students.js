function gradingStudents(grades) {
  var solution = [];
  grades.forEach((grade) => {
    if (grade % 5 !== 0 && grade > 33) {
      for (let roundUp = grade; roundUp % 5 !== 0; roundUp++) {
        if ((roundUp + 1) % 5 === 0) {
          if (roundUp + 1 - grade < 3) {
            solution.push(roundUp + 1);
          } else {
            solution.push(grade);
          }
        }
      }
    } else {
      solution.push(grade);
    }
  });
  return solution;
}
console.log(gradingStudents([75, 73, 67, 38, 33]));
console.log(
  gradingStudents([22, 86, 30, 0, 16, 51, 53, 42, 48, 22, 69, 12, 27, 34, 24, 95, 16, 32, 22, 52, 56, 71, 95])
);
