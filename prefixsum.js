(function main(){
    let ans = prefixSum()
    console.log("Answer is: ", ans)
  }())
  
  function prefixSum()
  {
    let arr=[1,2,3,4];
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
  
    return prefix
  }
  


  