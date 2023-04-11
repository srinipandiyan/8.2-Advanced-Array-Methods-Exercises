//some examples
let arr = [1,2,3];

arr.find(function(value, index, array){
  return value === 2;
});

// 2

arr.find(function(value, index, array){
  return value < 1;
});

// undefined

//how does find work
function find(array, callback){
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array) === true){
        return array[i]
      }
    }
  }

//using find in a function
function findOddNumber(arr){
  return arr.find(function(value){
    return value % 2 !== 0
  });
}

findOddNumber([2,3,4,5]) // 3
findOddNumber([4,6,8,10]) // undefined

function ensureNoSubArrays(arr){
    return arr.find(Array.isArray) === undefined
  }
  
  ensureNoSubArrays([1, 2, [3,4]]); // false
  ensureNoSubArrays([1,2,3,4]); // true

/* ### **When You Would Use Find**
You need to determine if a value in an array exists and you have to determine this by using a callback
A simple alternative to using filter and accessing the first element of the filtered array */