function add(input){
    if(input==="")return 0;
    let regex=/,|\n/;
    if(input.startsWith("//")){
        const parts=input.split("\n");
        regex=parts[0].slice(2);
        input=parts[1];
    }
    const numbers=input.split(regex).map((num)=>Number(num));
    const negativeNumbers=numbers.filter((val)=>val<0);
    if(negativeNumbers.length>0){
        throw new Error(
            "Negative numbers not allowed " + negativeNumbers.join(",")
        )
    }
    return numbers.reduce((acc,curr)=>acc+curr,0);
}

module.exports={add};