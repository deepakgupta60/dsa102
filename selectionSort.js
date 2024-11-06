// Selection sort

// in bubble sort -> largest at the last pos, second largest second last... 

// but in selection > smallest at first, second smallest, and so on. oppposite of bubble sort

// elements means adjacent to next each other


function selectionSort(arr, n)
{
  let min_idx;
  for(let i=0;i<n;i++) // 0<5
    {
      min_idx=i; //0
      for(let j=i+1;j<n;j++) //j=1,j<5
      {
        if(arr[j]<arr[min_idx])
          {
            min_idx=j
          }
      }
      [arr[min_idx], arr[i]]=[arr[i],arr[min_idx]]
    }
  return arr
}
//[5,4,1,3,2] 
// i=0,0<5, min=0
// j=1, 1<5, arr[1]<arr[0], min=1
// j=2, 2<5, arr[2]<arr[1], min=2
// j=3, 3<5, arr[3]<arr[2]
// j=4, 4<5, arr[4]<arr[3] 

// [arr[2],arr[0]] => [1,4,5,3,2]

// i=1, min=1
// j=2, 2<5, arr[2]<arr[1], min=2
// j=3, 3<5, arr[3]<arr[2]
// j=4, 4<5, arr[4]<arr[3]
//[arr[2],arr[1]]=> [2,1,4,3,5]

let arr=[5,4,1,2,3]
console.log(selectionSort(arr, arr.length))

// > dry run the approach...
// i=0, minidx=2, swap(arr[0],arr[2]) => [1,4,5,3,2]
// i=1, minidx=4, swap(arr[1],arr[4]) => [1,2,5,3,4]

