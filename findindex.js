(function main(){
    let ans = middleIndex()
    console.log("Answer is: ", ans)
  }())
  
  function middleIndex()
  {
    let arr=[1,3,3,4,4];
    let prefix=new Array(arr.length)
    for(let i=0;i<arr.length;i++)
      {
        if(i==0)
          {
            
        prefix[i]=arr[i]
          }
        else
          {
            prefix[i]=arr[i]+prefix[i-1]
          }
      }
      
    
    let suffix=new Array(arr.length)
    
    
    for(let i=arr.length-1;i>=0;i--)
      {
        if(i==arr.length-1)
          {
            suffix[i]=arr[i]
          }
        else
          {
            suffix[i]=arr[i]+suffix[i+1]
          }
      }
    
    for(let i=1;i<arr.length;i++)
      {
        if(prefix[i-1]==suffix[i+1])
          {
            return i
          }
      }
  
    return -1
  }
  