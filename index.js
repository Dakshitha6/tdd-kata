function add(input){
    if(input==="")return 0;
    const numbers=input.split(",").map((num)=>Number(num));
    
    if(numbers.length===1){
        return numbers[0];
    }

    const sum=numbers[0]+numbers[1];
    return sum;
}

module.exports={add};