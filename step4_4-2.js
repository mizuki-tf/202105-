'use strict';

var nums = [4,5,6,9];

let isEvenNumber = num => {
  return num%2 === 0;
}

for(let i = 0;i < nums.length;i++){
  if(isEvenNumber(nums[i])){
    console.log(nums[i])
  }
}
