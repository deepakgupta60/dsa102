// Merge Sort
// how does it work?
// time and space complexity

// [5,4,1,3,2]--> 
// divide and conqour > merge and sort

// [5,4,1,3,2], left=0, right=4, mid=2
//   -> [5,4,1]
//     -> left=0, right=2, mid=1
//     -> [5,4]
//       -> left=0, right=1, mid=0
//       -> [5]
//       -> [4]
//     -> [1]
  
//   -> [3,2]
//     -> left=3, right=4, mid=3
//     -> [3]
//     -> [2]

// now it will start back tracking.. reverse.. like recursion.

// two pointers.. merge two sorted in two pointer.

// Binary search time complexity > 0(logn)
// Merge Sort > 0(logn) 
// when ever you dividing some range by numbers, time complexity will be logarithms..

// for(let i=0;i<n/2;i++) ?? no because of one time only.. but when dividing in evry time then it will be a logn


function merge(arr, left, mid, right)
{
 // arr1 =left to mid indices=mid-left+1
 // arr2 =mid+1 to right indices = right-(mid+1)+1 > right-mid
  
  let n1=mid-left+1;
  let n2=right-mid;
  
  let arr1 = new Array(n1)
  let arr2 = new Array(n2)
  
  for(let i=0;i<n1;i++)
    {
      arr1[i]=arr[left+i]
    }
  
  for(let i=0;i<n2;i++)
    {
      arr2[i]=arr[mid+1+i]
    }
  
  let idx1=0, idx2=0, k=left;
  
  while(idx1<n1 && idx2<n2)
    {
      if(arr1[idx1]<=arr2[idx2])
        {
          arr[k]=arr1[idx1]
          idx1++
        }
      else{
        arr[k]=arr2[idx2];
        idx2++
      }
      k++
    }

  while(idx1<n1)
    {
      arr[k]=arr1[idx1]
      idx1++
      k++
    }
  
  while(idx2<n2)
    {
      arr[k]=arr2[idx2]
      idx2++
      k++
    }

}

function mergeSorting(arr, left, right)
{
  if(left>=right) return;
  
  let mid = Math.floor((left+right)/2)
  mergeSorting(arr, left, mid)
  mergeSorting(arr, mid+1, right)
 merge(arr, left, mid, right) 

}

// Big 0(n*logn)


(function main(){

let arr=[5,4,1,2,3]
mergeSorting(arr,0,arr.length-1)
console.log("Answer: ",arr)
  
}())


// mergeSorting(arr, 0, 4) > mergeSorting(arr, 0, 2) && mergeSorting(arr, 3, 4)

// mergeSorting(arr, 0, 2) > mergeSorting(arr, 0, 1) && mergeSorting(arr, 2, 2)

// mergeSorting(arr, 0, 1) > mergeSorting(arr, 0, 0) && mergeSorting(arr, 1, 1)

// mergeSorting(arr, 3, 3) > mergeSorting()