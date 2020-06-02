
//problem -1
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

let nums=[2, 7, 11, 15];
let target=9;
    const map=new Map;
 for(let i=0;i<nums.length; i++){
 
     let comp=target-nums[i];
 if(map.has(comp)){
   console.log([map.get(comp),i])
     }
     map.set(nums[i],i)
 }


//problem -2

//  Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.
// Example:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.


//Two Pointers Technique


let numbers = [2,7,11,15];
//let target=9;
    let comp=[];
    let i=0
    let j=numbers.length-1;
    
    while(i<j){
        if(numbers[i]+numbers[j] == target){
            comp.push(i+1);
            comp.push(j+1);
            console.log(comp);
            break;
        }
        else if(numbers[i]+numbers[j] < target){
            i++
        }else{
            j--
        }
    }
    
