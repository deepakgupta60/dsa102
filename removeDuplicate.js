(function main(){
    const ans = removeDuplicate();
    console.log("Answer: ", ans)
  }())
  
  function removeDuplicate()
  {
    let arr = [2,2,2,4,5]
    let n=arr.length
    let originIdx=0, newIdx=0;
    let cnt=0;
    
    while(originIdx<n)
      {
        if(originIdx==0)
          {
            cnt=1
          }
        else
          {
           if(arr[originIdx]=arr[originIdx-1])
            {
              cnt++
            }
            else
            {
              cnt=1
            }
          }
        if(cnt<=2)
          {
            arr[newIdx]=arr[originIdx]
            newIdx++
          }
        
        originIdx++
      }
  
    return newIdx
  }