/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var inputArr = preferences;
  var arrLength = inputArr.length;

  var reindexedArr = [];
  inputArr.forEach(function(value, i){
    reindexedArr[i+1] = value;
  });

  var trianglesCounter = 0;
  var i;
  for(i = 1; i <= arrLength; i++){
    if(reindexedArr[i] != 
    reindexedArr[reindexedArr[i]])
    {
      if(reindexedArr[reindexedArr[i]] != 
      reindexedArr[reindexedArr[reindexedArr[i]]])
      {
        if((reindexedArr[reindexedArr[reindexedArr[i]]] != reindexedArr[reindexedArr[reindexedArr[reindexedArr[i]]]]) && 
        (reindexedArr[reindexedArr[reindexedArr[reindexedArr[i]]]] == reindexedArr[i]))
        {
          trianglesCounter = trianglesCounter + 1;
          delete reindexedArr[reindexedArr[reindexedArr[i]]];
          delete reindexedArr[reindexedArr[i]];
          delete reindexedArr[i];
        }
      }
    }
  }  
  return trianglesCounter;
};
