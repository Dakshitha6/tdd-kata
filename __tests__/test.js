const {add}=require("../index");

test(
    "Empty string return 0",
    ()=>{
        expect(add("")).toBe(0);
    }
)
