function sumFirstNNumbers(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}

let result = sumFirstNNumbers(4);
console.log(result);
