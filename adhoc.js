
// Session 4
// Print matrix in spiral
// best time to buy stock
// find if the string permutations can perform a palindrom

// adhoc problems. (there is no approach) --> don't require any specific algorithms..
// brute force is a solution, adhoc problems > doesn't require, pre knowledge of any algo knowledge


(function main(){
    const ans = tripletSum();
    console.log("Answer: ", ans)
  }())
  
  function tripletSum()
  {
    let arr = [3,7,4,2,5,7,5]
    let n=arr.length
    let ans=0;
    for(let i=0;i<n;i++)
      {
        for(let j=i+1;j<n;j++)
          {
            for(let k=j+1;k<n;k++)
              {
                if(arr[i]<arr[j] && arr[j]<arr[k])
                  {
                    ans = Math.max(ans, arr[i]+arr[j]+arr[k])
                  }
              }
          }
      }
  
    return ans
  }