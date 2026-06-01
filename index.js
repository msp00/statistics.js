function meanArray(arr) {
  if (arr.length === 0) {
    return null;
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result / arr.length;
}

function meanCenter(arr, meanValue) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] - meanValue);
  }

  return result;
}

function squareArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }

  return result;
}

function sumArray(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

function getVariance(dataset) {
  if (dataset.length === 0) return null;

  const meanValue = meanArray(dataset);
  const center = meanCenter(dataset, meanValue);
  const squares = squareArray(center);
  const summedArray = sumArray(squares);

  return summedArray / dataset.length;
}

module.exports = {
  meanArray,
  getVariance,
};
