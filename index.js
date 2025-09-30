function add(input){
    if(input==="")return 0;
    const numbers=input.split(",").map((num)=>Number(num));
    return numbers.reduce((acc,curr)=>acc+curr,0);
}

module.exports={add};