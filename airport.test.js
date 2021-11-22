const Airport = require("./airport")

describe('Airport class', () => {

    test('airport has name', () => {
        const testAirport = new Airport('DFW', 'Dallas, Texas')
        expect(testAirport.name).toBe('DFW')
    });

    test('airport has location', () => {
        const testAirport2 = new Airport('DFW', 'Dallas, Texas')
        expect(testAirport2.location).toBe('Dallas, Texas')
    });
});
