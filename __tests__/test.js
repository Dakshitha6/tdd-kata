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

test(
    "Two numbers return its sum",
    ()=>{
        expect(add("4,5")).toBe(9);
    }
)

test(
    "Multiple numbers sperated by comma return its sum",
    ()=>{
        expect(add("4,5,5,2,2")).toBe(18);
    }
)

test(
    "Newlines as separators, return its sum",
    ()=>{
        expect(add("1\n2,3")).toBe(6);
    }
)