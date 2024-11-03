(function main(){
    let ans = suffixSum()
    console.log("Answer is: ", ans)
  }())
  
  function suffixSum()
  {
    let arr=[1,2,3,4];
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
  
    return suffix
  }
  