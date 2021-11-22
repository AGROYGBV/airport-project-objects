const Bag = require("./bags");

describe('Bag class', () => {
    test('bag needs a weight', () => {
        const testBag = new Bag(16)
        expect(testBag.weight).toBe(16)
    });
    test('bag needs to be within weight limit', () => {
        const testBag2 = new Bag(0)
        expect(testBag2.isOverLimit()).toBe(true)
        const testBag3 = new Bag(26)
        expect (testBag3.isOverLimit()).toBe(true)
        const testBag4 = new Bag(17)
        expect (testBag4.isOverLimit()).toBe(false)
    });
});