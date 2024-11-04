(function main()
{
  let ans = sliding();
  console.log("answer: ",ans)
}())

function sliding()
{
  let arr = [2,5,9,4,3,1]
  
  let k=3
  let left=0, right=k-1; // first window
  let currSum=0;
  let n=arr.length
  for(let i=left;i<=right;i++)
  {
    currSum+=arr[i]
  }
  let maxSum =currSum;
  while(right<=n-2)
    {
      left++
      right++
      currSum+=arr[right]-arr[left-1]
      if(maxSum<currSum)
        {
          maxSum=currSum
        }
    }
  return maxSum
}