# 8.2-Advanced-Array-Methods-Exercises
# ****Some Every Exercise****

Write the functions below and ensure that the tests pass, you can find the tests in the downloaded code.

[js-array-some-every-exercise-starter.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b39f751b-7324-435e-b860-d484055ec8ff/js-array-some-every-exercise-starter.zip)

### **hasOddNumber**

Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

```jsx
hasOddNumber([1,2,2,2,2,2,4]) // true
hasOddNumber([2,2,2,2,2,4]) // false
```

### **hasAZero**

Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

```jsx
hasAZero(33321232131012) // true
hasAZero(1212121) // false
```

### **hasOnlyOddNumbers**

Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

```jsx
hasOnlyOddNumbers([1,3,5,7]) // true
hasOnlyOddNumbers([1,2,3,5,7]) // false
```

### **hasNoDuplicates**

Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

```jsx
hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true
```

### **hasCertainKey**

Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

```jsx
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainKey(arr,'first') // true
  hasCertainKey(arr,'isCatOwner') // false
```

### **hasCertainValue**

Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

```jsx
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  hasCertainValue(arr,'title','Instructor') // true
  hasCertainValue(arr,'first','Elie') // false
```

##
