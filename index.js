function add(input){
    if(input==="")return 0;
    const regex=/,|\n/;
    const numbers=input.split(regex).map((num)=>Number(num));
    return numbers.reduce((acc,curr)=>acc+curr,0);
}

module.exports={add};