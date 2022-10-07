const nums = [1,2,3,4,5,6,7,8,9,10];

var odds = nums.filter(nums => nums % 2 != 0);
console.log(odds);
var divis = nums.filter(nums => nums % 2 ==0 || nums % 5 ==0);
console.log(divis);
var disq = nums.filter(nums => nums % 3 == 0).map(nums => nums * nums);
console.log(disq);
var divisFive = nums.filter(nums => nums % 5 ==0 ).map(nums => nums * nums);
var sum = divisFive.reduce((acc, value) => acc + value,0);
console.log(`The sum of the numbers divisible by 5 and then squared is: ${sum}`); 