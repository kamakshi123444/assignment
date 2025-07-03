let number=[21,14,20,14,31];
let largest=number[0];
for(let i =1; i<number.length;i++){
    if(number[i]>largest){
        largest=number[i];
    
    }
}
console.log("largest number",largest)
