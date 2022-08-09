function isPrime(number){
    for(i=2;i<number;i++){
        if(number % i === 0){
            return "Your entered number is not prime";
        }
    }
    return "Your entered number is prime";
}
console.log(isPrime(5));