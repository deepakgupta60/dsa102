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



(function main(){
  const ans = slidingWindow();
  console.log("Answer: ", ans)
}())

function slidingWindow()
{
  let s = "abacd";
  let k=3
  
  let left=0, right=0, ans=0
  
  let mp = new Map()
  
  while(right<s.length)
  {
    // console.log("test")
    if(mp.has(s[right])==false)
      {
        mp.set(s[right], 1)
      }
    else
      {
        mp.set(s[right], mp.get(s[right])+1)
      }
    
    while(mp.size>k)
      {
        mp.set(s[left], mp.get(s[left])-1)
        
        if(mp.get(s[left])==0)
          {
            mp.delete(s[left])
          }
        left++
      }
    
    console.log(ans)
    
    ans=Math.max(ans, right-left+1)
    
    right++
  }  
  return ans
}

(function main(){
  const ans = slidingWindow();
  console.log("Answer: ", ans)
}())

function slidingWindow()
{
  let s = "abacd";
  let k=3
  
  let left=0, right=0, ans=0
  
  let mp = new Map()
  
  while(right<s.length)
  {
    // console.log("test")
    if(mp.has(s[right])==false)
      {
        mp.set(s[right], 1)
      }
    else
      {
        mp.set(s[right], mp.get(s[right])+1)
      }
    
    while(mp.size>k)
      {
        mp.set(s[left], mp.get(s[left])-1)
        
        if(mp.get(s[left])==0)
          {
            mp.delete(s[left])
          }
        left++
      }
    
    console.log(ans)
    
    ans=Math.max(ans, right-left+1)
    
    right++
  }  
  return ans
}