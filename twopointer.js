(function main(){
    let ans = twopointer()
    console.log("Answer is: ", ans)
  }())
  
  function twopointer()
  {
    let arr = [2,9,10,5,6]
    
    let brr=[]
    for(let i=0;i<arr.length;i++)
      {
        brr.push([arr[i],i])
      }
    
    brr.sort((a,b)=>a[0]-b[0])
  console.log(brr)
    
    
    let left=0
    let right=brr.length-1
    let target=7
    while(left<right)
      {
        let currSum = brr[left][0]+brr[right][0];
        if(currSum<target)
          {
            left++
          }
        else if(currSum>target)
          {
            right--
          }
        else
          {
            return [brr[left][1],brr[right][1]].sort((a,b)=>a-b)
          }
      }
    return []
    // let target=undefined
    // for(let i=0;i<arr.length;i++)
    //   {
    //     for(let j=i+1;j<arr.length;j++)
    //       {
    //         if(arr[i]+arr[j]==target)
    //           {
    //             return true
    //           }
    //       }
    //   }
  
  }