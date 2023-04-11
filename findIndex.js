//some examples
let arr = [1,2,3];

arr.findIndex(function(value, index, array){
  return value < 2;
}); // 0

arr.findIndex(function(value, index, array){
  return value > 3;
}); // -1

//how findIndex works
function findIndex(array, callback){
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array) === true){
        return i;
      }
    }
    return -1;
  }

//using findIndex in a function
function findPositionOfBoolean(list){
    return list.findIndex(function(value, index, array){
      return typeof value === "boolean"
    });
  }
  
  findPositionOfBoolean([1,3,false,true]) // 2
  findPositionOfBoolean(["no booleans", "around", "these parts"]) // -1

/* ### **When You Would Use Findindex**
You need to determine the index of a value in an array if it exists and you have to determine this by using a callback
A better version of indexOf to be used when a callback is necessary */