(function main()
{
let arr = [4,5,1,3,9]
quickSort(arr, 0, arr.length-1)
console.log(arr)

}())

function partionEle(arr, left, right)
{
  let pivot = arr[right]
  let i=left-1;
  
  for(let j=left;j<=right;j++)
    {
      if(arr[j]<pivot)
        {
          i++
          [arr[i], arr[j]]=[arr[j],arr[i]]
        }
    }
  [arr[right],arr[left+1]]=[arr[i+1],arr[right]]
  return i+1
}

function quickSort(arr, left, right)
{
  if(left>=right) return;
  
  let pi = partionEle(arr, left, right); //4,1
  quickSort(arr, left, pi-1) //0 to 3
  quickSort(arr, pi+1, right)
}

