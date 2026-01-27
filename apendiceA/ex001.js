const sum = function sum(a,b){
    return a+b;
};


const arrowSum = (a,b) => a+b;

console.log(sum(5,5));
console.log(arrowSum(5,5));

const greeting = (name) =>{
    if(name){
        return 'Olá '+name+'!'
    } else{
        return 'Olá!'
    }
};