let dupArray = [1,2,3,1,2,2,3,5,1,9,21,21,9,4]
let uniqArray = [...new Set(dupArray)] // here I use sets to remove duplicate element in an array
console.log(uniqArray);