




let n =prompt("Enter Number")
let sum = [1];
for (let i =1; i<=n; i++){
    sum*=i
}
let result = [sum.toString().split()]
let ans =0
for (let i=0; i<=result.length; i++){
    ans +=Number(result[i])
}
console.log(ans);




















