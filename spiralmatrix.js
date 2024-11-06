
// // Session 4
// // Print matrix in spiral
// // best time to buy stock
// // find if the string permutations can perform a palindrom

// // adhoc problems. (there is no approach) --> don't require any specific algorithms..
// // brute force is a solution, adhoc problems > doesn't require, pre knowledge of any algo knowledge
// Problem Statement:
// 3x3 => 
// 123
// 894
// 765

// square matrix -> given the size of the square matrix >> spiral > 

// AxA -> 3x3 => 9
// 1 2 3
// 8 9 4
// 7 6 5

// 4x4 => 16
// [[1,2,3,4],[12,13,14,15],[11,16,15,6],[10,9,8,7]]

// 1  2  3  4
// 12 13 14 5
// 11 16 15 6
// 10 9 8 7

// while(everything is not filled)

// STEP1 > fill the elements that are not filled yet in left to right
// STEP2 > fill the elements that are not filled yet in top to bottom
// STEP3 > fill the elements that are not filled yet in right to left
// STEP4 > fill the elements that are not filled yet in bottom to top



 
(function main(){
    let ans = spiralMatrix()
    console.log("answer: ", ans)
  }())
  
  function spiralMatrix()
  {
  let n =4
    let topmost_row=0, bottommost_row=n-1, leftmost_col=0, rightmost_col=n-1; // for tracking variable
    let arr = new Array(n) // for initialize the n of 
  
    for(let i=0;i<n;i++)
      {
        arr[i]=new Array(n) // that needs to be filled..
      }
    
    let count = 1;
    while(count<=n*n)
      {
        // for row filled with elements
        for(let i=leftmost_col;i<=rightmost_col;i++)
          {
            arr[topmost_row][i]=count;
            count++;
          }
        
        topmost_row++;
        for(let i=topmost_row;i<=bottommost_row;i++)
          {
            arr[i][rightmost_col]=count;
            count++
          }
        rightmost_col--
        for(let i=rightmost_col;i>=leftmost_col;i--)
          {
            arr[bottommost_row][i]=count;
            count++
          }
        bottommost_row--;
        
        for(let i=bottommost_row;i>=topmost_row;i--)
          {
            arr[i][leftmost_col]=count;
            count++
          }
        leftmost_col++
      }
    
    return arr
  
  }
  // TC: 0(n*2)
  // SC: 0(n*2)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  