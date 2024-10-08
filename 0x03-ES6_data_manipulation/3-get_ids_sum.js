export default function getStudentIdsSum(students) {
  return students.reduce((total, student) => student.id + total, 0);
}
