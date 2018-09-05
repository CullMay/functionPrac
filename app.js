function square1(x){
    let name=x
    x = Math.pow(x,2)
    return x;


}


const square2=x=>Math.pow(x,2)


console.log(square1(0));
console.log(square1(2));
console.log(square1(5));

console.log(square2(0));
console.log(square2(2));
console.log(square2(5));
for(let x=0; x<11; x++){
    console.log(square1(x));
}
/*


const min= (x,y)=>{
    if(x>y)
        return y;
    if(x<y);
        return x;
    if(x=y)
        return x;
} 

console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1
*/