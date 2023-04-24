
const { describe } = require("yargs")
const sum = require("./sum.js")
const subtract = require("./sum.js")
const getTime = require("./sum.js")
const divide = require("./sum.js")
const multiply = require("./sum.js")
const { default: expect } = require("expect")
test(" should add 1 + 2 equals to 3", () =>{
    
    expect(1+2).toBe(3);
});
test(" should subtract 1 - 2 equals to -1", () =>{
    
    expect(1-2).toBe(-1);
});

test(" should get 120/3600 equals to 0.03333333333", () =>{
    
    expect(120/3600).toBe(0.03333333333333333);
});
test("should get 2 when divide 6 by 3",()=>{
    expect(6/3).toBe(2);

})
test("should get 6 when multiply 2 into 3",()=>{
    expect(2*3).toBe(6);
})
test("object assignment",() =>{
    const obj={};
    expect(obj).toEqual({});

})

    test("null",()=>{
        const n = null;
        expect (n).toBeFalsy()
        expect (n).not.toBeTruthy()
    })
    test("null",()=>{
        const n = "";
        expect (n).toBeFalsy()
        expect (n).not.toBeTruthy()
        // expect (n).toBeNull()
        // expect (n).not.toBeUndefined()
    })
        test("two plus two",()=> {
            const value = 2+2;
            expect(value).toEqual(4)
            expect(value).toBeGreaterThan(3)
            expect(value).toBeGreaterThanOrEqual(4)
            
        })
        test("two plus two",()=> {
            const value = 2+2;
           expect(value).toBeLessThan(5)
            expect(value).toBeLessThanOrEqual(5)
        })

    
