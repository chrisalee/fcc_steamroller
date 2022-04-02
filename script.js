// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
  let flatResults = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flatResults.push(...steamrollArray(arr[i]));
    } else {
      flatResults.push(arr[i]);
    }
  }
  console.log(flatResults);
  return flatResults;
}

steamrollArray([1, [2], [3, [[4]]]]);

////////////////////////////////////////////////////////////////////
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
