// Create a function that accept a num
// Create 3 variables x,y,z 
// x refers to first number(1), y refers to second number(1) and z refers to sum of x and y
// Create an empty array to put odd fibonacci numbers(oddFibo)
// Create a for loop that loops from 0 to number
// if x less than number and when it divided by 2, remain is 1 then push the x to oddFibo
// To continue to find fibonacci numbers do the same things previous assignments(z =x+y, x=y,y=z)
// When the for loop finish, by using forEach(or for or reduce) find the sum of that numbers
// return the total value

function sumAllOddFibonacci(num){
    let x = 1
    let y = 1
    let z =0;
    const oddFibo = [];
    for(let i=0; i<num ; i++){
        if(x<=num && x%2 ==1){
            oddFibo.push(x)
            }
        z = x+y;
        x = y;
        y = z;
        }
    
    let total =0;
    oddFibo.forEach(f => total += f)
    return total
}

console.log(sumAllOddFibonacci(13));