// # Problem doesn't require any of algorth knowledge.

// Today Agenda:
// 1. Sorting > Bubble sort, insertion sort, selection sort, merge sort
// 2. Space and Time Complexity for sorting algorithms.

// NOTE: Brute force sorting => Optimization

// Step1: move the largest element in last pos
// Step2: move the second largest to the second last pos

// Quest: [5,4,1,3,2]

// steps1: [2,4,1,3,5], swap(arr[0], arr[4]), compare until index=4
// steps2: [2,3,1,4,5], swap(arr[1], arr[3]), compare until index=3
// steps2: [2,1,3,4,5], swap(arr[2], arr[2]), compare until index=2
// steps4: [1,2,3,4,5]

// why do we need sorting:

// search bar search name, most relevent to u that will come first is the suggestions.. doesn't they rank things. internal ranking ..

// will wait for 2 second for operation.. our tip on hand..
// milisecond and microsecond...

// comedy / humaruos movies will come up..

// swiggy and zomato again using rankings..
// all of use real sorting..
// searching becomes easy, two pointers become..
// array has to be sorted.

// > move the largest to the last pos

// do i need to move the elements

// move the largest element to the last positions..

// Swapping.. unless everyting is move

function bubbleSort(arr, n) // [],5
{
  for(let i=0;i<n;i++) // 0 ; 0<5
    {
      for(let j=0;j<n-i-1;j++) // 0<5-0-1 => 0<4
        {
         if(arr[j]>arr[j+1]) // arr[0] > arr[1] > 5>4
           {
             // let temp=arr[j]
             // arr[j]=arr[j+1]
             // arr[j+1]=temp
             [arr[j], arr[j+1]]=[arr[j+1], arr[j]] // 4,5
           }
        }
    }
  return arr
}
//0<5 => 0,1,2,3,4
// i=0,
 // j=0,0<4, [4,5,1,3,2]
 // j=1, [4,1,5,3,2]
 // j=2, [4,1,3,5,2]
 // j=3, [4,1,3,2,5]

// i=1
  // j=0, 0<3, [1,4,3,2,5]
  // j=1, 0<3, [1,3,4,2,5]
  // j=2, 0<3, [1,3,2,4,5]

// i=2
  // j=0, 0<2, [1,3,2,4,5]
  // j=1, 0<2, [1,2,3,4,5]



let arr = [5,4,1,3,2]
console.log(...bubbleSort(arr, arr.length))









