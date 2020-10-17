
/** 
 first declare a temp variable for storing value
 start loop to array length add value in variable
 temp += arr[i]
 */
function sum (arr){
    let temp=0;
for(let i=0;i<arr.length ; i++){
    temp=temp+arr[i];
}
return temp;
}
let arr=[6,4,5,6]
console.log(sum(arr));