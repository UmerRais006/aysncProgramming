const matrix1 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 1, 2, 3],
  [4, 5, 6, 7, 8, 9],
  [9, 8, 7, 6, 5, 4],
  [3, 2, 1, 9, 8, 7],
  [6, 5, 4, 3, 2, 1],
];

const matrix2 = [
  [6, 5, 4, 3, 2, 1],
  [3, 2, 1, 9, 8, 7],
  [9, 8, 7, 6, 5, 4],
  [4, 5, 6, 7, 8, 9],
  [7, 8, 9, 1, 2, 3],
  [1, 2, 3, 4, 5, 6],
];
const resultMatrix = [];
const rowsA = matrix1.length;
const colA = matrix1[0].length;

const rowsB = matrix2.length;
const colB = matrix2[0].length;

function matrixMultiplication(m1, m2) {
  if (colA != rowsB) {
    console.log(
      "NO OF COLUMN OF MATRIX A IS NOT EQUAL TO NO OF ROWS OF MATRIX B"
    );
  }

  for (let i = 0; i < rowsA; i++) {
    resultMatrix[i] = [];

    funcPromise2(i, matrix1, matrix2, resultMatrix);
    console.log(resultMatrix, "final: ");
    console.log(resultMatrix);
  }
  console.log("============================================================");
  console.log(resultMatrix);
}

function funcPromise2(i, matrix1, matrix2) {
  return new Promise((resolve) => {
    let sum = 0;
    for (j = 0; j < colB; j++) {
      sum = 0;
      funcPromise1(i, j, matrix1, matrix2, resultMatrix).then((resolve) => {
        // console.log(resolve.result, "reolve");
        resultMatrix[i][j] = resolve.result;
        console.log(resultMatrix[i][j]);
      });
      resolve({ innerj: j, sum: sum });
    }
  });
}

function funcPromise1(i, j, m1, m2, res) {
  return new Promise((resolve) => {
    let result = 0;
    // console.log(j,"he");
    for (let k = 0; k < rowsB; k++) {
      result += m1[i][k] * m2[k][j];
    }
    // console.log(result);
    resolve({ result: result });
  });
}
// console.time();
const startTime = performance.now();
console.log(startTime);
console.log("---------------------------------------------------------------");
// console.time();
matrixMultiplication(matrix1, matrix2);
// console.timeEnd();
const endTime = performance.now();
console.log(endTime);
