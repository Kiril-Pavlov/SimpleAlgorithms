function sumFirstNNumbersDivK(n,k){
    let sum =0;
    for(i=1;i<=n;i++){
        if(i%k===0){
            sum=sum+i;
        }
    }
    return sum;
}

let result = sumFirstNNumbersDivK(10,3);
console.log(result);
