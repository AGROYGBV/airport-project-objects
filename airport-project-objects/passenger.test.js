const { TestWatcher } = require("@jest/core");
const Passenger = require("../passenger");

describe('Passenger class', () => {
    test('Passenger has name', () => {
        const testPassenger = new Passenger("Martha", "365433099", "15A")
        expect(testPassenger.name).toBe("Martha")
    });
    test('Passenger has passportNumber', () => {
        const testPassenger2 = new Passenger("Martha", "365433099", "15A")
        expect(testPassenger2.passportNumber).toBe("365433099")
    });
    test('Passenger has seatNumber', () => {
        const testPassenger3 = new Passenger("Martha", "365433099", "15A")
        expect(testPassenger3.seatNumber).toBe("15A")
    });
    test('Passenger has bag(s)', () => {
        const testPassenger4 = new Passenger("Martha", "365433099", "15A")
        testPassenger4.addBag(1)
        testPassenger4.addBag(3)
        expect(testPassenger4.bags[0]).toBe(1)
        expect(testPassenger4.bags[1]).toBe(3)
    });
});
