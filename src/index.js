/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences=[]) {
  var n = 0;
  var k = 0;
  var m = 0;
  preferences.splice(0,0,null);
  var count = 0;
  for (var a = 1; a <= preferences.length+1; a++){
    n = preferences[a];
    k = preferences[n];
    if(preferences[k] == a){
      count+=1;
    }
}
  return Math.floor(count/3);
};
