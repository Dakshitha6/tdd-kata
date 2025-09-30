const {add}=require("../index");

test(
    "Empty string return 0",
    ()=>{
        expect(add("")).toBe(0);
    }
)

test(
    "Single number return its values",
    ()=>{
        expect(add("5")).toBe(5);
    }
)