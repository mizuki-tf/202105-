'use strict';

var nums = [1,3,5,8,4];
var count = 0;
for(var i = 0;i < nums.length;i++){
  if(nums[i] <= 4){
    count = count + nums[i];
  }
}

console.log(count);