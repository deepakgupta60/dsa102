(function main(){
    let ans = mergeSort()
    console.log("Answer is: ", ans)
  }())
  
  function mergeSort()
  {
    let arr=[2,3,4,6,85];
    let arr2=[2,4,5,6,7,8,9];
    
    let n=arr.length
    let m=arr2.length
    
    let idx1=0, idx2=0
    let res=[]
    while(idx1<n && idx2<m)
      {
        if(arr[idx1]<=arr2[idx2])
          {
            res.push(arr[idx1])
            idx1++
          }
        else
          {
            res.push(arr2[idx2])
            idx2++
          }
      }
    
    while(idx1<n)
      {
        res.push(arr[idx1])
        idx1++
      }
    while(idx2<m)
      {
        res.push(arr2[idx2])
        idx2++
      }
    
    
    
    
    
    
    return res
  }
  