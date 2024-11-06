(function main(){
  const ans = slidingWindow();
  console.log("Answer: ", ans)
}())

function slidingWindow()
{
  let arr = [2,5,9,2,5,4,8,9,3];
  let n=arr.length;
  let k=3
  let currSum=0;
  
  for(let i=0;i<k;i++)
    {
      currSum+=arr[i]
    }
  let maxSum = currSum
  
  let left=0, right=k-1;
  
  while(right<n-1)
    {
      left++
      right++
      currSum+=arr[right]-arr[left-1]
      
      console.log(currSum)
      if(maxSum<currSum)
        {
          maxSum=currSum
        }
    }
  return maxSum
}