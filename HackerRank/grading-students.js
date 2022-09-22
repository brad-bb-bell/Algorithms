function gradingStudents(grades) {
  grades.forEach(grade => {
    if (grade % 5 !== 0) {
        console.log("not divisible");
    } else if (grade % 5 === 0) {
        console.log("divisible")
    }
    //   var roundUp = grade;
    //   for (let index = 1; grade % 5 === 0; index++) {
    //     roundUp = grade + index;
    //     console.log(roundUp);   
    //   }
s
  });
}
console.log(gradingStudents([73,67,38,33]));