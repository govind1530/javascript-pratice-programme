var maxArea=(A)=>{
    let i = 0, j = A.length - 1, ans = 0;
    while (i < j) {
        ans = Math.max(ans, Math.min(A[i], A[j]) * (j - i));
        console.log('b',A[i],A[j],'c',Math.min(A[i],A[j]),'d',(j-i),'e',(Math.min(A[i],A[j])*(j-i)));
        if (A[i] < A[j])
            ++i;
        else
            --j;
    }
    return ans;
}

let arr=[1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));