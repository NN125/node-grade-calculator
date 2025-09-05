// Grade calculation constants
const GRADE_A_THRESHOLD = 90;
const GRADE_B_THRESHOLD = 80;
const GRADE_C_THRESHOLD = 70;
const GRADE_D_THRESHOLD = 60;

const calculateLetterGrade = (numericGrade) => {
  if (numericGrade >= GRADE_A_THRESHOLD) {
    return `Grade ${numericGrade}: A`;
  } else if (numericGrade >= GRADE_B_THRESHOLD) {
    return `Grade ${numericGrade}: B`;
  } else if (numericGrade >= GRADE_C_THRESHOLD) {
    return `Grade ${numericGrade}: C`;
  } else if (numericGrade >= GRADE_D_THRESHOLD) {
    return `Grade ${numericGrade}: D`;
  }
  return `Grade ${numericGrade}: F`;
};

// Test cases
const testGrades = [95, 87, 74, 58, 92, 68];

console.info(calculateLetterGrade(testGrades));
