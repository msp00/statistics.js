const mean = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result / arr.length;
};

const meanCenter = (arr, meanValue) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] - meanValue);
  }

  return result;
};

const squareArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }

  return result;
};

const sumArray = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
};

const getVariance = (dataset) => {
  const meanValue = mean(dataset);
  const center = meanCenter(dataset, meanValue);
  const squares = squareArray(center);
  const summedArray = sumArray(squares);

  return summedArray / dataset.length;
};

const getStandardDeviation = (dataset) => {
  if (dataset.length === 0) return null;

  const varianceValue = getVariance(dataset);
  return Math.sqrt(varianceValue);
};

module.exports = {
  mean,
  getVariance,
  getStandardDeviation,
};
