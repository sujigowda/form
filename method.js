let arr=[1,2,3,4,5]
function isSquare(n){
    return  n>=1 && Math.sqrt(n)%1==0;
}

console.log(arr.filter(isSquare))


function fil()
{
document.getElementById("fs").innerHTML=arr.filter(isSquare);

}

function square(n){
    return n*n

}
function mp()
{
 document.getElementById("ms").innerHTML=arr.map(square)
}

function greater(n)
{
    return n>=6;
}
 console.log(arr.every(greater))
function ev()
{
    document.getElementById("es").innerHTML=arr.every(greater)
}

function inc()
{
    document.getElementById("is").innerHTML=arr.includes(5)
}
 let m1=(total,item)=>{return total+item ;}
function red()
{
    document.getElementById("rs").innerHTML=arr.reduce(m1)
}