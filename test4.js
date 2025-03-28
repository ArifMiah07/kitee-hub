
    console.log('hello world');

/**
 * generate a N by N matrix
 * if user input is 3
 * 
 * matrix body will be like this ==> 
 * [
 * [1,2,3],
 * [2,4,6],
 * [3,6,9]
 * ]
 * 
 * 
 * 
 * 
 * 
 * 
 */

function Matrix(N){
    let matrix = [];

    for (let row = 1; row <= N; row ++){
        let rowArray = [];
        for (let column = 1; column < N + 1; column++){
            rowArray.push(row * column)
        }
        matrix.push(rowArray)
    }
        return matrix
}

console.log(Matrix(4))

/**
 * Problem: Find the smallest strictly positive integer `n` such that:
 * 
 * Given two consecutive integers:
 *   k1 = k
 *   k2 = k + 1
 * 
 * The numbers `n * k1` and `n * k2` must have the same digits, 
 * but in a different order.
 * 
 * Example 1:
 *   Input: k1 = 100
 *   Output: n = 8919
 *   Explanation:
 *     8919 * 100 =  891900
 *     8919 * 101 =  900819
 * 
 *     n * k1 = 
 * 
 *  19 * 10 = 190
 *  a * b = q
 *  a = q / b 
 *  19 * 11
 *   Both results have the same digits but are reordered.
 * 
 * Example 2:
 *   Input: k1 = 325
 *   Output: n = 477
 *   Explanation:
 *     477 * 325 = 155025
 *     477 * 326 = 155502
 *   Again, the digits match but are rearranged.
 * 
 * Constraints:
 *   - For Python, Ruby, Haskell: 10 < k < 10^16
 *   - For JavaScript, D: 10 < k < 10^9
 * 
 * Task:
 * Implement a function that takes `k` as input and returns `n`.
 * 
 * 
 * 
 * 
 * 
 */
// function findLowestInt(k) {
//     // your code here
//     const k1 = k;
//     const k2 = k1 + 1;

//     const n * k



//     var lowestInt;
//     return lowestInt;
// }

// findLowestInt(100)




function fibonacci(N){
    
    

    
}

console.log(fibonacci(30))