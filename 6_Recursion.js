function Factorial(n){
    if(n === 1){
        return 1
    }
    return n * Factorial(n - 1)
}

console.log(Factorial(2))


// 1, 1, 2, 3, 5, 8, 13, 21 -

function Fibonacci(n){
    if(n <= 2){
        return n
    }
     return Fibonacci(n - 1) + Fibonacci(n - 2)
}

console.log(Fibonacci(13))