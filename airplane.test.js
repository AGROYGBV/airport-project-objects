const Airplane = require("./airplane");

describe('Airplane class', () => {
    test('airplane has model type', () => {
        const testAirplane = new Airplane("Boeing")
        expect(testAirplane.type).toBe("Boeing")
    });
    test('Passengers on board', () => {
        const testAirplane2 = new Airplane("Boeing")
        testAirplane2.onBoard('365433099')
        testAirplane2.onBoard('438762098')
        expect(testAirplane2.passengerAccounted[0]).toBe('365433099')
        expect(testAirplane2.passengerAccounted[1]).toBe('438762098')
    });    
});
