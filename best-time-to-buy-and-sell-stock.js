let maxProfilt=(stock)=>{
let length=stock.length;
let bestBuy=stock[0];
let profit=0;
for(let i=0;i<length;i++){
    bestBuy=Math.min(bestBuy,stock[i]);
    profit=Math.max(profit,stock[i]-bestBuy);
}
return profit;
}

let stock=[7,5,3,8,1];
console.log(maxProfilt(stock));