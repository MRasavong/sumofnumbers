const testNums = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) { // Change from nums.lengths to nums.length
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1)); // Remove unnecessary arguments
}

console.log(sumRecursion(testNums));

const sumTheSimpleWay = (nums) => nums.reduce((memo, num) => memo + num, 0); // Fix the arrow function

console.log(sumTheSimpleWay(testNums));
