// Grade calculation constants
const GRADE_A_THRESHOLD = 90;
const GRADE_B_THRESHOLD = 80;
const GRADE_C_THRESHOLD = 70;
const GRADE_D_THRESHOLD = 60;

const calculateLetterGrade = (numericGrade) => {
  if (numericGrade >= GRADE_A_THRESHOLD) {
    return console.log("Grade " + numericGrade + ": A");
}
  else if (numericGrade >= GRADE_B_THRESHOLD) {
    return console.log("Grade " + numericGrade + ": B");
  }
  else if (numericGrade >= GRADE_C_THRESHOLD) {
    return console.log("Grade " + numericGrade + ": C");
  }
  else if (numericGrade >= GRADE_D_THRESHOLD) {
    return console.log("Grade " + numericGrade + ": D");
  } else {
    return console.log("Grade " + numericGrade + ": F");
  }
