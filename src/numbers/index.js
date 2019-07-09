const isEven = (num) => {
  // write code for numbers.isEven
  if(num% 2 ===0){
    return true

  }
  

}

const sum = (arr) => {
  // write code for numbers.sum
  return (arr.length === 0) ? 0 : arr[0] +sum(arr.slice(1));
  //return 21

}

const comboSum = (arr, addIt) => {
  // write code for numbers.comboSum
  return false
 let thisSum = sum(arr)
 if(thisSum == addIt){
   return true
 }

}

module.exports = {
  isEven,
  sum,
  comboSum
}