function innerMost(i, j, rowsB, m1, m2) {
  let sum = 0;

  for (let k = 0; k < rowsB; k++) {
    sum += m1[i][k] * m2[k][j];
  }
  return sum;
}

function secondMost(i, colB, rowsB, resultMatrix, m1, m2) {
  for (let j = 0; j < colB; j++) {
    new Promise((resolve) => {
      resultMatrix[i][j] = innerMost(i, j, rowsB, m1, m2);
    });

    // console.log(resultMatrix[i], [j]);
  }
}

function outerMost(rowsA, colB, rowsB, m1, m2) {
  const resultMatrix = [];
  for (let i = 0; i < rowsA; i++) {
    resultMatrix[i] = [];

    new Promise((resolve) =>
      resolve(secondMost(i, colB, rowsB, resultMatrix, m1, m2))
    );
  }

  //   new Promise((resolve) => {
  //     resolve(outerMost(rowsA, colB, rowsB, m1, m2));
  //   });
  return resultMatrix;
}

function matrixMultiplication(m1, m2) {
  const rowsA = matrix1.length;
  const colA = matrix1[0].length;

  const rowsB = matrix2.length;
  const colB = matrix2[0].length;

  if (colA != rowsB) {
    console.log(
      "NO OF COLUMN OF MATRIX A IS NOT EQUAL TO NO OF ROWS OF MATRIX B"
    );
  }

  return outerMost(rowsA, colB, rowsB, m1, m2);
}

const rows = 1200;
const cols = 120;

const matrix1 = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => Math.floor(Math.random() * 100) + 1)
);
const matrix2 = Array.from({ length: cols }, () =>
  Array.from({ length: rows }, () => Math.floor(Math.random() * 100) + 1)
);
// before 1.9 sakonds
console.time("Time");
matrixMultiplication(matrix1, matrix2);
const resultMatrix = matrixMultiplication(matrix1, matrix2);
console.timeEnd("Time");
// console.log(resultMatrix);
