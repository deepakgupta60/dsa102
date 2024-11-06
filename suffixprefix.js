(function main()
{
  let ans = prefixSum();
  console.log("answer: ",ans)
}())

function prefixSum()
{
  let arr = [2,5,9,4,3,1]
  
  let prefix=new Array(arr.length)
//   0-5, 6
  for(let i=arr.length-1;i>=0;i--)
    {
      if(i==arr.length-1)
        {
          prefix[i]=arr[i]
        }
      else
        {
          prefix[i]=arr[i]+prefix[i+1]
        }
    }
  
  
  return prefix
}