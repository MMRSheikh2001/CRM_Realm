//to run go to folder in cmd and run 
//    node ProblemTwo.js


function findTwoSum(nums, target) {
  const seen = new Map(); 

  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];

    if (seen.has(needed)) {
      return [seen.get(needed), i];
    }

    seen.set(nums[i], i);
  }

  return null;
}

console.log(findTwoSum([1,2,3],5));
console.log(findTwoSum([9,7,4],15));
console.log(findTwoSum([1,5,8],10));
console.log(findTwoSum([10,20,21],41));