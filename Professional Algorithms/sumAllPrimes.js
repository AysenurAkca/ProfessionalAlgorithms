// If we want to find prime numbers, there is a rule, that number can be divided JUST by itself and 1
// Create a function that accpets a number 
// Create an empty array to put prime numbers
// Define a for loop from number to 2 and decreace 1 by 1
// Define a variable(a) to find out if it changes or not, if it doesnt change that means that number is definitely a prime number and put it to our array
// Define another for loop to check the smaller numbers than from the number to 2, too 
// For example the number is 5, we should check also 4,3 and 2
// If the current number can be divided the variable of the loop, increase the a so that we can check that variable
// When the for loop finish, by using forEach(or for or reduce) find the sum of that numbers
// return the total value



function sumPrimes(num){
    const primes=[];
    
    for(let x=num ; x>1 ; x--){
        let a = 0;
        for(let i=2; i<x; i++){
            if(x % i === 0){
               a++;
            }
        }
        if(a===0){
            primes.push(x)
        }
    }
    let total =0;
    primes.forEach(prime => {
        total += prime
    })
    return total
    
}

console.log(sumPrimes(5));