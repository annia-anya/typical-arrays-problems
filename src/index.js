function withCheckEmpty(fn) {
    return (array) => {
        if (!array || array.length === 0) {
            return 0;
        }
        return fn(array);
    }
}

exports.min = withCheckEmpty(function(array) {
  let currentMin = array[0];
  for (let i = 1; i < array.length; i++) {
      if(array[i] < currentMin){
          currentMin = array[i];
      }
  }
  return currentMin;
});

exports.max = withCheckEmpty(function(array) {
    let currentMax = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] > currentMax){
            currentMax = array[i];
        }
    }
    return currentMax;
  })

exports.avg = withCheckEmpty(function(array) {
  const length = array.length;
  let sum = 0;
//   let sum = array.reduce((result, item) => result + item, 0);

  for(let i = 0; i < array.length; i++) {
      sum += array[i];
  }
  return sum / length;
  // return array.reduce((result, item) => result + item, 0) / array.length;
})
