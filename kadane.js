(function main()
{
  let ans = kadane();
  console.log("answer: ",ans)
}())

function kadane()
{
  let maxSoFar=-999999, maxEndingHere=0;
  
  let arr=[2,-24,-24,-61,20,2,5]
  for(let i=0;i<arr.length;i++)
    {
      maxEndingHere=maxEndingHere+arr[i]
      if(maxSoFar<maxEndingHere)
        {
          maxSoFar=maxEndingHere
        }
      if(maxEndingHere<0)
        {
          maxEndingHere=0
        }
    }
  
  return maxEndingHere
}