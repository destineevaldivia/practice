const clothingRecommendation = require('./server2.js');

describe ("testing the clothingsRec function ", () => {

    test("testing with snowy weather", () => {
        expect(clothingRecommendation(-5,"Snowy")).toBe("Wear a heavy coat and gloves.")
    
    });
    
    test("testing with sunny weather", () => {
        expect(clothingRecommendation(15,"Sunny")).toBe("Wear a light jacket.")
    
    });

    test("testing catch all", () => {
        expect(clothingRecommendation(699,"something else")).toBe("Wear regular clothes.")
    
    });
})


describe ("testing vanilla js", () => {
    test("sum of two plus two", () => {
        expect(2+2).toBe(4)
    })

    test("sum functions", () => {
        const sum = (a,b) => {
            return a + b;
        }
        expect(sum(1,2)).toBe(3);
        
    })
})