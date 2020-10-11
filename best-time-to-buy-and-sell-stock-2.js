let maxProfit=(price)=>{
    let profit=0;
    for(let i=0;i<price.length -1;i++){
        const possibleProfit=price[i+1]-price[i];
        profit=Math.max(possibleProfit+profit,profit)
    }
    
    return profit
}

let p=[7,1,5,3,6,4]

console.log(maxProfit(p));