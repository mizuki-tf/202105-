'use strict';

var nums = [1,3,5,8,4];
var num_Even = [];
for(var i = 0;i<nums.length;i++){
  if(nums[i]%2===0){
    num_Even.push(nums[i]);
  }
}

console.log(num_Even);